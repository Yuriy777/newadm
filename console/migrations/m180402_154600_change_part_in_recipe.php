<?php

use yii\db\Migration;

/**
 * Class m180402_154600_change_part_in_recipe
 */
class m180402_154600_change_part_in_recipe extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->alterColumn('recipe_ingredient', 'unit_amount', $this->decimal(5,2));
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->alterColumn('recipe_ingredient', 'unit_amount', $this->float());
    }
}
