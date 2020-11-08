<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MemosStoreRequest;
use App\Models\Memos;
use App\Exceptions\Api\ApiException;
use Illuminate\Http\Request;

class MemosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$memo = Memos::all();
        //$memo = Memos::whereNotNull('id')->get();
//\Log::debug($memo->mapToGroups(function($v, $k) {
//return [$v->id => $v];
//}));
		//return $memo;
        $memo = Memos::whereNotNull('id')->get();
		return $memo->mapWithKeys(function($v, $k) {
			return [$v->id => $v];
		});
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //public function store(Request $request)
    public function store(MemosStoreRequest $request)
    {
        $memo = new Memos();
		$memo->user_id = 1;//todo
		$memo->title = $request->title;
		$memo->body = $request->body;
		$memo->mark_color = $request->mark_color;//todo
//throw new ApiException('exception test!!');
		return $memo->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Memos::find($id);
		return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = Memos::find($id);
//\Log::debug(print_r($data,true));
//\Log::debug(print_r($request->title,true));
//\Log::debug(print_r($request->body,true));
		$data->title = $request->title;
		$data->body = $request->body;
		$data->mark_color = $request->mark_color;
		return $data->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Memos::destroy($id);
    }
}
