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

            $bookGenre = BookGenre::where('fk_genre', $data[$i])
                            ->where('fk_book', $bookId)
                            ->first();

            if(!$bookGenre) {

                $book = BookGenre::insert(
                    [   'fk_genre' => $data[$i] ,
                        'fk_book' => $bookId,
                        'created_at' => Carbon::now(),
                        'deleted' => 0, 
                        'updated_at' =>Carbon::now()
                    ]);
            } else {
                

                $bookGenre = BookGenre::find($bookGenre->id);
                $bookGenre->deleted = 0;
                $bookGenre->updated_at = Carbon::now();
                $bookGenre->save();
            }

        }

        return $data;
    }   

    public function showBookToGenre($id)
    {
         $fkGenre = Book::find($id)->bookToGenres()->where('deleted',0)->get();
         $genres = [];

        foreach ($fkGenre as $genre) {
            $genres[] = Genre::where('id',$genre->fk_genre)->get();
        }

        return $genres;
    }

    public function deletedBookToGenre($data)
    {

        $bookGenre = BookGenre::where('fk_genre', $data->id)
                            ->where('fk_book', $data->bookId)
                            ->update(['deleted' => 1, 'updated_at' => Carbon::now()]);
        
                            return true;
    }
}
