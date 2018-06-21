<?php

namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\db\Expression;

/**
 * This is the model class for table "{{%ingredient}}".
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_he
 * @property string $name_es
 * @property int $image
 * @property int $status
 * @property int $category_id
 * @property string $createAt
 * @property int $createBy
 * @property string $updateAt
 * @property int $updateBy
 *
 * @property Category $category
 */
class Ingredient extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%ingredient}}';
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
            ['status', 'default', 'value' => 1],
            [['status', 'category_id', 'name_en'], 'required'],
            [['status', 'createBy', 'updateBy'], 'integer'],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['status', 'updateAt'], 'safe'],
            [['name_en', 'name_he', 'name_es'], 'string', 'max' => 255],
            [['image'], 'number'],
            [['category_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Category::className(),
                'targetAttribute' => ['category_id' => 'id']],
            [['coupon_id'], 'exist', 'skipOnError' => true,
                'targetClass' => Coupon::className(),
                'targetAttribute' => ['coupon_id' => 'id']],
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
            'image' => Yii::t('app', 'Image'),
            'status' => Yii::t('app', 'Status'),
            'category_id' => Yii::t('app', 'Category ID'),
            'createAt' => Yii::t('app', 'Create At'),
            'createBy' => Yii::t('app', 'Create By'),
            'updateAt' => Yii::t('app', 'Update At'),
            'updateBy' => Yii::t('app', 'Update By'),
        ];
    }

    /**
     * FilesUploaded $image
     * @return \yii\db\ActiveQuery
     */
    public function getImageFile()
    {
        //todo rename column image to file_id
        return $this->hasOne(FilesUploaded::className(), ['id' => 'image']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Category::className(), ['id' => 'category_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCoupon()
    {
        return $this->hasOne(Coupon::className(), ['id' => 'coupon_id']);
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveCoupon()
    {
        return $this
            ->getCoupon()
            ->andWhere([Coupon::tableName() . '.status' => Constant::STATUS_ACTIVE])
            ->andWhere(['<', Coupon::tableName() . '.start_date', new Expression('now()')])
            ->andWhere(['>', Coupon::tableName() . '.finish_date', new Expression('now()')]);
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUnitMap()
    {
        return $this->hasMany(IngredientUnitMap::className(), ['ingredient_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveUnitMap()
    {
        return $this->getUnitMap()->andFilterWhere([IngredientUnitMap::tableName() . '.status' => Constant::STATUS_ACTIVE]);
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

    /**
     * @param $unitId
     * @param $unitAmount
     * @param float $coefficient
     * @return float|int
     */
    public function getCountByUnitIdAndCoefficient($unitId, $unitAmount, $coefficient = 1.0)
    {
        $count = 1;

        /** @var IngredientUnitMap $unitMap */
        $unitMap = $this->getActiveUnitMap()
            ->andWhere([IngredientUnitMap::tableName() . '.unit_id' => $unitId])
            ->one();

        if ($unitMap && $unitMap->part > 1) {
            $unitAmount = round($unitAmount * $coefficient, 0, PHP_ROUND_HALF_UP);
            $count = round($unitAmount / $unitMap->part, 0, PHP_ROUND_HALF_UP);
        }

        return $count;
    }

}
