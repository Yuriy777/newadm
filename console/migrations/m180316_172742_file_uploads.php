<?php

use console\migrations\Migration;

/**
 * Class m180316_172742_file_uploads
 */
class m180316_172742_file_uploads extends Migration
{
    public function safeUp()
    {
        $this->createTable('files_uploaded',[
            'id' => $this->primaryKey(),
            'filename' => $this->string()->notNull(),
            'extension' => $this->string(),
            'size' => $this->integer(),
            'path' => $this->string()->notNull(),
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
        $this->dropTable('files_uploaded');
    }
}
