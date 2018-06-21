<?php
use console\migrations\Migration;


/**
 * Class m180302_130336_table_token_api
 */
class m180302_130336_table_token_api extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('{{%token_api}}', [
            'id' => $this->primaryKey(),
            'date' => $this->timestamp(),
            'user_id' => $this->integer(),
            'access_token' => $this->string(),
        ], $this->tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('{{%token_api}}');
    }
}
