<?php
use console\migrations\Migration;


/**
 * Class m180302_172320_table_unit
 */
class m180302_172320_table_unit extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('{{%unit}}', [
            'id' => $this->primaryKey(),
            'name_en' => $this->string(),
            'name_he' => $this->string(),
            'name_es' => $this->string(),
            'position' => $this->integer()->notNull(),
            'status' => $this->smallInteger(),

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
        $this->dropTable('{{%unit}}');
    }

}
