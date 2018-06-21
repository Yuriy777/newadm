<?php

namespace backend\modules\v1\controllers;

use common\models\Constant;
use common\models\Ingredient;
use common\models\Unit;
use Yii;
use yii\base\DynamicModel;
use yii\db\Query;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class UnitController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Unit::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['delete']);
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
     * @SWG\Get(
     *     path="/v1/units",
     *     summary="Find all unit",
     *     tags={"unit"},
     *     @SWG\Response(
     *         response=200,
     *         description="Unit object list",
     *     )
     * )
     */
    /**
     * @param int $page
     * @param int $limit
     * @param string $name
     * @param string $status
     * @return array
     */
    public function actionIndex($page = 1, $limit = 10, $name = '', $status = '')
    {
        $model = DynamicModel::validateData(compact('name', 'page', 'status', 'limit'), [
            [['name'], 'string', 'max' => 128],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1]

        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }


        $subQuery = (new Query())
            ->select('count(*)')
            ->from('ingredient_unit_map')
            ->leftJoin(Ingredient::tableName(), 'ingredient_unit_map.ingredient_id = ' . Ingredient::tableName() . '.id')
            ->where(Unit::tableName() . '.id = ingredient_unit_map.unit_id')
            ->andWhere([
                'ingredient_unit_map.status' => Constant::STATUS_ACTIVE,
                Ingredient::tableName() . '.status' => Constant::STATUS_ACTIVE
            ]);

        $userQuery = Unit::find()
            ->select([
                'id',
                'name_en',
                'status',
                'activeIngredientCount' => $subQuery,
            ]);

        $userQuery->andFilterWhere(['like', Unit::tableName() . '.name_en', $name]);
        $userQuery->andFilterWhere([Unit::tableName() . '.status' => $status]);


        $userCountQuery = clone $userQuery;
        $users = $userQuery->offset(($page - 1) * $limit)
            ->limit($limit)
            ->asArray()
            ->all();

        return [
            'data' => $users,
            'count' => $userCountQuery->count(),
        ];
    }

    /**
     * @SWG\Put(
     *     path="/v1/units/{id}",
     *     summary="Update unit",
     *     tags={"unit"},
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
     *         description="unit data format",
     *         @SWG\Schema(ref="#/definitions/unit"),
     *     ),
     *     @SWG\Response(
     *         response=201,
     *         description="ok",
     *     )
     * )
     */
    /**
     * @param $id
     * @return Unit
     */
    public function actionView($id)
    {
        return $this->findModel($id);
    }

    public function actionMaxActivePosition()
    {
        return Unit::find()->andWhere(['status' => Constant::STATUS_ACTIVE])->max('position');
    }

    /**
     * @SWG\Post(
     *     path="/v1/units",
     *     summary="Add new unit",
     *     tags={"unit"},
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="unit data format",
     *         @SWG\Schema(ref="#/definitions/unit"),
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     * @SWG\Definition(
     *     definition="unit",
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
     *     path="/v1/units/{id}",
     *     summary="Delete unit by id",
     *     tags={"unit"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         description="unit id",
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
        /** @var Unit $model */
        $model = $this->findModel($id);

        if ($model->getActiveIngredients()->count()) {
            Yii::$app->response->setStatusCode(400);
            return ['You can\'t delete this Unit'];
        }
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
     * @return Unit
     * @throws NotFoundHttpException
     */
    private function findModel($id)
    {
        $model = Unit::findOne([
            'id' => $id,
            'status' => Constant::STATUS_ACTIVE,
        ]);

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }
}
