<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/genres', 'ApiGenreController@index');
Route::get('/books', 'ApiBookController@index');
Route::post('/books/store', 'ApiBookController@store');
Route::get('/books/show/{id}', 'ApiBookController@show');
Route::post('/books/remove/{id}', 'ApiBookController@delete');
Route::post('/books/add/genre', 'ApiBookController@addGenre');
