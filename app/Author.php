<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $table = 'authors';

    protected $fillable = [     'name', 
                                'deleted', 
                                'fk_book', 
                                'created_at', 
                                'updated_at'
                        ];

    return $this->hasOne('App\Book', 'fk_book');
}
