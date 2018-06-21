<?php

namespace api\modules\v1\controllers;

use common\models\User;
use yii\rest\ActiveController;

/**
 * Class UserController
 * @package api\modules\v1\controllers
 */
class UserController extends ActiveController
{

    public $modelClass = 'common\models\User';
    /**
     * @inheritdoc
     */
    public function actions()
    {
        $actions = parent::actions();

        unset($actions['update']);
        unset($actions['create']);
        unset($actions['view']);
        unset($actions['index']);
        unset($actions['delete']);

        return $actions;
    }

    /**
     * @SWG\Get(
     *     path="/{lang}/v1/cities",
     *     summary="Finds all cities",
     *     tags={"city"},
     *     @SWG\Parameter(
     *         in="path",
     *         name="lang",
     *         default="ru",
     *         required=false,
     *         type="string",
     *     ),
     *     @SWG\Response(
     *         response=200,
     *         description="List of cities objects",
     *     )
     * )
     */
    public function actionIndex()
    {
        $cities = User::find()
            ->asArray()->all();

        return $cities;
    }


}
