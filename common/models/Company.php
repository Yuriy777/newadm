<?php

namespace common\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "company".
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_he
 * @property string $name_es
 * @property string $company_site_url
 * @property int $logo
 * @property int $image_company
 * @property int $image_product_list
 * @property string $color_1
 * @property string $color_2
 * @property string $color_3
 * @property string $color_4
 * @property string $color_5
 * @property string $alias
 * @property int $status
 * @property int $created_at
 * @property int $created_by
 * @property int $updated_at
 * @property int $updated_by
 * @property int $deleted_at
 * @property int $deleted_by
 *
 * @property Recipe[] $recipes
 */
class Company extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'company';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['status', 'default', 'value' => Constant::STATUS_ACTIVE],
            [['name_en', 'status', 'alias'], 'required'],
            [
                ['color_1', 'color_2', 'color_3', 'color_4', 'color_5'],
                'match', 'pattern' => '/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/'
            ],
            ['company_site_url', 'url'],
            ['alias', 'unique'],
            ['alias', 'match', 'pattern' => ' /^[a-z0-9-]+$/'],
            [['status', 'created_at', 'created_by', 'updated_at', 'updated_by', 'deleted_at', 'deleted_by'], 'integer'],
            [
                ['name_en', 'name_he', 'name_es',
                    'color_1', 'color_2', 'color_3', 'color_4', 'color_5'],
                'string', 'max' => 255
            ],
            [
                ['logo', 'image_company', 'image_product_list'],
                'integer'
            ],
            [
                ['logo', 'image_company', 'image_product_list'],
                'required'
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
            'name_en' => Yii::t('app', 'Name En'),
            'name_he' => Yii::t('app', 'Name He'),
            'name_es' => Yii::t('app', 'Name Es'),
            'company_site_url' => Yii::t('app', 'Company Site Url'),
            'logo' => Yii::t('app', 'Logo'),
            'image_company' => Yii::t('app', 'Image Company'),
            'image_product_list' => Yii::t('app', 'Image Product List'),
            'color_1' => Yii::t('app', 'Color 1'),
            'color_2' => Yii::t('app', 'Color 2'),
            'color_3' => Yii::t('app', 'Color 3'),
            'color_4' => Yii::t('app', 'Color 4'),
            'color_5' => Yii::t('app', 'Color 5'),
            'status' => Yii::t('app', 'Status'),
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
    public function getImageCompany()
    {
        return $this->hasOne(FilesUploaded::className(), ['id' => 'image_company']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getImageProductList()
    {
        return $this->hasOne(FilesUploaded::className(), ['id' => 'image_product_list']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getLogo()
    {
        return $this->hasOne(FilesUploaded::className(), ['id' => 'logo']);
    }


    /**
     * @return \yii\db\ActiveQuery
     */
    public function getRecipes()
    {
        return $this->hasMany(Recipe::className(), ['company_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveRecipes()
    {
        return $this->getRecipes()
            ->andFilterWhere([Recipe::tableName() . '.status' => Constant::STATUS_ACTIVE]);
    }

    public function behaviors()
    {
        return [
            [
                'class' => TimestampBehavior::class,
                'value' => time(),
            ],
            BlameableBehavior::class,
        ];
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

    public function getFullPathLogo()
    {
        $path = '';
        /** @var FilesUploaded $imageFile */
        $imageFile = $this->getLogo()->one();

        if ($imageFile)
            $path = $imageFile->getFullUrl();

        return $path;
    }

    public function getFullPathCompanyImg()
    {
        $path = '';
        /** @var FilesUploaded $imageFile */
        $imageFile = $this->getImageCompany()->one();

        if ($imageFile)
            $path = $imageFile->getFullUrl();

        return $path;
    }



}
