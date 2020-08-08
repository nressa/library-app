<?php

// Home
Breadcrumbs::for('home', function ($trail) {
    $trail->push('Home', route('home'));
});

// Home > Books
Breadcrumbs::for('books', function ($trail) {
    $trail->parent('home');
    $trail->push('Books', route('books'));
});

// Home > Books > Create
Breadcrumbs::for('create_book_page', function ($trail) {
    $trail->parent('books');
    $trail->push('Create', route('create_book_page'));
});
