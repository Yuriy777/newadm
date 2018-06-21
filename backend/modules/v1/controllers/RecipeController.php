<?php

namespace backend\modules\v1\controllers;

use backend\modules\v1\helpers\RecipeHelper;
use common\models\Company;
use common\models\Constant;
use common\models\Recipe;
use Throwable;
use Yii;
use yii\base\DynamicModel;
use yii\db\ActiveQuery;
use yii\db\Expression;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class RecipeController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Recipe::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        unset($actions['view']);
        unset($actions['index']);
        unset($actions['update']);
        unset($actions['delete']);
        return $actions;
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::class,
            'optional' => $this->publicActions,

        ];

        return $behaviors;
    }

    /**
     * @param int $page
     * @param int $limit
     * @param string $name
     * @param string $status
     * @param string $lang
     * @param string $c_name
     * @param null $p_count
     * @param string $link
     * @return array
     */
    public function actionIndex($page = 1, $limit = 10, $name = '', $status = '', $lang = '', $c_name = '', $p_count = null, $link = '')
    {
        $model = DynamicModel::validateData(compact('name', 'page', 'status', 'limit', 'lang', 'c_name', 'p_count', 'link'), [
            [['name', 'c_name', 'link', 'c_name'], 'string', 'max' => 128],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['lang'], 'in', 'range' => Constant::getAllLang()],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1],
            [['p_count'], 'number'],

        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }


        $frontUrl = $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . '/recipes/';
        $recipeUrl = new Expression("CONCAT('$frontUrl', " . Company::tableName() . ".alias, '/', ".Recipe::tableName().".id)");

        $recipeQuery = Recipe::find()
            ->select([
                Recipe::tableName() . '.id',
                Recipe::tableName() . '.company_id',
                Recipe::tableName() . '.name_en',
                Recipe::tableName() . '.image',
                Recipe::tableName() . '.people_amount',
                Recipe::tableName() . '.slug',
                Recipe::tableName() . '.language',
                Recipe::tableName() . '.status',
                'recipeUrl' => $recipeUrl,
            ]);

        $recipeQuery->andFilterWhere(['like', Recipe::tableName() . '.name_en', $name]);
        $recipeQuery->andFilterWhere(['like', Recipe::tableName() . '.slug', $link]);
        $recipeQuery->andFilterWhere([Recipe::tableName() . '.status' => $status]);
        $recipeQuery->andFilterWhere([Recipe::tableName() . '.people_amount' => $p_count]);
        $recipeQuery->andFilterWhere([Recipe::tableName() . '.language' => $lang]);

//        if ($c_name) {
        $recipeQuery->leftJoin(Company::tableName(), Company::tableName() . '.id = ' . Recipe::tableName() . '.company_id');
        $recipeQuery->andWhere(['like', Company::tableName() . '.name_en', $c_name]);
//        }

        $recipeCountQuery = clone $recipeQuery;
        $recipes = $recipeQuery
            ->offset(($page - 1) * $limit)
            ->limit($limit)
            ->with([
                'company' => function ($query) {
                    /** @var ActiveQuery $query */
                    $query->select(['id', 'name_en']);
                },
                'image' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                }
            ])
            ->asArray()
            ->all();

        return [
            'data' => $recipes,
            'count' => $recipeCountQuery->count(),
        ];
    }

    public function actionView($id)
    {
//        $recipe = $this->findModel($id);
        return $this->findModel($id, true);
    }


    private function findModel($id, $greedLoad = false)
    {
        if ($greedLoad) {
            $model = Recipe::find()
                ->where([
                    'id' => $id,

                ])
                ->andWhere('status != ' . Constant::STATUS_DELETE)
                ->with(['activeIngredients' => function ($query) {
                    /** @var ActiveQuery $query */
                    $query->with(['unit', 'ingredient']);
                }])
                ->with([
                    'image' => function ($query) {
                        $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                        /** @var $query ActiveQuery */
                        $query->select([
                            'id',
                            'path' => $imageUrl
                        ]);
                    }
                ])
                ->asArray()
                ->one();
            $model['ingredients'] = $model['activeIngredients'];
            unset($model['activeIngredients']);
        } else {
            $model = Recipe::findOne([
                'id' => $id,
                'status != ' . Constant::STATUS_DELETE
            ]);
        }

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }

    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        if (!$model->load(Yii::$app->getRequest()->getBodyParams(), '')) {
            if ($model->hasErrors()) {
                throw new ServerErrorHttpException('Failed to update recipe: ' . $id);
            }
        }
        $transaction = Yii::$app->db->beginTransaction();

        try {
            RecipeHelper::updateRecipeIngredients($id);
            $model->save();
            $transaction->commit();
        } catch (Throwable $e) {
            $transaction->rollBack();
            throw new ServerErrorHttpException('Failed to update recipe`s ingredients: ' . $e->getMessage());
        }

        return Yii::$app->getResponse()->setStatusCode(200);
    }


    /**
     * Recipe can not be deleted if it is already published
     *
     * @param $id
     * @throws NotFoundHttpException
     * @throws ServerErrorHttpException
     */
    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        if ($model->status == Constant::STATUS_ACTIVE) {
            throw new ServerErrorHttpException('Failed to delete the recipe, because it is already published');
        }

        $model->status = Constant::STATUS_DELETE;
        $model->deleted_at = time();
        $model->deleted_by = Yii::$app->user->id;
        if ($model->save() === false) {
            throw new ServerErrorHttpException('Failed to delete the object for unknown reason.');
        }

        Yii::$app->getResponse()->setStatusCode(204);

    }

    public function actionCreate()
    {
        $model = new Recipe();
        $model->load(Yii::$app->getRequest()->getBodyParams(), '');

        if ($model->save()) {
            $response = Yii::$app->getResponse();
            $response->setStatusCode(201);
        } elseif (!$model->hasErrors()) {
            throw new ServerErrorHttpException('Failed to create the object for unknown reason.');
        }

        $ingredientsData = RecipeHelper::getIngredientsData();
        RecipeHelper::addIngredients($ingredientsData, $model->id);
        return $this->findModel($model->id, true);
    }

    public function actionPublish($id)
    {
        $model = $this->findModel($id);

        $model->publish();
        if (!$model->save()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }
        return $model;
    }

}
