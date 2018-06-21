<?php

use console\migrations\Migration;


/**
 * Handles the creation of table `translation`.
 */
class m180307_082513_translation_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('translation', [
            'id' => $this->primaryKey(),
            'key' => $this->string()->notNull()->unique(),
            'en' => $this->string()->notNull(),
            'he' => $this->string(),
            'es' => $this->string(),
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
    public function down()
    {
        $this->dropTable('translation');
    }
}
