<?php

/* @var $this \yii\web\View */
/* @var $content string */

use app\assets\SwaggerUIAsset;

SwaggerUIAsset::register($this);
$this->beginPage();
?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Swagger for IU</title>
        <link href="//fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet" type="text/css"/>
        <?php $this->head() ?>

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
    </head>
    <body class="swagger-section">
    <?php $this->beginBody() ?>
    <?= $content ?>
    <?php $this->endBody() ?>
    </body>
    </html>
<?php $this->endPage() ?>