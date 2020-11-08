<?php

namespace App\Http\Requests;

class LoginRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|string|max:20',
            'password' => 'required|min:6|max:12',
        ];
    }

    public function attributes() {
        return [
            'user_id' => 'ユーザID',
            'password' => 'パスワード',
        ];
    }
}
