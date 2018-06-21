<?php

use yii\db\Migration;

/**
 * Class m180321_153256_extend_profile
 */
class m180321_153256_extend_profile extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->addColumn('profile', 'second_name', $this->string());
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropColumn('profile', 'second_name');
    }

}
