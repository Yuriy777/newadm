<?php

use yii\db\Migration;

/**
 * Class m180315_093904_add_foreign_key_to_recipe_table
 */
class m180315_093904_add_foreign_key_to_recipe_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // creates index for column `recipe_id`
        $this->createIndex(
            'idx-recipe-company_id',
            'recipe',
            'company_id'
        );

        // add foreign key for table `recipe`
        $this->addForeignKey(
            'fk-recipe-company_id',
            'recipe',
            'company_id',
            'company',
            'id',
            'RESTRICT'
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        // drops foreign key for table `recipe`
        $this->dropForeignKey(
            'fk-recipe-company_id',
            'recipe'
        );

        // drops index for column `recipe_id`
        $this->dropIndex(
            'idx-recipe-company_id',
            'recipe'
        );
    }

}
