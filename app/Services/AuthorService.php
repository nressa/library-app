<?php

namespace App;

use DB;
use App\Book;
use Carbon\Carbon;

class AuthorService
{
    public function storeAuthor($bookId, $data)
    {
        for($i = 0; $i < count($data); $i++) {
            $book = Author::insert([
                'name' => $data[$i] ,  
                'fk_book' => $bookId, 
                'deleted' => 0,
                'created_at' => Carbon::now(), 
                'updated_at' =>Carbon::now()
            ]);
        }

        return $data;
    }        
}
