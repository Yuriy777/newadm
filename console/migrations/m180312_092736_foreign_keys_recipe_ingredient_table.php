<?php

use yii\db\Migration;

/**
 * Class m180312_092736_foreign_keys_recipe_ingredient_table
 */
class m180312_092736_foreign_keys_recipe_ingredient_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // creates index for column `recipe_id`
        $this->createIndex(
            'idx-recipe_ingredient-recipe_id',
            'recipe_ingredient',
            'recipe_id'
        );

        // add foreign key for table `recipe`
        $this->addForeignKey(
            'fk-recipe_ingredient-recipe_id',
            'recipe_ingredient',
            'recipe_id',
            'recipe',
            'id',
            'RESTRICT'
        );

        // creates index for column `ingredient_id`
        $this->createIndex(
            'idx-recipe_ingredient-ingredient_id',
            'recipe_ingredient',
            'ingredient_id'
        );

        // add foreign key for table `ingredient`
        $this->addForeignKey(
            'fk-recipe_ingredient-ingredient_id',
            'recipe_ingredient',
            'ingredient_id',
            'ingredient',
            'id',
            'RESTRICT'
        );

        // creates index for column `unit_id`
        $this->createIndex(
            'idx-recipe_ingredient-unit_id',
            'recipe_ingredient',
            'unit_id'
        );

        // add foreign key for table `unit`
        $this->addForeignKey(
            'fk-recipe_ingredient-unit_id',
            'recipe_ingredient',
            'unit_id',
            'unit',
            'id',
            'RESTRICT'
        );
    }

    public function safeDown()
    {
        // drops foreign key for table `ingredient`
        $this->dropForeignKey(
            'fk-recipe_ingredient-unit_id',
            'recipe_ingredient'
        );

        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-recipe_ingredient-unit_id',
            'recipe_ingredient'
        );


        // drops foreign key for table `ingredient`
        $this->dropForeignKey(
            'fk-recipe_ingredient-ingredient_id',
            'recipe_ingredient'
        );

        // drops index for column `ingredient_id`
        $this->dropIndex(
            'idx-recipe_ingredient-ingredient_id',
            'recipe_ingredient'
        );

        // drops foreign key for table `recipe`
        $this->dropForeignKey(
            'fk-recipe_ingredient-recipe_id',
            'recipe_ingredient'
        );

        // drops index for column `recipe_id`
        $this->dropIndex(
            'idx-recipe_ingredient-recipe_id',
            'recipe_ingredient'
        );

    }


}
