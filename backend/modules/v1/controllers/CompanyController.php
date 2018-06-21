<?php

namespace backend\modules\v1\controllers;

use common\models\Company;
use common\models\Constant;
use common\models\Recipe;
use Yii;
use yii\base\DynamicModel;
use yii\db\ActiveQuery;
use yii\db\Expression;
use yii\db\Query;
use yii\filters\auth\HttpBearerAuth;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\web\ServerErrorHttpException;

class CompanyController extends ActiveController
{
    /**
     * @inheritdoc
     */
    public $modelClass = Company::class;

    /**
     * @inheritdoc
     */
    public $publicActions = [];

    public function actions()
    {
        $actions = parent::actions();
        unset($actions['delete']);
        unset($actions['view']);
        unset($actions['index']);
        unset($actions['create']);
        unset($actions['update']);
        return $actions;
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::class,
            'optional' => $this->publicActions,
        ];

        return $behaviors;
    }

    public function actionCreate()
    {
        $model = new Company();
        $requestData = Yii::$app->getRequest()->getBodyParams();

        $model->load($requestData, '');


        if (!$model->save()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        Yii::$app->response->setStatusCode(201);
        return $model;
    }

    /**
     * @SWG\Get(
     *     path="/v1/companies",
     *     summary="Find all company",
     *     tags={"company"},
     *     @SWG\Response(
     *         response=200,
     *         description="company object list",
     *     )
     * )
     */
    /**
     * @param int $page
     * @param int $limit
     * @param string $name
     * @param string $status
     * @return array
     */
    public function actionIndex($page = 1, $limit = 10, $name = '', $url = '', $status = '')
    {
        $model = DynamicModel::validateData(compact('name', 'page', 'status', 'limit', 'url'), [
            [['name', 'url'], 'string', 'max' => 128],
            [['status'], 'in', 'range' => Constant::getAllStatus()],
            [['limit'], 'number', 'max' => 100, 'min' => 5],
            [['page'], 'number', 'min' => 1]

        ]);
        if ($model->hasErrors()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }

        $subQuery = (new Query())
            ->select('count(*)')
            ->from(Recipe::tableName())
            ->where(Company::tableName() . '.id = ' . Recipe::tableName() . '.company_id')
            ->andWhere([Recipe::tableName() . '.status' => Constant::STATUS_ACTIVE]);

        $companyQuery = Company::find()
            ->select([
                'id',
                'name_en',
                'name_es',
                'name_he',
                'company_site_url',
                'status',
                'logo',
                'activeRecipeCount' => $subQuery,
            ])
            ->with([
                'logo' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                },]);

        $companyQuery->andFilterWhere(['like', 'name_en', $name]);
        $companyQuery->andFilterWhere(['like', 'company_site_url', $url]);
        $companyQuery->andFilterWhere(['status' => $status]);


        $companyCountQuery = clone $companyQuery;
        $companies = $companyQuery->offset(($page - 1) * $limit)
            ->limit($limit)
            ->asArray()
            ->all();

        return [
            'data' => $companies,
            'count' => $companyCountQuery->count(),
        ];
    }

    /**
     * @SWG\Put(
     *     path="/v1/companies/{id}",
     *     summary="Update company",
     *     tags={"company"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *     ),
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="company data format",
     *         @SWG\Schema(ref="#/definitions/company"),
     *     ),
     *     @SWG\Response(
     *         response=201,
     *         description="ok",
     *     )
     * )
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $model->load(Yii::$app->getRequest()->getBodyParams(), '');
        if (!$model->validate()) {
            Yii::$app->response->setStatusCode(400);
            return $model->errors;
        }
        $model->save();
        return $model->toArray([
            'id'
        ]);
    }

    /**
     * @param $id
     * @return array|null|\yii\db\ActiveRecord
     */
    public function actionView($id)
    {
        return $this->findModel($id, true);
    }

    /**
     * @SWG\Post(
     *     path="/v1/companies",
     *     summary="Add new company",
     *     tags={"company"},
     *     @SWG\Parameter(
     *         in="body",
     *         name="body",
     *         required=false,
     *         description="company data format",
     *         @SWG\Schema(ref="#/definitions/company"),
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="ok",
     *     )
     * )
     * @SWG\Definition(
     *     definition="company",
     *      @SWG\Property(
     *          property="id",
     *          type="integer"
     *     ),
     *     @SWG\Property(
     *          property="name_en",
     *          type="string",
     *          example="name_en",
     *     ),
     *     @SWG\Property(
     *          property="name_he",
     *          type="string",
     *          example="name_he"
     *     ),
     *     @SWG\Property(
     *          property="name_es",
     *          type="string",
     *          example="name_es"
     *     ),
     *     @SWG\Property(
     *          property="created_at",
     *          type="date",
     *     ),
     * )
     *
     * @SWG\Delete(
     *     path="/v1/companies/{id}",
     *     summary="Delete company by id",
     *     tags={"company"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         type="integer",
     *         description="company id",
     *     ),
     *     @SWG\Response(
     *         response=204,
     *         description="ok",
     *     )
     * )
     */
    /**
     * @param $id
     * @return array
     * @throws ServerErrorHttpException
     */
    public function actionDelete($id)
    {
        $model = $this->findModel($id);

        if ($model->getActiveRecipes()->count()) {
            Yii::$app->response->setStatusCode(400);
            return ['You can\'t delete this Company, the Company has active recipes'];
        }
        $model->setAttributes([
            'status' => Constant::STATUS_DELETE,
            'updated_at' => time(),
            'deleted_at' => time(),
            'deleted_by' => Yii::$app->user->id,
        ]);

        if ($model->save() === false) {
            throw new ServerErrorHttpException('Failed to delete the object for unknown reason.');
        }

        Yii::$app->getResponse()->setStatusCode(204);
    }

    /**
     * @param $id
     * @param bool $isArray
     * @return array|null|\yii\db\ActiveRecord
     * @throws NotFoundHttpException
     */
    private function findModel($id, $isArray = false)
    {
        $modelQuery = Company::find()
            ->where([
                'id' => $id,
                'status' => Constant::STATUS_ACTIVE,
            ])
            ->with('imageProductList')
            ->with('imageCompany')
            ->with([
                'logo' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                },
                'imageCompany' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                },
                'imageProductList' => function ($query) {
                    $imageUrl = new Expression("CONCAT('" . $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . "', path)");
                    /** @var $query ActiveQuery */
                    $query->select([
                        'id',
                        'path' => $imageUrl
                    ]);
                },
            ]);

        if ($isArray) {
            $modelQuery->asArray();
        }
        $model = $modelQuery->one();

        if (!$model) {
            throw new NotFoundHttpException("Object not found: $id");
        }

        return $model;
    }

}
