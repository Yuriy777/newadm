<?php
namespace common\models;

use dektrium\user\models\User as BaseUser;

/**
 * Class User
 * @package common\models
 */
class User extends BaseUser
{

    const ROLE_ADMIN = 1;
    const ROLE_EDITOR = 2;

    /**
     * @return array
     */
    public static function getAllRoles()
    {
        return [
            self::ROLE_ADMIN,
            self::ROLE_EDITOR,
        ];
    }
    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        $tokenApi = TokenApi::findOne(['access_token' => $token]);
        if ($tokenApi) {
            return static::findOne($tokenApi->user_id);
        }
        return null;
    }

    public function fields()
    {
        return [
            'id',
            'email',
            'username',
            'role',
            'firstName' => function ($user) {
                /** @var $user User */
                return $user->profile->name ?? '';
            },
            'secondName' => function ($user) {
                /** @var $user User */
                return $user->profile->second_name ?? '';
            },
            'status' => function ($user) {
                /** @var $user User */
                return $user->isConfirmed && !$user->isBlocked ? Constant::STATUS_ACTIVE : Constant::STATUS_NOT_ACTIVE;
            },
        ];
    }

}
