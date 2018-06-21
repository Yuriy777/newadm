<?php

namespace common\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveQuery;
use yii\db\ActiveRecord;
use yii\helpers\ArrayHelper;

/**
 * This is the model class for table "recipe".
 *
 * @property int $id
 * @property int $company_id
 * @property string $name_en
 * @property string $name_he
 * @property string $name_es
 * @property int $people_amount
 * @property int $image
 * @property string $slug
 * @property string $language
 * @property int $status
 * @property int $created_at
 * @property int $created_by
 * @property int $updated_at
 * @property int $updated_by
 * @property int $deleted_at
 * @property int $deleted_by
 * @property Company $company
 */
class Recipe extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'recipe';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['status', 'default', 'value' => Constant::STATUS_NOT_ACTIVE],
            ['people_amount', 'compare', 'compareValue' => 1, 'operator' => '>='],
            [['company_id', 'name_en', 'people_amount', 'slug', 'language', 'status'], 'required'],
            [['company_id', 'people_amount', 'status',], 'integer'],
            ['language', 'in', 'range' => ['en', 'he', 'es']],
            [['name_en', 'name_he', 'name_es', 'slug'], 'string', 'max' => 255],
            [['image'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'company_id' => Yii::t('app', 'Company ID'),
            'name_en' => Yii::t('app', 'Name En'),
            'name_he' => Yii::t('app', 'Name He'),
            'name_es' => Yii::t('app', 'Name Es'),
            'people_amount' => Yii::t('app', 'People Amount'),
            'image' => Yii::t('app', 'Image'),
            'slug' => Yii::t('app', 'Slug'),
            'language' => Yii::t('app', 'Language'),
            'status' => Yii::t('app', 'Status'),
            'created_at' => Yii::t('app', 'Created At'),
            'created_by' => Yii::t('app', 'Created By'),
            'updated_at' => Yii::t('app', 'Updated At'),
            'updated_by' => Yii::t('app', 'Updated By'),
            'deleted_at' => Yii::t('app', 'Deleted At'),
            'deleted_by' => Yii::t('app', 'Deleted By'),
        ];
    }

    public function behaviors()
    {
        return [
            TimestampBehavior::class,
            BlameableBehavior::class,
        ];
    }


    /**
     * FilesUploaded $image
     * @return \yii\db\ActiveQuery
     */
    public function getImage()
    {
        return $this->hasOne(FilesUploaded::className(), ['id' => 'image']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIngredients()
    {
        return $this->hasMany(RecipeIngredient::class, ['recipe_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCompany()
    {
        return $this->hasOne(Company::class, ['id' => 'company_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActiveIngredients()
    {
        return $this->getIngredients()->andWhere(['IS', 'deleted_at', null]);
    }

    public function publish()
    {
        $this->setAttribute('status', Constant::STATUS_ACTIVE);
    }

    /**
     * @param int $coefficient
     * @return array
     */
    public function getActiveIngredientsGroupByCategory($coefficient = 1)
    {
        $activeIngredients = $this->getActiveIngredients()
            ->with([
                'unit',
                'ingredient' => function ($query) {
                    /** @var $query ActiveQuery */
                    $query->with('category');
                }
            ])
            ->all();
        $data = [];
        $lang = $this->language;
        foreach ($activeIngredients as $activeIngredient) {
            /** @var RecipeIngredient $activeIngredient */
            $_data = [
                'unitAmount' => $activeIngredient->unit_amount,
                'unit' => ArrayHelper::toArray($activeIngredient->unit, [
                    Unit::className() => [
                        'id',
                        'name' => function ($unit) use ($lang) {
                            /** @var  Unit $unit */
                            return $unit->getNameByLang($lang);

                        },
                    ]
                ]),
                'ingredient' => ArrayHelper::toArray($activeIngredient->ingredient, [
                    Ingredient::className() => [
                        'id',
                        'name' => function ($ingredient) use ($lang) {
                            /** @var  Ingredient $ingredient */
                            return $ingredient->getNameByLang($lang);
                        },
                        'image' => function ($ingredient) use ($lang) {
                            /** @var  Ingredient $ingredient */
                            /** @var  FilesUploaded $imageFile */
                            $imageFile = $ingredient->getImageFile()->one();
                            return $imageFile ? $imageFile->getFullUrl() : '';
                        },
                        'activeCoupon' => function ($ingredient) {
                            $_data = [];

                            /** @var  Ingredient $ingredient */
                            /** @var  Coupon $coupon */
                            $coupon = $ingredient->getActiveCoupon()->one();
                            if ($coupon) {
                                /** @var FilesUploaded $file */
                                $file = $coupon->getImage()->one();
                                $_data = [
                                    'id' => $coupon->id,
                                    'title' => $coupon->title_en,
                                    'description' => $coupon->description_en,
                                    'image' => $file->getFullUrl() ?? '',
                                ];
                            }
                            return $_data;
                        },
                        'count' => function ($ingredient) use ($activeIngredient, $coefficient) {
                            /** @var  Ingredient $ingredient */
                            /** @var  RecipeIngredient $activeIngredient */
                            return $ingredient->getCountByUnitIdAndCoefficient(
                                $activeIngredient->unit_id,
                                $activeIngredient->unit_amount,
                                $coefficient
                            );
                        }
                    ]
                ]),
            ];
            $catID = $activeIngredient->ingredient->category->id;
            $data[$catID]['category'] = ArrayHelper::toArray($activeIngredient->ingredient->category, [
                Category::className() => [
                    'id',
                    'position',
                    'name' => function ($category) use ($lang) {
                        /** @var  Category $category */
                        return $category->getNameByLang($lang);
                    },
                ]
            ]);
            $data[$catID]['ingredients'][] = $_data;
            $data[$catID]['position'] = $data[$catID]['category']['position'];
        }

        ArrayHelper::multisort($data, 'position');
        return $data;
    }


    /**
     * @return string
     */
    public function getRecipeFullUrl()
    {
        $recipeUrl = '';
        if (isset(Yii::$app->params['frontEndPath']) && $this->company) {
            $recipeUrl = $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . '/recipes/' .
                $this->company->alias . '/' . $this->id;
        }
        return $recipeUrl;
    }
}
