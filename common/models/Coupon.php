<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;

/**
 * This is the model class for table "{{%coupon}}".
 *
 * @property int $id
 * @property string $title_en
 * @property string $title_he
 * @property string $title_es
 * @property string $description_en
 * @property string $description_he
 * @property string $description_es
 * @property int $file_id
 * @property string $start_date
 * @property string $finish_date
 * @property string $createAt
 * @property int $status
 * @property int $createBy
 * @property string $updateAt
 * @property int $updateBy
 *
 * @property Ingredient $ingredient
 */
class Coupon extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%coupon}}';
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'updatedAtAttribute' => 'updateAt',
                'createdAtAttribute' => 'createAt',
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {

            if ($this->isNewRecord) {
                $this->setAttributes([
                    'createBy' => Yii::$app->user->id,
                ]);
            } else {
                $this->setAttributes([
                    'updateBy' => Yii::$app->user->id,
                ]);
            }


            return true;
        }
        return false;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title_en', 'description_en'], 'required'],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['file_id', 'createBy', 'updateBy'], 'integer'],
            [['start_date', 'finish_date', 'createAt', 'updateAt'], 'safe'],
            [['title_en', 'title_he', 'title_es', 'description_en', 'description_he', 'description_es'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'title_en' => Yii::t('app', 'Title En'),
            'title_he' => Yii::t('app', 'Title He'),
            'title_es' => Yii::t('app', 'Title Es'),
            'description_en' => Yii::t('app', 'Description En'),
            'description_he' => Yii::t('app', 'Description He'),
            'description_es' => Yii::t('app', 'Description Es'),
            'file_id' => Yii::t('app', 'File ID'),
            'start_date' => Yii::t('app', 'Start Date'),
            'finish_date' => Yii::t('app', 'Finish Date'),
            'createAt' => Yii::t('app', 'Create At'),
            'createBy' => Yii::t('app', 'Create By'),
            'updateAt' => Yii::t('app', 'Update At'),
            'updateBy' => Yii::t('app', 'Update By'),
        ];
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getImage()
    {
        return $this->hasOne(FilesUploaded::className(), ['id' => 'file_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIngredients()
    {
        return $this->hasMany(Ingredient::className(), ['coupon_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveIngredients()
    {
       return $this
           ->getIngredients()
           ->andWhere([Ingredient::tableName() . '.status' => Constant::STATUS_ACTIVE]);
    }


}
