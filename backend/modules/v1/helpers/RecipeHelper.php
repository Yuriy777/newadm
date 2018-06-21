<?php

namespace backend\modules\v1\helpers;

use common\models\Recipe;
use common\models\RecipeIngredient;
use Yii;
use yii\helpers\ArrayHelper;


abstract class RecipeHelper
{
    /**
     * Field used in comparison of old ingredient data with new one
     *
     * @var array
     */
    protected static $fieldsToCompare = [
        'ingredient_id',
        'unit_id',
        'unit_amount'
    ];

    /**
     * Updates recipe's ingredients data
     *
     * @param $id Recipe id to update
     * @throws \yii\base\InvalidConfigException
     */
    public static function updateRecipeIngredients($id)
    {
        $oldIngridientList = self::getCurrentIngredients($id);
        try {
            $newIngredientsList = ArrayHelper::index(self::getIngredientsData(), 'ingredient_id');
        } catch (\Throwable $e){
            Yii::trace($e->getMessage());
            return;
        }
        $oldIngsIds = array_keys($oldIngridientList);
        $newIngsIds = array_keys($newIngredientsList);

        $toRemove = array_map(function ($data) use ($oldIngridientList) {
            return $oldIngridientList[$data]['id'];
        }, array_diff($oldIngsIds, $newIngsIds));
        if (!empty($toRemove)) {
            self::removeIngredients($toRemove);
        }

        $toAdd = array_map(function ($data) use ($newIngredientsList) {
            return $newIngredientsList[$data];
        }, array_diff($newIngsIds, $oldIngsIds));
        if (!empty($toAdd)) {
            self::addIngredients($toAdd, $id);
        }

        $toCompare = array_intersect($oldIngsIds, $newIngsIds);
        if (!empty($toCompare)) {
            foreach ($toCompare as $index) {
                self::manageIntersectedIngredients($oldIngridientList[$index], $newIngredientsList[$index]);
            }
        }
    }

    /**
     * Adds new recipe_id-ingredient_id pare to the junction table
     *
     * @param array $newIngredients contains data required to describe ingredient in recipe
     * @param $recipeId Recipe id that contain ingredient
     */
    public static function addIngredients(array $newIngredients, $recipeId)
    {

        foreach ($newIngredients as $data) {
            $recipeIngredient = new RecipeIngredient([
                'recipe_id' => $recipeId,
                'ingredient_id' => $data['ingredient_id'],
                'unit_id' => $data['unit_id'],
                'unit_amount' => $data['unit_amount']
            ]);

            $recipeIngredient->save();
        }
    }

    /**
     * Marks the recipe_id-ingredient_id pare as deleted in the junction table
     *
     * @param array $oldIngredients stores ids of relation(row) in the junction table
     */
    public static function removeIngredients(array $oldIngredients)
    {
        foreach ($oldIngredients as $recipeIngredientPareId) {
            $recipeIngredient = RecipeIngredient::findOne($recipeIngredientPareId);
            $recipeIngredient->deleted_at = time();
            $recipeIngredient->deleted_by = Yii::$app->user->id;
            $recipeIngredient->save();
        }
    }

    /**
     * Updates ingredients unit/amount in the junction table
     *
     * @param $id
     * @param $newData
     */
    public static function updateRecipeIngredient($id, $newData)
    {
        $model = RecipeIngredient::findOne($id);
        $model->load($newData, '');
        $model->save();
    }

    /**
     * Compares new and old ingredients data. If there is any difference, will update data in junction table
     *
     * @param $oldIngredient array existed ingredient's data
     * @param $newIngredient array new ingredient's data
     */
    public static function manageIntersectedIngredients(array $oldIngredient, array $newIngredient)
    {

        foreach (self::$fieldsToCompare as $field) {
            if ($oldIngredient[$field] != $newIngredient[$field]) {
                self::updateRecipeIngredient($oldIngredient['id'], $newIngredient);
            }
        }

    }

    /**
     * Return current ingredients of the recipe
     *
     * @param $id Recipe id
     * @return array array representation of existed ingredients in current recipe
     */
    public static function getCurrentIngredients($id)
    {
        return RecipeIngredient::find()
            ->where([
                'recipe_id' => $id,
                'deleted_at' => null,
            ])
            ->asArray()
            ->indexBy('ingredient_id')
            ->all();
    }


    /**
     * Returns array of new ingredients data from request
     *
     * @return mixed
     * @throws \yii\base\InvalidConfigException
     * @throws \Exception
     */
    public static function getIngredientsData()
    {
        $recipeIngredientFormName = explode("\\", RecipeIngredient::class);
        $requestData = Yii::$app->getRequest()->getBodyParams();
        if (!array_key_exists(end($recipeIngredientFormName), $requestData)) {
            throw new \Exception('no ingredients to update');
        }
        return Yii::$app->getRequest()->getBodyParams()[end($recipeIngredientFormName)];
    }
}