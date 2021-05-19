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

require('laravel-mix-polyfill');

mix.js('src/js/app.js', 'dist/js').sass('src/sass/app.scss', 'dist/css').polyfill({
	enabled: true,
	useBuiltIns: 'usage',
	targets: 'firefox 50, IE 11'
});
