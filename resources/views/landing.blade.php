@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h1 class="text-center pt-5 font-weight-bold">E-library</h1>
            <p class="text-center">Your online library!</p>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">Keep Track of your books</div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">Leave Comments and share to others</div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">Record your reading achievement</div>
            </div>
        </div>
    </div>
</div>
@endsection
