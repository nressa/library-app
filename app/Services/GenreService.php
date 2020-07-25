<?php

namespace App;

use DB;
use App\Genre;
use App\BookGenre;
use App\Book;
use Carbon\Carbon;

class GenreService
{
    public function list()
    {
        return Genre::get();
    }      
    
    public function storeBookToGenre($bookId, $data)
    {
        for($i = 0; $i < count($data); $i++) {
            $book = BookGenre::insert([
                'fk_genre' => $data[$i] ,  
                'fk_book' => $bookId, 
                'deleted' => 0,
                'created_at' => Carbon::now(), 
                'updated_at' =>Carbon::now()
            ]);
        }

        return $data;
    }   

    public function showBookToGenre($id)
    {
         $fkGenre = Book::find($id)->bookToGenres()->get();
         $genres = [];

        foreach ($fkGenre as $genre) {
            $genres[] = Genre::where('id',$genre->fk_genre)->get();
        }

        return $genres;
    }  

    public function addGenreToBook($data)
    {

        $genre = BookGenre::insert([
            'fk_genre' => $data->genreId ,  
            'fk_book' => $data->bookId, 
            'deleted' => 0,
            'created_at' => Carbon::now(), 
            'updated_at' =>Carbon::now()
        ]); 

        $book = Book::find($data->bookId);
        $book->updated_at = Carbon::now();
        $book->save();
    }
}
