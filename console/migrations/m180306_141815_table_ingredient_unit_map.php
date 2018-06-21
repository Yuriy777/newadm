<?php
use console\migrations\Migration;


/**
 * Class m180306_141815_table_ingredient_unit_map
 */
class m180306_141815_table_ingredient_unit_map extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable('{{%ingredient_unit_map}}', [
            'id' => $this->primaryKey(),
            'unit_id' => $this->integer(),
            'ingredient_id' => $this->integer(),
            'part' => $this->float(),

            'status' => $this->smallInteger(),
            'createAt' => $this->timestamp(),
            'createBy' => $this->integer(),
            'updateAt' => $this->dateTime(),
            'updateBy' => $this->integer(),
        ], $this->tableOptions);

        // creates index for column `unit_id`
        $this->createIndex(
            'idx-ingredient_unit_map-unit_id',
            'ingredient_unit_map',
            'unit_id'
        );

        // add foreign key for table `unit`
        $this->addForeignKey(
            'fk-ingredient_unit_map-unit_id',
            'ingredient_unit_map',
            'unit_id',
            'unit',
            'id',
            'RESTRICT'
        );

        // creates index for column `ingredient_id`
        $this->createIndex(
            'idx-ingredient_unit_map-ingredient_id',
            'ingredient_unit_map',
            'ingredient_id'
        );

        // add foreign key for table `ingredient`
        $this->addForeignKey(
            'fk-ingredient_unit_map-ingredient_id',
            'ingredient_unit_map',
            'ingredient_id',
            'ingredient',
            'id',
            'RESTRICT'
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        // drops foreign key for table `unit`
        $this->dropForeignKey(
            'fk-ingredient_unit_map-unit_id',
            'ingredient_unit_map'
        );

        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-ingredient_unit_map-unit_id',
            'ingredient_unit_map'
        );


        // drops foreign key for table `ingredient`
        $this->dropForeignKey(
            'fk-ingredient_unit_map-ingredient_id',
            'ingredient_unit_map'
        );

        // drops index for column `ingredient_id`
        $this->dropIndex(
            'idx-ingredient_unit_map-ingredient_id',
            'ingredient_unit_map'
        );

        $this->dropTable('{{%ingredient_unit_map}}');
    }

}
