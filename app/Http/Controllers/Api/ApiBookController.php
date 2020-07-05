<?php

namespace App\Http\Controllers;

use Auth;
use App\AuthorService;
use App\GenreService;
use App\BookService;
use Illuminate\Http\Request;

class ApiBookController extends Controller
{
    
    public function store(Request $request)
    {
        $bookService = new BookService;
        $authorService = new AuthorService;
        $bookId = $bookService->storeBook($request);

        if($bookId != false){
            $arrAuthor = explode(',', $request->authors);
            $result = $authorService->storeAuthor($bookId, $arrAuthor);
        }
        return $result;
    }
}
