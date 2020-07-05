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
                                'created_at', 
                                'updated_at'
                        ];
}
