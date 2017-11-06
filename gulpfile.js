
const gulp = require('gulp'),
      plumber = require('gulp-plumber'),            // Forces errors to bubble up in gulp tasks
      concat = require('gulp-concat'),              // Concat utility
      rename = require('gulp-rename'),              // Rename utility
      sourcemaps = require('gulp-sourcemaps'),      // Sourcemap generator
      sass = require('gulp-sass'),                  // SASS compiler
      sasslint = require('gulp-sass-lint'),         // Linting for SASS files
      autoprefixer = require('gulp-autoprefixer'),  // CSS prefix fixer
      uglify = require('gulp-uglify'),              // Minifier for Javascript files
      eslint = require('gulp-eslint'),              // Linting for Javascript files
      babel = require('rollup-plugin-babel'),       // Rollup's wrapper of Babel
      rollup = require('gulp-better-rollup');       // Yet Another Gulp Wrapper

/**
 * Supported browsers for CSS autoprefixing and JS polyfilling
 *
 * Version strings are in browserslist format.
 * See: https://github.com/ai/browserslist
 */
const BROWSER_COMPATIBILITY = [
    'Last 2 versions',
    'IE 11'
];

/**
 * Patterns to lint for SASS/SCSS/CSS files
 */
const SASS_LINT_PATHS = [
    'src/scss/**/*.scss', // Include our own custom SCSS
    '!src/scss/vendor/**/*' // Ignore vendor SCSS
];

/**
 * Root file for compiling distributable bundle.css
 */
const SASS_BUILD_PATH = 'src/scss/ui.scss';

/**
 * Output filename for CSS bundling. Map file will also
 * be the same filename but with .map appended.
 */
const CSS_BUNDLE_PATH = 'dist/css/ui.css';

/**
 * Location of our SASS linting config
 * We use the oris/coding-standards vendor copy so that it
 * remains updated when our coding standards are updated
 */
const SASS_LINT_CONFIG = 'vendor/oris/coding-standards/.sass-lint.yaml';

/**
 * Patterns to lint with ESLint
 */
const JS_LINT_PATHS = [
    'src/js/**/*.js',
    '!src/js/vendor/**/*.js' // Ignore vendor JS
];

/**
 * Location of our JS linting config
 * We use the oris/coding-standards vendor copy so that it
 * remains updated when our coding standards are updated
 */
const JS_LINT_CONFIG = 'vendor/oris/coding-standards/.eslintrc.yaml';

/**
 * Root file for compiling JS_BUNDLE_PATH
 */
const JS_BUILD_PATH = 'src/js/ui.js';

/**
 * Output filename for JS bundling. Map file will also
 * be the same filename but with .map appended.
 */
const JS_BUNDLE_PATH = 'dist/js/ui.es5.js';

/**
 * Search paths for intelligent `import` statements.
 *
 * Note that the oris/ui package isn't in the search
 * path, but is specified as the path alias `oris-ui`
 */
const JS_MODULES_SEARCH_PATHS = [
    'src/js'
];

/**
 * Gulp task to lint non-vendor SASS files
 */
gulp.task('sass:lint', function () {
    return gulp.src(SASS_LINT_PATHS)
        .pipe(sasslint({
            configFile: SASS_LINT_CONFIG
        }))
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
});

/**
 * Gulp task to build SASS into app.css
 *
 * SASS files are read from sass/* and compiled into
 * a single css/app.css.
 */
gulp.task('sass:build', () => {
    let paths = CSS_BUNDLE_PATH.split('/');
    let filename = paths.pop();
    let directory = paths.join('/');

    return gulp.src(SASS_BUILD_PATH)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: BROWSER_COMPATIBILITY
        }))
        .pipe(rename(filename))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(directory));
});

/**
 * Configuration for a gulp pipe that performs ES6 transpiling
 * into code that works in our supported browsers
 */
function transpile() {
    return rollup({
        plugins: [babel({
            presets: [['env', {
                targets: {
                    browsers: BROWSER_COMPATIBILITY
                },
                modules: false
            }]],
            plugins: [
                // Remove duplication of ES5 polyfills
                'external-helpers',
                // Simplify module loading
                ['module-resolver', {
                    root: JS_MODULES_SEARCH_PATHS,
                    alias: {
                        'node_modules': './node_modules',
                        'oris/ui': './src/js',
                    }
                }]
            ]
        })]
    }, 'umd');
}

/**
 * Gulp task to lint non-vendor Javascript files
 */
gulp.task('js:lint', () => {
    return gulp.src(JS_LINT_PATHS)
        .pipe(eslint({
            configFile: JS_LINT_CONFIG
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

/**
 * Gulp task to transpile ES6 source files in JS_BUILD_PATH
 * into a deployable file specified by JS_BUNDLE_PATH
 */
gulp.task('js:build', () => {
    let paths = JS_BUNDLE_PATH.split('/');
    let filename = paths.pop();
    let directory = paths.join('/');

    return gulp.src(JS_BUILD_PATH)
        .pipe(sourcemaps.init())
        .pipe(transpile())
        .pipe(uglify({
            // Disable name manging, otherwise calls like
            // `Object.constructor.name` will fail
            mangle: false,
            keep_fnames: true
            // preserveComments: 'license'
        }))
        .pipe(rename(filename))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(directory));
});

/**
 * Gulp task to run other tasks when certain files are changed.
 *
 * Executed via `gulp watch`
 */
gulp.task('watch', () => {
    // Linters
    gulp.watch(SASS_LINT_PATHS, ['sass:lint']);
    gulp.watch(JS_LINT_PATHS, ['js:lint']);

    // Builders
    gulp.watch(SASS_LINT_PATHS, ['sass:build']);
    gulp.watch(JS_LINT_PATHS, ['js:build']);
});

/**
 * Gulp task to run all build subtasks.
 *
 * Executed via `gulp build`
 */
gulp.task('build', ['sass:build', 'js:build']);

/**
 * Gulp task to run all linting subtasks.
 *
 * Executed via `gulp lint`
 */
gulp.task('lint', ['js:lint', 'sass:lint']);

/**
 * Default gulp task to run all lints/builds/tests on the project.
 *
 * Ran prior to a production release, or whenever you want to do a full build cycle.
 */
gulp.task('default', [
    'lint',
    'build'
]);
