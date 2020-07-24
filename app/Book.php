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

    public function authors()
    {
        return $this->hasMany('App\Author');
    }

}
