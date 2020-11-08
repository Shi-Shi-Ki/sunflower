<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class BaseRequest extends FormRequest
{
    protected $skipHeaderCheck = false;

    protected function failedValidation(Validator $validator) {
//\Log::debug("*** method: ".$this->method());
        $errorMessage = $validator->errors();
        $resStatusCode = 400;
        if (!$this->_authRequest()) {
            $resStatusCode = 401;
            $errorMessage = 'auth api error.';
        }
        throw new HttpResponseException(
            response()->json([
                'errors' => $errorMessage,
            ], $resStatusCode)
        );
    }

    private function _authRequest() {
//\Log::debug('*** secretkey: '.$this->header('X-Secret-Key'));
        if ($this->skipHeaderCheck) {
            return true;
        }
        return true;
    }
}
