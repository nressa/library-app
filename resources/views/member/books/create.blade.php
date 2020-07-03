@extends('layouts.app')

@section('content')
<create-book-component></create-book-component>
@endsection

@section('scripts')
<script src="{{ asset('asset/js/members/book.js') }}"></script>
@endsection
