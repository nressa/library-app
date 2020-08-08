@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-5">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Books</h3>
                        </div>
                        <div class="col-md-6">
                            <a href="{{ route('create_book_page') }}" class="card">
                                <div class="card-body">
                                    <center>
                                        <img src="{{ asset('images/icons/create.png') }}" class="box-icon" alt="{{ asset('images/icons/book.png') }}">
                                        <hr/>
                                        <h5>Create</h5>
                                    </center>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="{{ route('books') }}" class="card">
                                <div class="card-body">
                                    <center>
                                        <img src="{{ asset('images/icons/book.png') }}" class="box-icon" alt="{{ asset('images/icons/book.png') }}">
                                        <hr/>
                                        <h5>List</h5>
                                    </center>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
