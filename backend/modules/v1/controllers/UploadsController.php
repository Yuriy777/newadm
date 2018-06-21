<?php

namespace backend\modules\v1\controllers;

use common\models\FilesUploaded;
use Project\Command\YourCustomCommand;
use Yii;
use yii\filters\auth\HttpBearerAuth;
use yii\web\Controller;
use yii\web\MethodNotAllowedHttpException;
use yii\web\ServerErrorHttpException;
use yii\web\UploadedFile;

class UploadsController extends Controller
{

    public $enableCsrfValidation = false;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'optional' => $this->publicActions,

        ];

        return $behaviors;
    }


    public function actionImage()
    {
        $model = new FilesUploaded(['scenario' => FilesUploaded::SCENARIO_IMAGE]);
        $file = UploadedFile::getInstance($model, 'file');

        if (!Yii::$app->request->isPost) {
            throw new MethodNotAllowedHttpException();
        }

        if (!$file) {
            throw new ServerErrorHttpException('No image in proper form name');
        }

        return $this->asJson($model->saveFile($file));

    }
}