<?php

use yii\db\Migration;

/**
 * Class m180322_105058_foreign_key_recipe_image
 */
class m180322_105058_foreign_key_recipe_image extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->alterColumn('recipe', 'image', $this->integer());
        // creates index for column `image`
        $this->createIndex(
            'idx-recipe-image',
            'recipe',
            'image'
        );
        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-recipe_image-files_uploaded',
            'recipe',
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
            'fk-recipe_image-files_uploaded',
            'recipe'
        );
        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-recipe-image',
            'recipe'
        );
        $this->alterColumn('recipe', 'image', $this->string());
    }
}