<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// personal auth check
Route::get('/personal', function(){
    $user = App\User::find(1);
    $token = $user->createToken('token_for_user1')->accessToken;
    return response()->json(['token' => $token]);
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// sessionを利用する場合はmiddlewareをwebにする必要がある
//Route::group(['middleware' => ['api']], function() {
//Route::group(['middleware' => ['web']], function() {
//Route::group(['middleware' => ['auth:api','client']], function() {
Route::group(['middleware' => ['auth:api']], function() {
    //Route::resource('session', 'Api\SessionController', ['only' => ['index']]);
    //Route::resource('login', 'Api\LoginController', ['only' => ['store']]);
    // memos
    Route::resource('memos', 'Api\MemosController', ['except' => ['create','edit']]);
	Route::namespace('Api')->group(function() {
		// index,show,storeはデフォで用意されている模様
		//Route::get('/', 'MemosController@index');
		//Route::get('/{id}', 'MemosController@show');
		//Route::post('/', 'MemosController@store');
		Route::put('/{id}', 'MemosController@update');
		Route::delete('/{id}', 'MemosController@destroy');
	});

    //Route::resource('samples', 'Api\SamplesController', ['except' => ['create','edit']]);
});
