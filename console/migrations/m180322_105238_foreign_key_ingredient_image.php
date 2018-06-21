<?php

use yii\db\Migration;

/**
 * Class m180322_105238_foreign_key_ingredient_image
 */
class m180322_105238_foreign_key_ingredient_image extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->alterColumn('ingredient', 'image', $this->integer());
        // creates index for column `image`
        $this->createIndex(
            'idx-ingredient-image',
            'ingredient',
            'image'
        );
        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-ingredient_image-files_uploaded',
            'ingredient',
            'image',
            'files_uploaded',
            'id',
            'RESTRICT'
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        // drops foreign key for table `ingredient`
        $this->dropForeignKey(
            'fk-ingredient_image-files_uploaded',
            'ingredient'
        );
        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-ingredient-image',
            'ingredient'
        );
        $this->alterColumn('ingredient', 'image', $this->string());
    }
}
