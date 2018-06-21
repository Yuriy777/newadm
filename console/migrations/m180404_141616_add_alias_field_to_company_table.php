<?php

use yii\db\Migration;

/**
 * Class m180404_141616_add_alias_field_to_company_table
 */
class m180404_141616_add_alias_field_to_company_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->addColumn('company', 'alias', $this->string());
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropColumn('company', 'alias');
    }
}
