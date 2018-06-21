<?php

use yii\db\Migration;

/**
 * Class m180402_171920_change_part_in_ingr_unit_map
 */
class m180402_171920_change_part_in_ingr_unit_map extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->alterColumn('ingredient_unit_map', 'part', $this->decimal(5,2));
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->alterColumn('ingredient_unit_map', 'part', $this->float());
    }


}
