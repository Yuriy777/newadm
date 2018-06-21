<?php

namespace common\models;

use Yii;
use yii\behaviors\BlameableBehavior;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\helpers\Url;
use yii\web\ServerErrorHttpException;
use yii\web\UnsupportedMediaTypeHttpException;
use yii\web\UploadedFile;

/**
 * This is the model class for table "files_uploaded".
 *
 * @property int $id
 * @property string $filename
 * @property string $extension
 * @property int $size
 * @property string $path
 * @property int $created_at
 * @property int $created_by
 * @property int $updated_at
 * @property int $updated_by
 * @property int $deleted_at
 * @property int $deleted_by
 *
 * @property Company[] $companies
 * @property Company[] $companies0
 * @property Company[] $companies1
 */
class FilesUploaded extends ActiveRecord
{
    public $file;

    const SCENARIO_IMAGE = 'image_upload';
    const DIR_IMAGES = '/uploads/images/';

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'files_uploaded';
    }

    public function scenarios()
    {
        $scenarios = parent::scenarios();
        $scenarios[self::SCENARIO_IMAGE] = ['file'];
        return $scenarios;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
                [
                        'file', 'image', 'extensions' => 'jpg, jpeg, png',
                        'maxSize' => 1024 * 1024 * 2,
                        'skipOnEmpty' => true,
                        'tooBig' => Yii::t('app', 'File size can not exceed 2 MB'),
                        'on' => self::SCENARIO_IMAGE,
                ],
                [['filename', 'path'], 'required'],
                [['size', 'created_at', 'created_by', 'updated_at', 'updated_by', 'deleted_at', 'deleted_by'], 'integer'],
                [['filename', 'extension', 'path'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
                'id' => Yii::t('app', 'ID'),
                'filename' => Yii::t('app', 'Filename'),
                'extension' => Yii::t('app', 'Extension'),
                'size' => Yii::t('app', 'Size'),
                'path' => Yii::t('app', 'Path'),
                'created_at' => Yii::t('app', 'Created At'),
                'created_by' => Yii::t('app', 'Created By'),
                'updated_at' => Yii::t('app', 'Updated At'),
                'updated_by' => Yii::t('app', 'Updated By'),
                'deleted_at' => Yii::t('app', 'Deleted At'),
                'deleted_by' => Yii::t('app', 'Deleted By'),
        ];
    }

    public function saveFile(UploadedFile $file)
    {
        $this->file = $file;
        $temp = explode('.', $this->file->name);
        $this->filename = $this->file->name;
        $this->extension = end($temp);
        $this->size = $this->file->size;
        $this->path = $this->getFilePath();
        if (!$this->save()) {
            throw new UnsupportedMediaTypeHttpException($this->getFirstError('file'));
        }
        return [
                'id' => $this->id,
                'path' => $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . $this->path];
    }

    protected function generateFileName()
    {
        return time() . "_{$this->file->basename}.{$this->file->extension}";
    }

    protected function generateDirName()
    {
        switch ($this->scenario) {
            case self::SCENARIO_IMAGE:
                $dirPath = self::DIR_IMAGES;
                break;
            default:
                throw new ServerErrorHttpException(Yii::t('app', "Unknown scenario for uploading files"));
        }

        $dirname = Url::to('@frontend/web') . $dirPath;
        if (!file_exists($dirname)) {
            mkdir($dirname, 0777, true);
        }
        return $dirname;
    }

    protected function saveToDisk()
    {
        $filename = $this->generateFileName();
        $dirname = $this->generateDirName();
        if ($this->file->saveAs($dirname . $filename)) {
            return true;
        } else {
            throw new ServerErrorHttpException(Yii::t('app', "Can not save file to upload directory ") . $dirname);
        }
    }

    public function behaviors()
    {
        return [
                BlameableBehavior::class,
                TimestampBehavior::class,
        ];
    }

    public function getFilePath()
    {
        $filename = $this->generateFileName();
        $dirname = $this->generateDirName();
        return substr($dirname . $filename, strlen(Url::to('@frontend/web')));
    }

    public function save($runValidation = true, $attributeNames = null)
    {
        $transaction = Yii::$app->db->beginTransaction();
        try {
            if (parent::save() && $this->saveToDisk()) {
                $transaction->commit();
                return true;
            }
        } catch (\Throwable $e) {
            $transaction->rollBack();
        }

    }

    /**
     * @return string
     */
    public function getFullUrl()
    {
        return $_SERVER['REQUEST_SCHEME'] . '://' . Yii::$app->params['frontEndPath'] . $this->path;
    }
}