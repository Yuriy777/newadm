<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'modules' => [
        'v1' => [
            'basePath' => '@frontend/modules/v1',
            'class' => 'frontend\modules\v1\Module'
        ],
    ],
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-frontend',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
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
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/recipe',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET <alias:[a-z0-9-]*>/<id:[0-9]*>' => 'view',
                        'POST send' => 'send',
                    ],
                ],

                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/translation',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                ],

                'recipes/<companyAlias:[a-z0-9-]*>/<recipeId:[0-9]*>' => '/recipe/view',

                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                '<module:\w+>/<controller:\w+>/<action:\w+>/<id>' => '<module>/<controller>/<action>',
            ],
        ],
    ],
    'params' => $params,
];
