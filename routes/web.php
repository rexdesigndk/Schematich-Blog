<?php

use Illuminate\Support\Facades\Route;

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

Route::statamic('search', 'search', [
   'title' => 'Your Search Results',
   'h1_title' => 'Your Search Results',
   'paragraph' => 'All Articles',
]);

Route::statamic('blog', 'blog/index', [
    'title' => 'All Articles',
    'h1_title' => 'All Articles',
    'paragraph' => 'All Articles',
 ]);