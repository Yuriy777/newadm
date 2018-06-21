<?php

use console\migrations\Migration;

/**
 * Class m180307_145310_recipe_ingridient_table
 */
class m180307_145310_recipe_ingredient_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('recipe_ingredient',
            [
                'id' => $this->primaryKey(),
                'recipe_id' => $this->integer()->notNull(),
                'ingredient_id' => $this->integer()->notNull(),
                'unit_id' => $this->integer()->notNull(),
                'unit_amount' => $this->integer()->notNull(),
                'created_at' => $this->integer(),
                'created_by' => $this->integer(),
                'updated_at' => $this->integer(),
                'updated_by' => $this->integer(),
                'deleted_at' => $this->integer(),
                'deleted_by' => $this->integer(),
            ], $this->tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('recipe_ingredient');
    }

}
