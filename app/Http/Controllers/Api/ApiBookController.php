<?php

namespace App\Http\Controllers;

use Auth;
use App\AuthorService;
use App\GenreService;
use App\BookService;
use Illuminate\Http\Request;

class ApiBookController extends Controller
{
    
    public function index()
    {
        $bookService = new BookService;
        $books = $bookService->list();   

        return response()->json([
            'status' => 'success',
            'books' => $books
        ]); 
    }
    
    public function store(Request $request)
    {
        $bookService = new BookService;
        $authorService = new AuthorService;
        $genreService = new GenreService;
        $bookId = $bookService->storeBook($request);

        if($bookId != false){
            $arrAuthor = explode(',', $request->authors);
            $authors = $authorService->storeAuthor($bookId, $arrAuthor);
            
            $arrAuthor = explode(',', $request->selected_genres);
            $genres = $genreService->storeBookToGenre($bookId, $arrAuthor);
        }
        return $bookId;
    }
    
    public function show($id)
    {
        
        $bookService = new BookService;
        $book = $bookService->showBook($id);   
        
        $genreService = new GenreService;
        $genres = $genreService->showBookToGenre($id);

        $authorService = new AuthorService;
        $authors = $authorService->showAuthor($id);

        return response()->json([
            'book' => $book,
            'authors' => $authors,
            'genres' => $genres
        ]);
    }
}
