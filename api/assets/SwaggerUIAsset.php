<?php

namespace app\assets;

use yii\web\View;
use yii\web\AssetBundle;

class SwaggerUIAsset extends AssetBundle
{
    public $sourcePath = '@bower/swagger-ui/dist';

    public $js = [
        'lib/object-assign-pollyfill.js',
        'lib/jquery-1.8.0.min.js',
        'lib/jquery.slideto.min.js',
        'lib/jquery.wiggle.min.js',
        'lib/jquery.ba-bbq.min.js',
        'lib/handlebars-4.0.5.js',
        'lib/lodash.min.js',
        'lib/backbone-min.js',
        'swagger-ui.js',
        'lib/highlight.9.1.0.pack.js',
        'lib/highlight.9.1.0.pack_extended.js',
        'lib/jsoneditor.min.js',
        'lib/marked.js',
        'lib/swagger-oauth.js',
//        'lang/translator.js',
//        'lang/ru.js',
//        'lang/en.js',
    ];

    public $jsOptions = [
        'position' => View::POS_HEAD,
    ];

    public $css = [
        ['css/typography.css', 'media' => 'screen'],
        ['css/reset.css', 'media' => 'screen'],
        ['css/screen.css', 'media' => 'screen'],
        ['css/print.css', 'media' => 'screen'],
    ];

}