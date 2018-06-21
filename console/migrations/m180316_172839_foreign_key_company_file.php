<?php

use console\migrations\Migration;

/**
 * Class m180316_172839_foreign_key_company_file
 */
class m180316_172839_foreign_key_company_file extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->alterColumn('company', 'logo', $this->integer());
        // creates index for column `logo`
        $this->createIndex(
            'idx-company-logo',
            'company',
            'logo'
        );
        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-company_logo-files_uploaded',
            'company',
            'logo',
            'files_uploaded',
            'id',
            'RESTRICT'
        );


        $this->alterColumn('company', 'image_company', $this->integer());
        // creates index for column `image_company`
        $this->createIndex(
            'idx-company-image_company',
            'company',
            'image_company'
        );
        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-company_image_company-files_uploaded',
            'company',
            'image_company',
            'files_uploaded',
            'id',
            'RESTRICT'
        );

        $this->alterColumn('company', 'image_product_list', $this->integer());
        // creates index for column `image_company`
        $this->createIndex(
            'idx-company-image_product_list',
            'company',
            'image_product_list'
        );
        // add foreign key for table `files_uploaded`
        $this->addForeignKey(
            'fk-company_image_product_list-files_uploaded',
            'company',
            'image_product_list',
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
            'fk-company_image_product_list-files_uploaded',
            'company'
        );
        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-company-image_product_list',
            'company'
        );
        $this->alterColumn('company', 'image_product_list', $this->string());

        // drops foreign key for table `ingredient`
        $this->dropForeignKey(
            'fk-company_image_company-files_uploaded',
            'company'
        );
        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-company-image_company',
            'company'
        );
        $this->alterColumn('company', 'image_company', $this->string());


        // drops foreign key for table `ingredient`
        $this->dropForeignKey(
            'fk-company_logo-files_uploaded',
            'company'
        );
        // drops index for column `unit_id`
        $this->dropIndex(
            'idx-company-logo',
            'company'
        );
        $this->alterColumn('company', 'logo', $this->string());

    }
}
