<?php

namespace App\Http\Requests;

class MemosStoreRequest extends BaseRequest
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
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:1024',
        ];
    }

    public function attributes() {
        return [
            'title' => 'タイトル',
            'content' => 'メモ内容',
        ];
    }
}
