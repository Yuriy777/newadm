<?php

namespace frontend\modules\v1\controllers;

use common\models\Company;
use common\models\Constant;
use common\models\FilesUploaded;
use common\models\Recipe;
use Yii;
use yii\base\DynamicModel;
use yii\helpers\ArrayHelper;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;

class RecipeController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Recipe::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        unset($actions['view']);
        unset($actions['index']);
        unset($actions['update']);
        unset($actions['delete']);
        return $actions;
    }

    /**
     * @param $alias
     * @param $id
     * @param integer $amountPeople
     * @return array
     * @throws NotFoundHttpException
     */
    public function actionView($alias, $id, $amountPeople = null)
    {
        $model = DynamicModel::validateData(compact('amountPeople'), [
            [['amountPeople'], 'number', 'min' => 1],
        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $company = Company::findOne([
            'alias' => $alias,
            'status' => Constant::STATUS_ACTIVE
        ]);

        if (!$company)
            throw new NotFoundHttpException('Not company found');

        $recipe = Recipe::findOne([
            'id' => $id,
            'company_id' => $company->id,
            'status' => Constant::STATUS_ACTIVE
        ]);



        if (!$recipe)
            throw new NotFoundHttpException('Not recipe found');


        $coefficient = $amountPeople ? $amountPeople / $recipe->people_amount : 1;
        $data = ArrayHelper::toArray($recipe, [
            Recipe::className() => [
                'id',
                'name_en',
                'language',
                'people_amount',
                'slug',
                'image' => function($recipe){
                    /** @var Recipe $recipe */
                    /** @var FilesUploaded $image */
                    $image =  $recipe->getImage()->one();
                    return $image->getFullUrl();
                },
                'company' => function ($recipe) {
                    /** @var Recipe $recipe */
                    /** @var Company $company */
                    $company = $recipe->getCompany()->one();
                    if (!$company)
                        return null;

                    return [
                        'id' => $company->id,
                        'name' => $company->getNameByLang($recipe->language),
                        'image' => $company->getFullPathCompanyImg(),
                        'url' => $company->company_site_url,
                        'alias' => $company->alias,
                        'header_color' => $company->color_1,
                        'color_2' => $company->color_2,
                        'button_bg_color' => $company->color_3,
                    ];
                },
                'ingredients' => function ($recipe) use ($coefficient) {
                    /** @var Recipe $recipe */
                    return array_values($recipe->getActiveIngredientsGroupByCategory($coefficient));
                }
            ]
        ]);

        return $data;
    }


    /**
     * @return bool
     */
    public function actionSend()
    {
        $result = false;
        $requestData = Yii::$app->getRequest()->getBodyParams();
        if ((!empty($requestData['email']) || !empty($requestData['sms'])) && !empty($requestData['recipeId']) &&
            $recipe = Recipe::findOne(intval($requestData['recipeId']))) {

            if (!empty($requestData['email']))
                $result = Yii::$app->mailer->compose('fe-recipe', ['recipe' => $recipe])
                    ->setFrom(Yii::$app->params['noreplyEmail'])
                    ->setTo($requestData['email'])
                    ->setSubject('Crazy-SOB Recipe: product list')
                    ->send();

            if (!empty($requestData['sms'])) {
                //todo send sms
            }
        }
        return $result;
    }

}
