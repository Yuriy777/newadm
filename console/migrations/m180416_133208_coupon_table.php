<?php
use console\migrations\Migration;

/**
 * Class m180416_133208_coupon_table
 */
class m180416_133208_coupon_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('{{%coupon}}', [
            'id' => $this->primaryKey(),
            'title_en' => $this->string()->notNull(),
            'title_he' => $this->string(),
            'title_es' => $this->string(),
            'description_en' => $this->string()->notNull(),
            'description_he' => $this->string(),
            'description_es' => $this->string(),
            'status' => $this->integer(),
            'file_id' => $this->integer(),

            'start_date' => $this->dateTime(),
            'finish_date' => $this->dateTime(),

            'createAt' => $this->timestamp(),
            'createBy' => $this->integer(),
            'updateAt' => $this->dateTime(),
            'updateBy' => $this->integer(),
        ], $this->tableOptions);

        // creates index for column `file_id`
        $this->createIndex(
            'idx-coupon-file_id',
            'coupon',
            'file_id'
        );

        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-coupon-file_id',
            'coupon',
            'file_id',
            'files_uploaded',
            'id',
            'RESTRICT'
        );

        $this->addColumn('ingredient', 'coupon_id', $this->integer());

        // creates index for column `file_id`
        $this->createIndex(
            'idx-ingredient-coupon_id',
            'ingredient',
            'coupon_id'
        );

        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-ingredient-coupon_id',
            'ingredient',
            'coupon_id',
            'coupon',
            'id',
            'RESTRICT'
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {

        $this->dropForeignKey(
            'fk-ingredient-coupon_id',
            'ingredient'
        );
        $this->dropIndex(
            'idx-ingredient-coupon_id',
            'ingredient'
        );
        $this->dropColumn('ingredient', 'coupon_id');


        $this->dropForeignKey(
            'fk-coupon-file_id',
            'coupon'
        );
        $this->dropIndex(
            'idx-coupon-file_id',
            'coupon'
        );
        $this->dropTable('coupon');
    }
}
