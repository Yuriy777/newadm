<?php
namespace backend\modules\v1\controllers;

use common\models\Profile;
use common\models\TokenApi;
use dektrium\user\helpers\Password;
use dektrium\user\models\User;
use Yii;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;

class AuthController extends ActiveController
{

    public $modelClass = 'common\models\Profile';

    public $publicActions = ['login'];


    public function actions()
    {
        $actions = parent::actions();
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
     * @SWG\Post(
     *     path="/v1/auth/login",
     *     summary="Login user",
     *     tags={"auth"},
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="login data format",
     *         @SWG\Schema(ref="#/definitions/loginData"),
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="return access token",
     *     )
     * )
     *
     * @SWG\Definition(
     *     definition="loginData",
     *     @SWG\Property(
     *          property="email",
     *          type="string"
     *     ),
     *     @SWG\Property(
     *          property="password",
     *          type="string"
     *     )
     * )
     *
     */
    public function actionLogin()
    {
        $pass = Yii::$app->request->post('password');
        $email = Yii::$app->request->post('email');
        $user = User::find()
            ->where(['email' => trim($email)])
            ->orWhere(['username' => trim($email)])
            ->one();
        if ($user && Password::validate($pass, $user->password_hash)) {
            return [
                'profile' => Profile::findOne(['user_id' => $user->id]),
                'access-token' =>  TokenApi::generate($user->id),
            ];
        } else {
            Yii::$app->getResponse()->setStatusCode(401);
            return ['errors' => ['login' => ['Invalid login or password']]];
        }
    }

    /**
     * @SWG\Post(
     *     path="/v1/auth/logout",
     *     summary="Logout current user",
     *     tags={"auth"},
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     */
    public function actionLogout()
    {
        $authHeader = Yii::$app->request->getHeaders()->get('Authorization');
        preg_match('/^Bearer\s+(.*?)$/', $authHeader, $matches);
        return [
            TokenApi::deleteAll([
                'access_token' => $matches[1],
                'user_id' => Yii::$app->user->id,
            ])
        ];
    }

}
