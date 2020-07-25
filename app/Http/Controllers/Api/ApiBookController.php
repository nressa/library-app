<?php

namespace App\Http\Controllers;

use Auth;
use Exception;
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
        $books = $books->paginate(5);   

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
            
            $arrGenre = explode(',', $request->selected_genres);
            $genres = $genreService->storeBookToGenre($bookId, $arrGenre);

            return $bookId;
        }

        return $bookId;
    }
    
    public function show($id)
    {
        
        $bookService = new BookService;
        $book = $bookService->showBook($id)->first();   
        
        $genreService = new GenreService;
        $genres = $genreService->showBookToGenre($id);

        if($book){
            return response()->json([
                'book' => $book,
                'genres' => $genres
            ]);            
        }

        return abort(404);
    }

    public function addGenre(Request $request)
    {
        
        $bookService = new BookService;
        $book = $bookService->showBook($request->bookId)->first(); 

        if($book->fk_user == $request->userId){

            $genreService = new GenreService;
            $genres = $genreService->storeBookToGenre($request->bookId, $request->selected_genres);

            return response(['success' => true], 200);

        }

        return response(['success' => false], 403);
    }

    public function delete($id)
    {

        $bookService = new BookService;
        $result = $bookService->remove($id);

        return response(['success: ' => true], 200);
    }

    public function removeGenre(Request $request)
    {
        $genreService = new GenreService;
        $result = $genreService->deletedBookToGenre($request);

        if($result){
            return response(['success' => true], 200);     
        }
        return response(['success' => false], 500);  
    }
}
