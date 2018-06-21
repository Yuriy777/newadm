<?php

use console\migrations\Migration;

/**
 * Class m180307_103841_recipe_table
 */
class m180307_103841_recipe_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('recipe', [
            'id' => $this->primaryKey(),
            'company_id' => $this->integer()->notNull(),
            'name_en' => $this->string()->notNull(),
            'name_he' => $this->string(),
            'name_es' => $this->string(),
            'people_amount' => $this->integer()->notNull(),
            'image' => $this->string(),
            'slug' => $this->string()->notNull(),
            'language' => $this->string()->notNull(),
            'status' => $this->integer()->notNull(),
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
        $this->dropTable('recipe');
    }


}
