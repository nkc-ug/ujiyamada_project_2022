<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/divide/{item_name}', [App\Http\Controllers\TodoController::class, 'divide']);
Route::get('/api/divide/item/{item_name}', [App\Http\Controllers\TodoController::class, 'getItem']);
Route::get('/api/calender/{area_name}/{month}', [App\Http\Controllers\TodoController::class, 'calander']);