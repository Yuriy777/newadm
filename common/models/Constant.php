<?php

namespace common\models;

/**
 * Class Constant
 * @package common\models
 */
class Constant {

    const STATUS_ACTIVE = 1;
    const STATUS_NOT_ACTIVE = 2;
    const STATUS_DELETE = 3;
    const STATUS_PENDING = 4;

    const LANG_ENGLISH = 'en';
    const LANG_HEBREW = 'he';
    const LANG_SPANISH = 'es';

    public static function getAllStatus() {
        return [
            self::STATUS_ACTIVE,
            self::STATUS_NOT_ACTIVE,
            self::STATUS_DELETE,
            self::STATUS_PENDING,
        ];
    }

    public static function getAllLang() {
        return [
            self::LANG_ENGLISH,
            self::LANG_HEBREW,
            self::LANG_SPANISH,
        ];
    }

}
