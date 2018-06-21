<?php
use console\migrations\Migration;


/**
 * Class m180306_110347_table_ingredient
 */
class m180306_110347_table_ingredient extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('{{%ingredient}}', [
            'id' => $this->primaryKey(),
            'name_en' => $this->string()->notNull(),
            'name_he' => $this->string(),
            'name_es' => $this->string(),
            'image' => $this->string(),
            'status' => $this->smallInteger(),

            'category_id' => $this->integer()->notNull(),

            'createAt' => $this->timestamp(),
            'createBy' => $this->integer(),
            'updateAt' => $this->dateTime(),
            'updateBy' => $this->integer(),
        ], $this->tableOptions);

        // creates index for column `category_id`
        $this->createIndex(
            'idx-ingredient-category_id',
            'ingredient',
            'category_id'
        );

        // add foreign key for table `category`
        $this->addForeignKey(
            'fk-ingredient-category_id',
            'ingredient',
            'category_id',
            'category',
            'id',
            'RESTRICT'
        );

    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        // drops foreign key for table `user`
        $this->dropForeignKey(
            'fk-ingredient-category_id',
            'ingredient'
        );

        // drops index for column `author_id`
        $this->dropIndex(
            'idx-ingredient-category_id',
            'ingredient'
        );

        $this->dropTable('{{%ingredient}}');
    }


}
