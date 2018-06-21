<?php

namespace backend\modules\v1\controllers;

use common\models\Constant;
use common\models\FilesUploaded;
use common\models\Ingredient;
use common\models\IngredientUnitMap;
use common\models\Recipe;
use common\models\RecipeIngredient;
use function foo\func;
use Yii;
use yii\base\DynamicModel;
use yii\db\ActiveQuery;
use yii\db\Expression;
use yii\db\Query;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class IngredientController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Ingredient::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['delete']);
        unset($actions['create']);
        unset($actions['update']);
        unset($actions['index']);
        unset($actions['view']);
        return $actions;
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'optional' => $this->publicActions,
        ];

        return $behaviors;
    }

    /**
     * @param int $page
     * @param int $limit
     * @param string $name
     * @param string $status
     * @param null $cat_id
     * @param null $coupon_id
     * @return array
     */
    public function actionIndex($page = 1, $limit = 10, $name = '', $status = '', $cat_id = null, $coupon_id = null)
    {
        $model = DynamicModel::validateData(compact('name', 'page', 'status', 'limit', 'cat_id', 'coupon_id'), [
            [['name'], 'string', 'max' => 128],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1],
            [['cat_id', 'coupon_id'], 'number'],

        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $subQuery = (new Query())
            ->select('count(*)')
            ->from(RecipeIngredient::tableName())
            ->leftJoin(Recipe::tableName(), Recipe::tableName() . '.id = ' . RecipeIngredient::tableName() . '.recipe_id')
            ->where(RecipeIngredient::tableName() . '.ingredient_id = ' . Ingredient::tableName() . '.id')
            ->andWhere(['IS', RecipeIngredient::tableName() . '.deleted_at', null])
            ->andWhere([Recipe::tableName() . '.status' => [Constant::STATUS_ACTIVE, Constant::STATUS_PENDING]]);

        $ingredientQuery = Ingredient::find()
            ->select([
                'id',
                'status',
                'name_en',
                'image',
                'category_id',
                'coupon_id',
                'activeRecipeCount' => $subQuery
            ]);

        $ingredientQuery->andFilterWhere(['like', 'name_en', $name]);
        $ingredientQuery->andFilterWhere(['status' => $status]);
        $ingredientQuery->andFilterWhere(['category_id' => $cat_id]);
        $ingredientQuery->andFilterWhere(['coupon_id' => $coupon_id]);
        $ingredientQuery->with([
            'category' => function ($query) {
                /** @var ActiveQuery $query */
                $query->select(['id', 'name_en']);
            },
            'imageFile' => function ($query) {
                $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                /** @var $query ActiveQuery */
                $query->select([
                    'id',
                    'path' => $imageUrl
                ]);
            },
            'coupon' => function ($query) {
                /** @var $query ActiveQuery */
                $query
                    ->select([
                        'id',
                        'title_en',
                        'file_id',
                        'start_date',
                        'finish_date',
                    ])
                    ->with([
                        'image' => function ($query) {
                            /** @var $query ActiveQuery */
                            $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                            $query->select([
                                'id',
                                'path' => $imageUrl,
                            ]);
                        }
                    ]);
            }
        ]);


        $ingredientCountQuery = clone $ingredientQuery;
        $ingredients = $ingredientQuery->offset(($page - 1) * $limit)
            ->limit($limit)
            ->asArray()
            ->all();

        return [
            'data' => $ingredients,
            'count' => $ingredientCountQuery->count(),
        ];
    }

    /**
     * @SWG\Get(
     *     path="/v1/ingredients",
     *     summary="Find all ingredient",
     *     tags={"ingredient"},
     *     @SWG\Response(
     *         response=200,
     *         description="ingredient object list",
     *     )
     * )
     *
     * @SWG\Put(
     *     path="/v1/ingredients/{id}",
     *     summary="Update ingredient",
     *     tags={"ingredient"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *     ),
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="ingredient data format",
     *         @SWG\Schema(ref="#/definitions/ingredient"),
     *     ),
     *     @SWG\Response(
     *         response=201,
     *         description="ok",
     *     )
     * )
     */
    /**
     * @param $id
     * @return array|Ingredient
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $requestData = Yii::$app->getRequest()->getBodyParams();
        $parts = $requestData['parts'] ?? [];

        $errors = $this->validateParts($parts, IngredientUnitMap::SCENARIO_UPDATE);
        $model->load($requestData, '');
        if (!$model->validate()) {
            $errors = array_merge($model->errors, $errors);
        }
        if ($errors) {
            Yii::$app->response->setStatusCode(400);
            return $errors;
        }
        $transaction = \Yii::$app->db->beginTransaction();
        if ($model->save()) {
            // remove old map
            IngredientUnitMap::removeAllActivePartsByID($model->id);

            // add new map
            if ($parts) {
                foreach ($parts as $part) {
                    $ingredientUnitMap = new IngredientUnitMap();
                    $ingredientUnitMap->load($part, '');
                    $ingredientUnitMap->setAttributes([
                        'ingredient_id' => $model->id,
                        'status' => Constant::STATUS_ACTIVE
                    ]);
                    if (!$ingredientUnitMap->save()) {
                        $transaction->rollBack();
                        Yii::$app->response->setStatusCode(400);
                        return $ingredientUnitMap->errors;

                    }
                }
            }
        }
        $transaction->commit();

        return $model;
    }

    /**
     * @param $id
     * @return array
     */
    public function actionView($id)
    {
        /** @var Ingredient $model */
        $model = $this->findModel($id);

        $parts = $model->getActiveUnitMap()
            ->select(['unit_id', 'ingredient_id', 'part', 'status'])
            ->asArray()->all();

        $ingredient = $model->toArray([
            'id',
            'name_en',
            'name_he',
            'name_es',
            'category_id',
            'coupon_id',
        ]);
        $ingredient['parts'] = $parts;
        $ingredient['image'] = null;
        /** @var FilesUploaded $imageUrl */
        if ($imageUrl = $model->getImageFile()->one()) {
            $ingredient['image'] = [
                'id' => $imageUrl->id,
                'path' => $imageUrl->getFullUrl(),
            ];
        }
        return $ingredient;
    }


    /**
     * @SWG\Post(
     *     path="/v1/ingredients",
     *     summary="Add new ingredient",
     *     tags={"ingredient"},
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="ingredient data format",
     *         @SWG\Schema(ref="#/definitions/ingredient"),
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     */
    public function actionCreate()
    {
        $model = new Ingredient();
        $requestData = Yii::$app->getRequest()->getBodyParams();
        $parts = $requestData['parts'] ?? [];

        $errors = $this->validateParts($parts, IngredientUnitMap::SCENARIO_CREATE);
        $model->load($requestData, '');
        if (!$model->validate()) {
            $errors = array_merge($model->errors, $errors);
        }
        if ($errors) {
            Yii::$app->response->setStatusCode(400);
            return $errors;
        }
        $transaction = \Yii::$app->db->beginTransaction();
        if ($model->save()) {
            if ($parts) {
                foreach ($parts as $part) {
                    $ingredientUnitMap = new IngredientUnitMap();
                    $ingredientUnitMap->load($part, '');
                    $ingredientUnitMap->setAttribute('ingredient_id', $model->id);
                    if (!$ingredientUnitMap->save()) {
                        $transaction->rollBack();
                        Yii::$app->response->setStatusCode(400);
                        return $ingredientUnitMap->errors;

                    }
                }
            }
        }
        $transaction->commit();

        return $model;
    }

    /**
     * @SWG\Definition(
     *     definition="ingredient",
     *      @SWG\Property(
     *          property="id",
     *          type="integer"
     *     ),
     *     @SWG\Property(
     *          property="name_en",
     *          type="string",
     *          example="name_en",
     *     ),
     *     @SWG\Property(
     *          property="name_he",
     *          type="string",
     *          example="name_he"
     *     ),
     *     @SWG\Property(
     *          property="name_es",
     *          type="string",
     *          example="name_es"
     *     ),
     *     @SWG\Property(
     *          property="created_at",
     *          type="date",
     *     ),
     *     @SWG\Property(
     *          property="position",
     *          type="integer",
     *          example=1,
     *     ),
     *     @SWG\Property(
     *          property="status",
     *          type="integer",
     *          example=1,
     *     ),
     *     @SWG\Property(
     *          property="category_id",
     *          type="integer",
     *          example=1,
     *     ),
     *     @SWG\Property(
     *          property="parts",
     *          type="array",
     *          items={@SWG\Schema(ref="#/definitions/part")},
     *     ),
     * )
     *
     * @SWG\Delete(
     *     path="/v1/ingredients/{id}",
     *     summary="Delete ingredient by id",
     *     tags={"ingredient"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         description="ingredient id",
     *     ),
     *     @SWG\Response(
     *         response=204,
     *         description="ok",
     *     )
     * )
     */
    /**
     * @param $id
     * @throws NotFoundHttpException
     * @throws ServerErrorHttpException
     */
    public function actionDelete($id)
    {
        /** @var Ingredient $model */
        $model = $this->findModel($id);

        $model->setAttributes([
            'status' => Constant::STATUS_DELETE,
        ]);

        if ($model->save() === false) {
            throw new ServerErrorHttpException('Failed to delete the object for unknown reason.');
        }

        Yii::$app->getResponse()->setStatusCode(204);
    }

    /**
     * @param $id
     * @return Ingredient
     * @throws NotFoundHttpException
     */
    private function findModel($id, $asArray = false)
    {
        $query = Ingredient::find()
            ->where([
                'id' => $id,
                'status' => Constant::STATUS_ACTIVE,
            ])
            ->with([
                'imageFile' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                }]);
        if ($asArray) {
            $query = $query->asArray();
        }
        $model = $query->One();

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }

    /**
     * @SWG\Definition(
     *     definition="part",
     *      @SWG\Property(
     *          property="unit_id",
     *          type="integer"
     *     ),
     *     @SWG\Property(
     *          property="ingredient_id",
     *          type="integer"
     *     ),
     *     @SWG\Property(
     *          property="part",
     *          type="integer"
     *     )
     * )
     */
    /**
     * @param array $parts
     * @param null $scenario
     * @return array
     */
    private function validateParts(array $parts, $scenario = null)
    {
        if (!$parts)
            return [];

        $model = new IngredientUnitMap();
        if ($scenario)
            $model->setScenario($scenario);

        foreach ($parts as $part) {
            $model->load($part, '');
            if (!$model->validate()) {
                return ['parts' => $model->errors];
            }
        }

//        $newKeys = array_map(function ($item) {
//            return $item['unit_id'] . ($item['ingredient_id'] ?? '') . $item['part'];
//        }, $parts);
//
//        if (count(array_unique($newKeys)) !== count($parts)) {
//            return ['parts' => ['Parts have duplicate values']];
//        }

        return [];
    }
}
