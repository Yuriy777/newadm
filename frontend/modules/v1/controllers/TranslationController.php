<?php

namespace frontend\modules\v1\controllers;

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
    public $publicActions = ['index'];

    public function actions()
    {
        $actions = parent::actions();

        unset($actions['create']);
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

    public function actionIndex()
    {
        $models = Translation::find()
            ->select([
                'en',
                'es',
                'he',
                'key',
            ])
            ->indexBy('key')
            ->asArray()->all();

        return [
            'data' => $models,
        ];
    }
}
