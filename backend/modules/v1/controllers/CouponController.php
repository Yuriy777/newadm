<?php

namespace backend\modules\v1\controllers;

use common\models\Constant;
use common\models\Coupon;
use common\models\Ingredient;
use Yii;
use yii\base\DynamicModel;
use yii\db\ActiveQuery;
use yii\db\Expression;
use yii\db\Query;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class CouponController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Coupon::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    /**
     * @return array
     */
    public function actions()
    {
        $actions = parent::actions();

        unset($actions['view']);
        unset($actions['index']);
        unset($actions['delete']);
        return $actions;
    }

    /**
     * @return array
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::class,
            'optional' => $this->publicActions,

        ];

        return $behaviors;
    }

    public function actionIndex($page = 1, $limit = 10, $name_en = '', $status = '', $description_en = '')
    {
        $model = DynamicModel::validateData(compact('status', 'name_en', 'page', 'description_en', 'limit'), [
            [['name_en', 'description_en'], 'string', 'max' => 128],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['page'], 'number', 'min' => 1],
        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $subQuery = (new Query())
            ->select('count(*)')
            ->from(Ingredient::tableName())
            ->where(Ingredient::tableName() . '.coupon_id = ' . Coupon::tableName() . '.id')
            ->andWhere([Ingredient::tableName() . '.status' => Constant::STATUS_ACTIVE]);

        $modelQuery = Coupon::find()
            ->select([
                Coupon::tableName() . '.id',
                Coupon::tableName() . '.title_en',
                Coupon::tableName() . '.description_en',
                Coupon::tableName() . '.start_date',
                Coupon::tableName() . '.finish_date',
                Coupon::tableName() . '.file_id',
                Coupon::tableName() . '.status',
                'activeIngredientCount' => $subQuery
            ])
            ->with([
                'image' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                },
            ]);
        $modelQuery->andFilterWhere(['like', 'title_en', $name_en]);
        $modelQuery->andFilterWhere(['like', 'description_en', $description_en]);
        $modelQuery->andFilterWhere(['status' => $status]);

        $modelCountQuery = clone $modelQuery;
        $models = $modelQuery
            ->offset(($page - 1) * $limit)
            ->limit($limit)
            ->asArray()->all();

        return [
            'data' => $models,
            'count' => $modelCountQuery->count(),
        ];
    }

    public function actionView($id)
    {
        return $this->findModel($id, true);
    }


    /**
     * @param $id
     * @return array
     * @throws ServerErrorHttpException
     */
    public function actionDelete($id)
    {
        $model = $this->findModel($id);
        if ($model->getActiveIngredients()->count()) {
            Yii::$app->response->setStatusCode(400);
            return ['You can\'t delete this Coupon'];
        }
        $model->setAttributes([
            'status' => Constant::STATUS_DELETE,
            'deleted_at' => time(),
            'deleted_by' => Yii::$app->user->id,
        ]);
        if ($model->save() === false) {
            throw new ServerErrorHttpException('Failed to delete the object for unknown reason.');
        }

        Yii::$app->getResponse()->setStatusCode(204);

    }

    private function findModel($id, $greedLoad = false)
    {
        if ($greedLoad) {
            $model = Coupon::find()
                ->select([
                    'id',
                    'file_id',
                    'status',
                    'title_en',
                    'description_en',
                    'start_date',
                    'finish_date',
                ])
                ->where([
                    'id' => $id,
                    'status' => Constant::STATUS_ACTIVE,
                ])
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
        } else {
            $model = Coupon::findOne([
                'id' => $id,
                'status' => Constant::STATUS_ACTIVE,
            ]);
        }

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }
}
