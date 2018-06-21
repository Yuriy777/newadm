<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;

/**
 * This is the model class for table "{{%category}}".
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_he
 * @property string $name_es
 * @property int $position
 * @property int $status
 * @property string $image
 * @property string $createAt
 * @property int $createBy
 * @property string $updateAt
 * @property int $updateBy
 * @property Ingredient[] $ingredients
 * @property Ingredient[] $activeIngredients
 *
 */
class Category extends ActiveRecord
{
    public static $sortableFields = [
        'id',
        'name_en',
        'position',
        'status',
    ];

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%category}}';
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
            [['position', 'status'], 'required'],
            [['position', 'status', 'createBy', 'updateBy'], 'integer'],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['status', 'updateAt'], 'safe'],
            [['name_en'], 'required'],
            [['name_en', 'name_he', 'name_es', 'image'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name_en' => Yii::t('app', 'Name En'),
            'name_he' => Yii::t('app', 'Name He'),
            'name_es' => Yii::t('app', 'Name Es'),
            'position' => Yii::t('app', 'Position'),
            'status' => Yii::t('app', 'Status'),
            'image' => Yii::t('app', 'Image'),
            'createAt' => Yii::t('app', 'Create At'),
            'createBy' => Yii::t('app', 'Create By'),
            'updateAt' => Yii::t('app', 'Update At'),
            'updateBy' => Yii::t('app', 'Update By'),
        ];
    }

    public function afterSave($insert, $changedAttributes)
    {
        if ($this->status == Constant::STATUS_ACTIVE) {
            $model = self::findOne([
                'position' => $this->position,
                'status' => Constant::STATUS_ACTIVE,
            ]);
            if ($model) {
                $condition = ['and',
                    ['=', 'status', Constant::STATUS_ACTIVE],
                    ['<>', 'id', $this->id],
                    ['>=', 'position', $this->position],
                ];
                self::updateAllCounters(['position' => 1], $condition);
            }
        }
        return parent::afterSave($insert, $changedAttributes);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIngredients()
    {
        return $this->hasMany(Ingredient::className(), ['category_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveIngredients()
    {
        return $this->getIngredients()->andWhere([Ingredient::tableName() . '.status' => Constant::STATUS_ACTIVE]);
    }

    /**
     * @param null $lang
     * @return string
     */
    public function getNameByLang($lang = null)
    {
        $name = $this->name_en;

        if ($lang && in_array($lang, Constant::getAllLang()) && !empty($this->{'name_' . $lang})) {
            $name = $this->{'name_' . $lang};
        }
        return $name;
    }

}
