<?php

namespace common\models;

use dektrium\user\models\Profile as BaseProfile;

class Profile extends BaseProfile
{

    /**
     * @inheritdoc
     */
    public function rules()
    {
        $rules = parent::rules();
        $rules['secondName'] = ['second_name', 'string'];
        return $rules;
    }
}