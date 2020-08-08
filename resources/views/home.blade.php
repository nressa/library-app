@extends('layouts.app')

@section('content')

{{ Breadcrumbs::render('home') }}

<home-component></home-component>
@endsection

@section('scripts')
<script src="{{ asset('js/home-component.js') }}"></script>
@endsection
