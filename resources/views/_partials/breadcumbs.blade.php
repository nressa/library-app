@foreach ($breadcrumbs as $breadcrumb)
    <a href="{{ $breadcrumb->url }}">{{ $breadcrumb->title }}</a>
@endforeach