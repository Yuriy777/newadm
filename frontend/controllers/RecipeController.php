<?php
namespace frontend\controllers;

use common\models\Company;
use common\models\Constant;
use common\models\FilesUploaded;
use common\models\Recipe;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\web\NotFoundHttpException;

/**
 * Recipe controller
 */
class RecipeController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'view' => ['get'],
                ],
            ],
        ];
    }

    /**
     * @param $companyAlias
     * @param $recipeId
     * @return string
     * @throws NotFoundHttpException
     */
    public function actionView($companyAlias, $recipeId)
    {
        $company = Company::findOne([
            'alias' => $companyAlias,
            'status' => Constant::STATUS_ACTIVE
        ]);

        if (!$company)
            throw new NotFoundHttpException('Company not found');

        $recipe = Recipe::findOne([
            'id' => $recipeId,
            'company_id' => $company->id,
            'status' => Constant::STATUS_ACTIVE
        ]);
        if (!$recipe)
            throw new NotFoundHttpException('Recipe not found');

        \Yii::$app->view->registerMetaTag([
            'name' => 'og:title',
            'content' =>  $recipe->name_en
        ]);
        \Yii::$app->view->registerMetaTag([
            'name' => 'og:description',
            'content' => $recipe->name_en
        ]);
        /** @var FilesUploaded $image */
        $image =  $recipe->getImage()->one();
        \Yii::$app->view->registerMetaTag([
            'name' => 'og:image',
            'content' => $image ? $image->getFullUrl() : '',
            'itemprop' => "image"
        ]);
        return $this->render('view');
    }


}
