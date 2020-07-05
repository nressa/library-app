<?php

namespace App;

use DB;
use App\Genre;
use App\BookGenre;
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
}
