<?php

namespace backend\modules\v1\controllers;

use common\models\Constant;
use common\models\Profile;
use common\models\User;
use dektrium\user\controllers\AdminController;
use dektrium\user\traits\EventTrait;
use Yii;
use yii\base\DynamicModel;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;

/**
 * Class UserController
 * @package api\modules\v1\controllers
 */
class UserController extends ActiveController
{

    use EventTrait;

    /**
     * @var string
     */
    public $modelClass = User::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    /**
     * @return array
     */
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
     * @inheritdoc
     */
    public function actions()
    {
        $actions = parent::actions();

        unset($actions['update']);
        unset($actions['create']);
        unset($actions['index']);
        unset($actions['delete']);

        return $actions;
    }

    /**
     * @SWG\Get(
     *     path="/v1/users",
     *     summary="Find all users",
     *     tags={"user"},
     *     @SWG\Response(
     *         response=200,
     *         description="User object list",
     *     )
     * )
     */
    /**
     * @param int $page
     * @param int $limit
     * @param string $fullName
     * @param string $email
     * @param string $status
     * @return array
     */
    public function actionIndex($page = 1, $limit = 10, $fullName = '', $email = '', $status = '', $role = '')
    {
        $model = DynamicModel::validateData(compact('fullName', 'email', 'page', 'status', 'limit', 'role'), [
            [['fullName', 'email'], 'string', 'max' => 128],
            [['role'], 'in', 'range' => User::getAllRoles()],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1]

        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $userQuery = User::find();

        $userQuery->andFilterWhere(['like', 'email', $email]);
        $userQuery->andFilterWhere(['role' => $role]);
        if ($status == Constant::STATUS_ACTIVE) {
            $userQuery->andWhere([
                'AND',
                ['IS NOT', 'confirmed_at', NULL],
                ['IS', 'blocked_at', NULL],
            ]);
        }
        if ($status == Constant::STATUS_NOT_ACTIVE) {
            $userQuery->andWhere([
                'or',
                ['IS', 'confirmed_at', NULL],
                ['IS NOT', 'blocked_at', NULL],
            ]);
        }

        if ($fullName) {
            $userQuery->joinWith(['profile']);
            $userQuery->andWhere([
                'OR',
                ['like', Profile::tableName() . '.name', $fullName],
                ['like', Profile::tableName() . '.second_name', $fullName],
            ]);
        }
        $userCountQuery = clone $userQuery;
        $users = $userQuery->offset(($page - 1) * $limit)
            ->limit($limit)
            ->all();

        return [
            'data' => $users,
            'count' => $userCountQuery->count(),
        ];
    }

    /**
     * @param $id
     * @return array|bool
     */
    public function actionBlock($id)
    {
        if ($id == Yii::$app->user->id) {
            Yii::$app->response->statusCode = 400;
            return ['You can not block yourself'];
        }
        $user = $this->findModel($id);
        $event = $this->getUserEvent($user);
        $this->trigger(AdminController::EVENT_BEFORE_BLOCK, $event);
        $result = $user->block();
        $this->trigger(AdminController::EVENT_AFTER_BLOCK, $event);
        return $result;
    }

    /**
     * @SWG\Post(
     *     path="/v1/users",
     *     summary="Add new user",
     *     tags={"user"},
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="ingredient data format",
     *         @SWG\Schema(ref="#/definitions/user"),
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     */
    public function actionCreate()
    {
        $email = Yii::$app->request->post('email');
        $username = Yii::$app->request->post('username');
        $firstName = Yii::$app->request->post('first_name');
        $secondName = Yii::$app->request->post('second_name');
        $password = Yii::$app->request->post('password');
        $role = Yii::$app->request->post('role');

        $validatorData = [
            'first_name' => $firstName,
            'second_name' => $secondName,
            'role' => $role
        ];
        $model = DynamicModel::validateData($validatorData, [
            [['first_name', 'second_name'], 'string', 'max' => 128],
            [['first_name', 'second_name'], 'required'],
            [['role'], 'in', 'range' => User::getAllRoles()],
        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $user = Yii::createObject([
            'class' => User::className(),
            'scenario' => 'create',
            'email' => $email,
            'role' => $role,
            'username' => $username,
            'password' => $password,
        ]);
        /** @var $user User */
        if ($user->create()) {
            /** @var Profile $profile */
            $profile = $user->profile;
            $profile->setAttributes([
                'name' => $firstName,
                'second_name' => $secondName,
            ]);
            $profile->save(false);
            return $user;
        } else {
            Yii::$app->response->setStatusCode(400);
            return $user->errors;
        }
    }

    /**
     * @param $id
     * @return User
     * @throws NotFoundHttpException
     */
    private function findModel($id)
    {
        $model = User::findOne([
            'id' => $id,
        ]);

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }


    /**
     * @SWG\Definition(
     *     definition="user",
     *      @SWG\Property(
     *          property="email",
     *          type="sting"
     *     ),
     *     @SWG\Property(
     *          property="username",
     *          type="sting"
     *     ),
     *     @SWG\Property(
     *          property="first_name",
     *          type="sting"
     *     ),
     *     @SWG\Property(
     *          property="second_name",
     *          type="sting"
     *     ),
     *     @SWG\Property(
     *          property="password",
     *          type="sting"
     *     )
     * )
     */

    /**
     * @SWG\Get(
     *     path="/v1/users/{id}",
     *     summary="Get complaint count",
     *     tags={"user"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     */

}
