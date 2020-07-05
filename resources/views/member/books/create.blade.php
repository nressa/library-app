@extends('layouts.app')

@section('content')

<create-book-component user-id="{!! Auth::id() !!}" user-email="{!! Auth::user()->email !!}">
</create-book-component>

@endsection

@section('scripts')  
<script src="{{ asset('asset/js/members/book.js') }}"></script>
@endsection
