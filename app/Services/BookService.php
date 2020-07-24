<?php

namespace App;

use DB;
use App\Book;
use App\Genre;
use App\Author;
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

    public function showBook($id)
    {
        $book = Book::where('id', $id)->where('deleted',0);
        return $book;
    }   

    public function list()
    {

        $books = Book::where('deleted',0);
        return $books;
    }  

    public function remove($bookId)
    {

        $book = Book::find($bookId);
        $book->name = 'New book Name';
        $book->save();

        return $book;
    }
}
