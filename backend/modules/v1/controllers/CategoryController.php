<?php

namespace backend\modules\v1\controllers;

use common\models\Category;
use common\models\Constant;
use common\models\Ingredient;
use Yii;
use yii\base\DynamicModel;
use yii\db\Query;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class CategoryController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Category::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['delete']);
        unset($actions['view']);
        unset($actions['index']);
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
     * @SWG\Get(
     *     path="/v1/categories",
     *     summary="Find all category",
     *     tags={"category"},
     *     @SWG\Response(
     *         response=200,
     *         description="Category object list",
     *     )
     * )
     */
    /**
     * @param int $page
     * @param int $limit
     * @param string $name
     * @param string $status
     * @param string $sort
     * @param int $order
     * @return array
     */
    public function actionIndex($page = 1, $limit = 10, $name = '', $status = '', $sort = 'id', $order = 0)
    {
        $model = DynamicModel::validateData(compact('name', 'page', 'status', 'limit', 'sort'), [
            [['name'], 'string', 'max' => 128],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['sort'], 'in', 'range' => Category::$sortableFields],
            [['sort'], 'in', 'range' => [0, 1]],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1]

        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $subQuery = (new Query())
            ->select('count(*)')
            ->from(Ingredient::tableName())
            ->where(Category::tableName() . '.id = ' . Ingredient::tableName() . '.category_id')
            ->andWhere([Ingredient::tableName() . '.status' => Constant::STATUS_ACTIVE]);

        $categoryQuery = Category::find()
            ->select([
                'id',
                'name_en',
                'status',
                'position',
                'activeIngredientCount' => $subQuery,
            ]);

        $categoryQuery->andFilterWhere(['like', 'name_en', $name]);
        $categoryQuery->andFilterWhere(['status' => $status]);


        $categoryCountQuery = clone $categoryQuery;
        $categories = $categoryQuery->offset(($page - 1) * $limit)
            ->orderBy([$sort => $order ? SORT_DESC: SORT_ASC])
            ->limit($limit)
            ->asArray()
            ->all();

        return [
            'data' => $categories,
            'count' => $categoryCountQuery->count(),
        ];
    }

    /**
     * @SWG\Put(
     *     path="/v1/categories/{id}",
     *     summary="Update category",
     *     tags={"category"},
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
     *         description="category data format",
     *         @SWG\Schema(ref="#/definitions/category"),
     *     ),
     *     @SWG\Response(
     *         response=201,
     *         description="ok",
     *     )
     * )
     */
    /**
     * @param $id
     * @return Category
     */
    public function actionView($id)
    {
        return $this->findModel($id);
    }


    /**
     * @SWG\Post(
     *     path="/v1/categories",
     *     summary="Add new category",
     *     tags={"category"},
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="category data format",
     *         @SWG\Schema(ref="#/definitions/category"),
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     * @SWG\Definition(
     *     definition="category",
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
     * )
     *
     * @SWG\Delete(
     *     path="/v1/categories/{id}",
     *     summary="Delete category by id",
     *     tags={"category"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         description="category id",
     *     ),
     *     @SWG\Response(
     *         response=204,
     *         description="ok",
     *     )
     * )
     */
    /**
     * @param $id
     * @return array
     * @throws ServerErrorHttpException
     */
    public function actionDelete($id)
    {
        /** @var Category $model */
        $model = $this->findModel($id);

        if ($model->getActiveIngredients()->count()) {
            Yii::$app->response->setStatusCode(400);
            return ['You can\'t delete this Category, the category has ingredients'];
        }
        $model->setAttributes([
            'status' => Constant::STATUS_DELETE,
        ]);

        if ($model->save() === false) {
            throw new ServerErrorHttpException('Failed to delete the object for unknown reason.');
        }

        Yii::$app->getResponse()->setStatusCode(204);
    }

    public function actionMaxActivePosition()
    {
        return Category::find()->andWhere(['status' => Constant::STATUS_ACTIVE])->max('position');
    }

    /**
     * @param $id
     * @return Category
     * @throws NotFoundHttpException
     */
    private function findModel($id)
    {
        $model = Category::findOne([
            'id' => $id,
            'status' => Constant::STATUS_ACTIVE,
        ]);

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }
}
