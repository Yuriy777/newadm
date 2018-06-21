<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;

/**
 * Swagger controller
 */
class SwaggerController extends Controller
{
    public function actions()
    {
        return [
            //The document preview addesss:http://api.yourhost.com/site/doc
            'doc' => [
                'class' => 'light\swagger\SwaggerAction',
                'restUrl' => \yii\helpers\Url::to(['/site/api'], true),
            ],
            //The resultUrl action.
            'api' => [
                'class' => 'light\swagger\SwaggerApiAction',
                //The scan directories, you should use real path there.
                'scanDir' => [
                    Yii::getAlias('@api/modules/v1/swagger'),
                    Yii::getAlias('@api/modules/v1/controllers'),
                    Yii::getAlias('@api/modules/v1/models'),
                    Yii::getAlias('@api/models'),
                ],
                //The security key
                'api_key' => 'balbalbal',
            ],
        ];
    }

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
        $swagger = \Swagger\scan(Yii::$app->basePath . '/../api/modules');
        header('Content-Type: application/json');
        echo $swagger;
    }

}
