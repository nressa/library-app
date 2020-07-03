<?php

namespace App;

use DB;
use App\Genre;
use Carbon\Carbon;

class GenreService
{
    public function list()
    {
        return Genre::get();
    }        
}
