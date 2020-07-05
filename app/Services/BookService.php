<?php

namespace App;

use DB;
use App\Book;
use Carbon\Carbon;

class BookService
{
    public function storeRecord($data)
    {
        $book = "asd";
        $book = Book::insert([
                'title'       => $data->title,
                'description'   => $data->description,
                'date_published'   => $data->date_published,
                'fk_user'   => $data->userId,
        ]);

        return response()->json($data);
    }        
}
