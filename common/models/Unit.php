<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveQuery;
use yii\db\ActiveRecord;
use yii\db\Expression;

/**
 * This is the model class for table "{{%unit}}".
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_he
 * @property string $name_es
 * @property int $position
 * @property int $status
 * @property string $createAt
 * @property int $createBy
 * @property string $updateAt
 * @property int $updateBy
 *
 * @property Ingredient[] $ingredients
 * @property Ingredient[] $activeIngredients
 */
class Unit extends ActiveRecord
{

    /**
     * @return array
     */
    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::className(),
                'createdAtAttribute' => 'createAt',
                'updatedAtAttribute' => 'updateAt',
                'value' => new Expression('NOW()'),
            ],
        ];
    }

    /**
     * @param bool $insert
     * @return bool
     */
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
    public static function tableName()
    {
        return '{{%unit}}';
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
            [['name_en', 'name_he', 'name_es'], 'string', 'max' => 255],
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


    public function fields()
    {
        $fields = parent::fields();
        unset($fields['createAt'], $fields['updateAt']);

        return $fields;
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUnitMap()
    {
        return $this->hasMany(IngredientUnitMap::className(), ['unit_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveUnitMap()
    {
        return $this->getUnitMap()->andFilterWhere([IngredientUnitMap::tableName() . '.status' => Constant::STATUS_ACTIVE]);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIngredients()
    {
        return $this->hasMany(Ingredient::className(), ['id' => 'ingredient_id'])
            ->viaTable(IngredientUnitMap::tableName(), ['unit_id' => 'id'], function ($query) {
                /** @var ActiveQuery $query */
                $query->andWhere([IngredientUnitMap::tableName() . '.status' => Constant::STATUS_ACTIVE]);
            });
    }

    /**
     * @return yii\db\ActiveQuery
     */
    public function getActiveIngredients()
    {
        return $this->getIngredients()
            ->andWhere([Ingredient::tableName() . '.status' => Constant::STATUS_ACTIVE]);
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
