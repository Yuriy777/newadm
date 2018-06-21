<?php

namespace backend\modules\v1\controllers;

use common\models\Constant;
use common\models\Translation;
use Yii;
use yii\base\DynamicModel;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class TranslationController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Translation::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();

        unset($actions['view']);
        unset($actions['update']);
        unset($actions['index']);
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

    public function actionView($key)
    {
        return $this->findModel($key);
    }


    public function actionUpdate($key)
    {
        /* @var $model ActiveRecord */
        $model = $this->findModel($key);

        $model->load(Yii::$app->getRequest()->getBodyParams(), '');
        if ($model->save() === false && !$model->hasErrors()) {
            throw new ServerErrorHttpException('Failed to update the object for unknown reason.');
        }

        return $model;
    }

    public function findModel($key)
    {
        $model = Translation::findOne([
            'key' => $key,
            'status' => Constant::STATUS_ACTIVE,
        ]);

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $key");
        }

        return $model;
    }

    /**
     * @param $key
     * @throws NotFoundHttpException
     * @throws ServerErrorHttpException
     */
    public function actionDelete($key)
    {
        $model = $this->findModel($key);

        $model->setAttributes([
            'status' => Constant::STATUS_DELETE,
            'updated_at' => time(),
            'deleted_at' => time(),
            'deleted_by' => Yii::$app->user->id,
        ]);

        if ($model->save() === false) {
            throw new ServerErrorHttpException('Failed to delete the object for unknown reason.');
        }

        Yii::$app->getResponse()->setStatusCode(204);
    }


    public function actionIndex($page = 1, $limit = 10, $name_en = '', $name_es = '', $name_he = '', $key = '')
    {
        $model = DynamicModel::validateData(compact('name_en', 'page', 'name_es', 'limit', 'name_he', 'key'), [
            [['name_en', 'name_es', 'name_he', 'key'], 'string', 'max' => 128],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1],
        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }
        $modelQuery = Translation::find()
            ->select([
                'en',
                'es',
                'he',
                'key',
            ]);
        $modelQuery->andFilterWhere(['like', 'en', $name_en]);
        $modelQuery->andFilterWhere(['like', 'es', $name_es]);
        $modelQuery->andFilterWhere(['like', 'he', $name_he]);
        $modelQuery->andFilterWhere(['like', 'key', $key]);

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
}
