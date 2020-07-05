<?php

namespace App\Http\Controllers;

use Auth;
use App\GenreService;
use App\BookService;
use Illuminate\Http\Request;

class ApiBookController extends Controller
{
    
    public function store(Request $request)
    {
        $bookService = new BookService;
        $book = $bookService->storeRecord($request);
        return $book;
    }
}
