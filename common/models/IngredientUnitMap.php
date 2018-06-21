<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;

/**
 * This is the model class for table "{{%ingredient_unit_map}}".
 *
 * @property int $id
 * @property int $unit_id
 * @property int $ingredient_id
 * @property double $part
 * @property string $createAt
 * @property int $createBy
 * @property string $updateAt
 * @property int $updateBy
 *
 * @property Ingredient $ingredient
 * @property Unit $unit
 */
class IngredientUnitMap extends ActiveRecord
{
    const SCENARIO_CREATE = 'create';
    const SCENARIO_UPDATE = 'update';

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%ingredient_unit_map}}';
    }

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
            [['unit_id', 'ingredient_id', 'createBy', 'updateBy'], 'integer'],
            [['unit_id', 'part', 'status'], 'required', 'on' => self::SCENARIO_CREATE],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['status'], 'default', 'value' => Constant::STATUS_ACTIVE],
            [['unit_id', 'part', 'status'], 'required', 'on' => self::SCENARIO_UPDATE],
            [['part'], 'number'],
            [['createAt', 'updateAt'], 'safe'],
//            [['ingredient_id'], 'exist', 'skipOnError' => true,
//                'targetClass' => Ingredient::className(),
//                'targetAttribute' => ['ingredient_id' => 'id'], 'on' => self::SCENARIO_UPDATE],
            [['unit_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Unit::className(),
                'targetAttribute' => ['unit_id' => 'id']
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'unit_id' => Yii::t('app', 'Unit ID'),
            'ingredient_id' => Yii::t('app', 'Ingredient ID'),
            'part' => Yii::t('app', 'Part'),
            'createAt' => Yii::t('app', 'Create At'),
            'createBy' => Yii::t('app', 'Create By'),
            'updateAt' => Yii::t('app', 'Update At'),
            'updateBy' => Yii::t('app', 'Update By'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIngredient()
    {
        return $this->hasOne(Ingredient::className(), ['id' => 'ingredient_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUnit()
    {
        return $this->hasOne(Unit::className(), ['id' => 'unit_id']);
    }

    /**
     * @param $ingredientId
     * @return int
     */
    public static function removeAllActivePartsByID($ingredientId)
    {
        return IngredientUnitMap::updateAll(
            ['updateAt' =>  new Expression('NOW()'), 'updateBy' => Yii::$app->user->id, 'status' => Constant::STATUS_DELETE],
            ['ingredient_id' => $ingredientId, 'status' => Constant::STATUS_ACTIVE]
        );
    }

}
