<?php

$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-backend',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'modules' => [
        'v1' => [
            'basePath' => '@backend/modules/v1',
            'class' => 'backend\modules\v1\Module'
        ],
    ],
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-backend',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'enableSession' => false,
        ],
        'session' => [
            // this is the name of the session cookie used for login on the backend
            'name' => 'advanced-backend',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                'v1/uploads/<action:\w+>' => 'v1/uploads/<action>',
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/user',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET block/<id:[0-9]*>' => 'block'
                    ]
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/category',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET max-active-position' => 'max-active-position',
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/unit',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET max-active-position' => 'max-active-position',
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/ingredient',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ]
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/company',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ]
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/translation',
                    'extraPatterns' => [
                        'GET <key:[a-z0-9-]*>' => 'view',
                    ],
                    'tokens' => [
                        '{id}' => '<key:\\w+>'
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/coupon',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/recipe',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'POST <id:[a-z0-9-]*>/publish' => 'publish',
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'pluralize' => false,
                    'controller' => [
                        'v1/auth',
                    ],
                    'extraPatterns' => [
                        'POST login' => 'login',
                        'POST logout' => 'logout',
                    ],
                    'only' => ['logout', 'login']
                ],
                '/' => 'site/index',
                '/swagger' => 'swagger/index',
                '/swagger/get-json' => 'swagger/get-json',
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                '<module:\w+>/<controller:\w+>/<action:\w+>/<id>' => '<module>/<controller>/<action>',
            ],
        ],
    ],
    'params' => $params,
];
