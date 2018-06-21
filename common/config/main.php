<?php
return [
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
    ],
    'modules' => [
        'user' => [
            'class' => 'dektrium\user\Module',
            'enableConfirmation' => false,
            'enableRegistration' => false,
            'modelMap' => [
                'Profile' => 'common\models\Profile',
                'User' => 'common\models\User',
            ],
        ],
    ],
];
