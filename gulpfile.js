
'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'), // Forces errors to bubble up in gulp tasks
    concat = require('gulp-concat'), // Concat utility
    rename = require('gulp-rename'), // Rename utility
    sourcemaps = require('gulp-sourcemaps'), // Sourcemap generator
    sass = require('gulp-sass'), // SASS compiler
    autoprefixer = require('gulp-autoprefixer'), // CSS prefix fixer
    uglify = require('gulp-uglify'), // Minifier for Javascript files
    jshint = require('gulp-jshint'), // Linting for Javascript files
    phplint = require('gulp-phplint'), // Linting for PHP files
    phpcs = require('gulp-phpcs'), // Style/security testing for PHP files
    eslint = require('gulp-eslint'); // Linting for Javascript files

var JS_LINT_PATHS = [
    'src/js/**/*.js',
    '!src/js/vendor/**/*.js' // Ignore vendor JS
];

var SCSS_LINT_PATHS = [
    'src/scss/**/*.scss', // Include our own custom SCSS
    '!src/scss/vendor/**/*' // Ignore vendor SCSS
];

var PHP_LINT_PATHS = [
    'src/php/**/*.php'
];

// Autoprefixer compatibility settings.
// We copy exactly what Bootstrap 4 (alpha-4) uses
var CSS_COMPATIBILITY = [
    //
    // Official browser support policy:
    // http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
    //
    'Chrome >= 35', // Exact version number here is kinda arbitrary
    // Rather than using Autoprefixer's native "Firefox ESR" version specifier string,
    // we deliberately hardcode the number. This is to avoid unwittingly severely breaking the previous ESR in the event that:
    // (a) we happen to ship a new Bootstrap release soon after the release of a new ESR,
    //     such that folks haven't yet had a reasonable amount of time to upgrade; and
    // (b) the new ESR has unprefixed CSS properties/values whose absence would severely break webpages
    //     (e.g. `box-sizing`, as opposed to `background: linear-gradient(...)`).
    //     Since they've been unprefixed, Autoprefixer will stop prefixing them,
    //     thus causing them to not work in the previous ESR (where the prefixes were required).
    'Firefox >= 31', // Current Firefox Extended Support Release (ESR)
    // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
    // NOT the Edge app version shown in Edge's "About" screen.
    // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
    // See also https://github.com/Fyrd/caniuse/issues/1928
    'Edge >= 12',
    'Explorer >= 9',
    // Out of leniency, we prefix these 1 version further back than the official policy.
    'iOS >= 8',
    'Safari >= 8',
    // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
    'Android 2.3',
    'Android >= 4',
    'Opera >= 12'
];

/**
 * Gulp task to build SCSS into app.css
 *
 * SCSS files are read from scss/* and compiled into
 * a single css/app.css.
 */
gulp.task('sass:build', function() {
    return gulp.src('src/scss/ui.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: CSS_COMPATIBILITY
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .on('finish', function() {
            // Lint SCSS after building (but let the build finish)
            // Here, we use Bootstrap 4's style linter
            // gulp.src(SCSS_LINT_PATHS).pipe(scssLint({
            //     config: 'scss-lint.yml'
            // }));
        });
});

/**
 * Gulp task to lint non-vendor javascript files
 */
gulp.task('js:lint', function() {
    return gulp.src(JS_LINT_PATHS)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

/**
 * Gulp task to lint and concat JS files into ui.js
 *
 * JS files are read from js/** and mixed together into a
 * single ui.js in the js folder. If the linting process fails,
 * this will not perform concatenation.
 */
gulp.task('js:quickbuild', ['js:lint'], function() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('ui.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

/**
 * Gulp task to minify ui.js into ui.min.js after js:quickbuild
 */
gulp.task('js:build', ['js:lint'], function() {
    // defined separate from JS_LINT_PATHS so that
    // we can compile vendor JS that we don't lint
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('ui.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

/**
 * Gulp task to lint non-vendor PHP files
 */
gulp.task('php:lint', function() {

    // PHPCS uses a .bat for windows, no extension for *nix
    var isWin = /^win/.test(process.platform);

    return gulp.src([
            PHP_LINT_PATHS, // library scripts
        ])
        .pipe(phplint('', { // Check for basic PHP syntax errors
            skipPassedFiles: true // Don't report syntax error free files
        }))
        .pipe(phplint.reporter('fail'))
        .pipe(phpcs({
            // Composer installed PHP_Codesniffer tool
            bin: 'vendor/squizlabs/php_codesniffer/scripts/phpcs' + (isWin ? '.bat' : ''),
            standard: 'PSR2', // TODO: oris/coding-standards
            warningSeverity: 0,
            colors: true
        }))
        .pipe(phpcs.reporter('log'));
});

/**
 * Gulp task to run other tasks when certain files are changed.
 *
 * Executed via `gulp watch`
 */
gulp.task('watch', function() {
    gulp.watch(SCSS_LINT_PATHS, ['sass:build']);
    gulp.watch(JS_LINT_PATHS, ['js:quickbuild']);
    gulp.watch(PHP_LINT_PATHS, ['php:lint']);
});

/**
 * Default gulp task to run a full build of the project.
 */
gulp.task('default', ['sass:build', 'js:build']);
