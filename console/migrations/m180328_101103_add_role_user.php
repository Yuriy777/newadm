<?php
use console\migrations\Migration;

/**
 * Class m180328_101103_add_role_user
 */
class m180328_101103_add_role_user extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->addColumn('user', 'role', $this->integer());
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropColumn('user', 'role');
    }

}
