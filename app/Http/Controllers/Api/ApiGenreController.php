<?php

namespace App\Http\Controllers;

use Auth;
use App\GenreService;
use Illuminate\Http\Request;

class ApiGenreController extends Controller
{
    
    public function index()
    {
        $genreService = new GenreService();
        $genres = $genreService->list();

        return $genres;
    }
}
