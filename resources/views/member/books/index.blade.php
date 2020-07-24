@extends('layouts.app')

@section('content')

<list-book-component user-id="{!! Auth::id() !!}" user-email="{!! Auth::user()->email !!}">
</list-book-component>

@endsection

@section('scripts')  
<script src="{{ asset('asset/js/members/list-book.js') }}"></script>
@endsection
