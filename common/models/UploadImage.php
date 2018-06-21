<?php

namespace common\models;

use ReflectionClass;
use Yii;
use yii\base\Model;
use yii\db\Exception;
use yii\helpers\Url;
use yii\web\ServerErrorHttpException;
use yii\web\UnsupportedMediaTypeHttpException;
use yii\web\UploadedFile;

class UploadImage extends Model
{
    public $image;

    const UPLOAD_DIR = '/uploads/image/';

    public function rules()
    {
        return [
            [
                ['image'], 'image', 'extensions' => 'jpg, jpeg, png',
                'maxSize' => 1024 * 1024 * 2,
                'skipOnEmpty' => true,
                'tooBig' => Yii::t('app','File size can not exceed 2 MB'),
            ],
        ];
    }

    public function upload()
    {
        if (!$this->validate()) {
            throw new UnsupportedMediaTypeHttpException($this->getFirstError('image'));
        }

        $filename = $this->generateFileName();
        $dirname = $this->generateDirName();
        if ($this->image->saveAs($dirname . $filename)) {
            return substr($dirname . $filename, strlen(Url::to('@frontend/web/')));
        } else {
            throw new ServerErrorHttpException("Can not save image to upload directory ".$dirname);
        }

    }

    protected function generateFileName()
    {
        return time() . "_{$this->image->basename}.{$this->image->extension}";
    }

    protected function generateDirName()
    {
        $dirname = Url::to('@frontend/web') . self::UPLOAD_DIR;
        if (!file_exists($dirname)) {
            mkdir($dirname, 0777, true);
        }

        return $dirname;
    }

}