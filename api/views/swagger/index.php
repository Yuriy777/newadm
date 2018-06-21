<?php

use yii\web\View;
use yii\helpers\Url;

/* @var $this yii\web\View */

$this->title = 'Swagger IU';
?>

    <div id='header'>
        <div class="swagger-ui-wrap">
            <a id="logo" href="<?= Url::to('/swagger') ?>">IU</a>

            <form id='api_selector'>
                <div class='input'><input placeholder="http://example.com/api" id="input_baseUrl" name="baseUrl"
                                          type="text"/></div>
                <div class='input'><input placeholder="Authorization" id="input_apiKey" name="apiKey" type="text"/>
                </div>
                <div class='input'><a id="explore" href="#" data-sw-translate>Explore</a></div>
            </form>
        </div>
    </div>

    <div id="message-bar" class="swagger-ui-wrap" data-sw-translate>&nbsp;</div>
    <div id="swagger-ui-container" class="swagger-ui-wrap"></div>

<?php
$url = Url::toRoute('swagger/get-json');

$this->registerJs(<<<SCRIPT
      (function(){
          window.swaggerConfig = {
            url: "$url"
          };
      })();
SCRIPT
    , View::POS_HEAD);

$this->registerJsFile('js/swagger-init.js', ['depends' => 'app\assets\SwaggerUIAsset', 'position' => View::POS_HEAD]);
?>