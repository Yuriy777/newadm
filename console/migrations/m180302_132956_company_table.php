<?php

use console\migrations\Migration;

/**
 * Handles the creation of table `company`.
 */
class m180302_132956_company_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('company', [
            'id' => $this->primaryKey(),
            'name_en' => $this->string()->notNull(),
            'name_he' => $this->string(),
            'name_es' => $this->string(),
            'company_site_url' => $this->string(),
            'logo' => $this->string(),
            'image_company' => $this->string(),
            'image_product_list' => $this->string(),
            'color_1' => $this->string(),
            'color_2' => $this->string(),
            'color_3' => $this->string(),
            'color_4' => $this->string(),
            'color_5' => $this->string(),
            'status' => $this->integer()->notNull(),
            'created_at' => $this->integer(),
            'created_by' => $this->integer(),
            'updated_at' => $this->integer(),
            'updated_by' => $this->integer(),
            'deleted_at' => $this->integer(),
            'deleted_by' => $this->integer(),
        ],$this->tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('company');
    }
}
