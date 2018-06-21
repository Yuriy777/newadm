<?php

namespace backend\controllers;

use Yii;
use yii\web\Controller;

/**
 * Swagger controller
 */
class SwaggerController extends Controller
{
    /**
     * @inheritdoc
     */
    public $layout = 'swagger';

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

    /**
     * JSON for swagger
     * @return string
     */
    public function actionGetJson()
    {
        $swagger = \Swagger\scan(Yii::$app->basePath . '/../backend/modules');
        header('Content-Type: application/json');
        echo $swagger;
    }

}
