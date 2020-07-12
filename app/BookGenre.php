<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookGenre extends Model
{
    protected $table = 'book_genres';

    protected $fillable = [     'fk_book', 
                                'fk_genre', 
                                'deleted', 
                                'created_at', 
                                'updated_at'
                        ];

    public function book()
    {
        return $this->belongsTo('App\Book');
    }

    public function genre()
    {
        return $this->hasOne('App\Genre', 'id', 'fk_genre');
    }
}
