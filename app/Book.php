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

    protected $appends = [
                            'authors',
                            'date_created'
                        ];

    public function bookToGenres()
    {
        return $this->hasMany('App\BookGenre', 'fk_book', 'id');

    }

    public function author()
    {
        return $this->hasMany('App\Author', 'fk_book', 'id');

    }

    public function getAuthorsAttribute()
    {

        return $author = Author::where('fk_book' , $this->id)
                                ->where('deleted', 0)
                                ->select('name')
                                ->get();
    }

    public function getDateCreatedAttribute()
    {

        return $this->created_at->format('M. d, Y h:i a');
    }
}
