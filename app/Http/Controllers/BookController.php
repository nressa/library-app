<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {

        return view('member.books.index');
    }

    public function create()
    {
        return view('member.books.create');
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {

        return view('member.books.show');
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
