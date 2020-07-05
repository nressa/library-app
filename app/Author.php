<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $table = 'authors';

    protected $fillable = [     'name', 
                                'deleted', 
                                'created_at', 
                                'updated_at'
                        ];
}
