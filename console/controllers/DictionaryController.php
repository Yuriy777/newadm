<?php

namespace console\controllers;

use common\models\Translation;
use yii\console\Controller;
use yii\helpers\Console;

class DictionaryController extends Controller
{

    /**
     *
     * @return int
     */
    public function actionInit()
    {
        $data = require __DIR__ . '/../dictionary/data.php';
        echo $this->ansiFormat('found  ' . count($data) . ' items', Console::FG_YELLOW);
        $counter = 0;
        if ($data && is_array($data)) {
            foreach ($data as $item) {
                if (!isset($item['key'], $item['en'], $item['es'], $item['he'])) {
                    echo $this->ansiFormat('invalid data', Console::FG_RED) . PHP_EOL;
                    continue;
                }

                $translation = Translation::findOne(['key' => $item['key']]);
                if (!$translation)
                    $translation = new Translation(['key' => $item['key']]);

                if ($translation) {
                    $translation->setAttributes([
                        'en' => $item['en'],
                        'es' => $item['es'],
                        'he' => $item['he'],
                    ]);
                }
                if ($translation->save()) {
                    $counter++;
                    echo $this->ansiFormat($item['key'] . ' added to DB', Console::FG_GREEN) . PHP_EOL;
                }
            }
        }

        echo PHP_EOL . $this->ansiFormat($counter . ' / ' . count($data) . ' added to DB', Console::FG_GREEN) . PHP_EOL;


        return self::EXIT_CODE_NORMAL;
    }


}