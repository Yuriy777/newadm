<?php
use console\migrations\Migration;


/**
 * Class m180302_140814_table_category
 */
class m180302_140814_table_category extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('{{%category}}', [
            'id' => $this->primaryKey(),
            'name_en' => $this->string(),
            'name_he' => $this->string(),
            'name_es' => $this->string(),
            'position' => $this->integer()->notNull(),
            'status' => $this->smallInteger(),
            'image' => $this->string(),

            'createAt' => $this->timestamp(),
            'createBy' => $this->integer(),
            'updateAt' => $this->dateTime(),
            'updateBy' => $this->integer(),
        ], $this->tableOptions);

    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('{{%category}}');
    }

}
