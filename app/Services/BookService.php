<?php

namespace App;

use DB;
use App\Book;
use Carbon\Carbon;

class BookService
{
    public function storeBook($data)
    {
        $book =  Book::where('title', '=' , $data->title)
                    ->where('fk_user', '=' , $data->userId)
                    ->count();

            if($book == 0){
                $newBook = new Book;

                $newBook->title = $data->title;
                $newBook->fk_user = $data->userId;
                $newBook->description = $data->description;
                $newBook->date_published = $data->date_published;
                $newBook->deleted = 0;
                $newBook->created_at = Carbon::now();
                $newBook->updated_at = Carbon::now();
                $newBook->save();

                $newBookId = $newBook->id;
                return $newBookId;

            }

        return response()->json(false);
    }        
}
