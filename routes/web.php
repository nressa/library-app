<?php

Route::get('/', 'GuestController@index')->name('landing_page');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/books', 'BookController@index')->name('book_page');
Route::get('/books/create-book', 'BookController@create')->name('create_book_page');
Route::get('/books/{id}', 'BookController@show')->name('show_book_page');

Route::get('/genres', 'ApiGenreController@index');