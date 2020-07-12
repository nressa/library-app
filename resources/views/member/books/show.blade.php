@extends('layouts.app')

@section('content')

<show-book-component user-id="{!! Auth::id() !!}" user-email="{!! Auth::user()->email !!}">
</show-book-component>

@endsection

@section('scripts')  
<script src="{{ asset('asset/js/members/show-book.js') }}"></script>
@endsection
