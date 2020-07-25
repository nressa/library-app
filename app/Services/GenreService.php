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

            $book = BookGenre::where('fk_genre', $data[$i])
                            ->where('fk_book', $bookId)
                            ->first();

            if(!$book) {

                $book = BookGenre::insert(
                    [   'fk_genre' => $data[$i] ,
                        'fk_book' => $bookId,
                        'created_at' => Carbon::now(),
                        'deleted' => 0, 
                        'updated_at' =>Carbon::now()
                    ]);
            }

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
}
