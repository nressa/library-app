<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'books';

    protected $fillable = [     'title', 
                                'date_published', 
                                'fk_user', 
                                'description', 
                                'deleted', 
                                'created_at', 
                                'updated_at'
                        ];

    public function bookToGenres()
    {
        return $this->hasMany('App\BookGenre', 'fk_book', 'id');

    }

    public function author()
    {
        return $this->hasMany('App\Author', 'fk_book', 'id');

    }
}
