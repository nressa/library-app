const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.scripts(
    [
        'public/js/vue.js',
        'public/js/vuex.js',
        'resources/js/services/genre-mixin.js',
        'resources/js/storage/genre.js',
        'resources/js/pages/members/create-book-component.js',
        'resources/js/pages/book-vue-instance.js',
    ],
    'public/asset/js/members/book.js')