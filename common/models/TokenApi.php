<?php

namespace common\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "token_api".
 *
 * @property integer $id
 * @property string $date
 * @property integer $user_id
 * @property string $access_token
 */
class TokenApi extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'token_api';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id'], 'integer'],
            [['user_id'], 'required'],
            [['access_token'], 'string', 'max' => 255],
            ['access_token', 'default', 'value' => bin2hex(openssl_random_pseudo_bytes(16))],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'date' => Yii::t('app', 'Date'),
            'user_id' => Yii::t('app', 'User ID'),
            'access_token' => Yii::t('app', 'Access Token'),
        ];
    }

    public static function generate($userId)
    {
        $token = new TokenApi(['user_id' => $userId]);
        return $token->save() ? $token->access_token : null;
    }
}
