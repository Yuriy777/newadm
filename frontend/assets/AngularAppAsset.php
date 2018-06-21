<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AngularAppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $js = [
        'js/ng/inline.bundle.js',
        'js/ng/polyfills.bundle.js',
        'js/ng/styles.bundle.js',
        'js/ng/vendor.bundle.js',
        'js/ng/main.bundle.js',
    ];
    public $css = [
        'css/site.css',
    ];
    public $depends = [
        'yii\bootstrap\BootstrapAsset',
    ];
}
