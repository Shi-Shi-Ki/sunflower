<?php
namespace App\Exceptions\Api;

use Exception;

/**
 * API用の基本Exceptionクラス
 */
class ApiException extends Exception
{
    /**
     * @param int $statusCode ステータスコード
     * @param string $message エラ〜メッセージ
     * @param Exception $previous Exceptionオブジェクト引き継ぎ
     */
    public function __construct(
        $message = '',
        $statusCode = 0,
        Exception $previous = null
    ) {
        // "previous"は他のExceptionを使用した時に例外情報が握り潰されないようにするためのもの
        // 例えばDB系Exceptionを当Exceptionに引き継がせることができる
        parent::__construct($message, $statusCode, $previous);
    }
}
