<?php

Route::get('/', 'GuestController@index')->name('landing_page');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/books', 'BookController@index')->name('books');
Route::get('/books/create', 'BookController@create')->name('create_book_page');
Route::get('/books/{title}/{id}', 'BookController@show')->name('show_book_page');

Route::get('/genres', 'ApiGenreController@index');