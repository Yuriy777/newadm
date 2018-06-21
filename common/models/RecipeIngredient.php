<?php

namespace common\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "recipe_ingredient".
 *
 * @property int $id
 * @property int $recipe_id
 * @property int $ingredient_id
 * @property int $unit_id
 * @property int $unit_amount
 * @property int $created_at
 * @property int $created_by
 * @property int $updated_at
 * @property int $updated_by
 * @property int $deleted_at
 * @property int $deleted_by
 *
 * @property Ingredient $ingredient
 * @property Recipe $recipe
 * @property Unit $unit
 */
class RecipeIngredient extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'recipe_ingredient';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['recipe_id', 'ingredient_id', 'unit_id', 'unit_amount'], 'required'],
            [['recipe_id', 'ingredient_id', 'unit_id', 'created_at', 'created_by', 'updated_at',
                'updated_by', 'deleted_at', 'deleted_by'], 'integer'],
            [['unit_amount'], 'number', 'numberPattern' => '/^\s*[-+]?[0-9]*[.,]?[0-9]+([eE][-+]?[0-9]+)?\s*$/'],
            [['ingredient_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Ingredient::className(),
                'targetAttribute' => ['ingredient_id' => 'id']],
            [['recipe_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Recipe::className(),
                'targetAttribute' => ['recipe_id' => 'id']],
            [['unit_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Unit::className(),
                'targetAttribute' => ['unit_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'recipe_id' => Yii::t('app', 'Recipe ID'),
            'ingredient_id' => Yii::t('app', 'Ingredient ID'),
            'unit_id' => Yii::t('app', 'Unit ID'),
            'unit_amount' => Yii::t('app', 'Unit Amount'),
            'created_at' => Yii::t('app', 'Created At'),
            'created_by' => Yii::t('app', 'Created By'),
            'updated_at' => Yii::t('app', 'Updated At'),
            'updated_by' => Yii::t('app', 'Updated By'),
            'deleted_at' => Yii::t('app', 'Deleted At'),
            'deleted_by' => Yii::t('app', 'Deleted By'),
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
    public function getRecipe()
    {
        return $this->hasOne(Recipe::className(), ['id' => 'recipe_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUnit()
    {
        return $this->hasOne(Unit::className(), ['id' => 'unit_id']);
    }

    public function behaviors()
    {
        return [
            TimestampBehavior::class,
            BlameableBehavior::class,
        ];
    }
}
