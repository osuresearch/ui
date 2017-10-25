# ORIS UI Package

Frontend UI components built on [Bootstrap 4 Beta](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for use in PHP applications. Includes:
* SASS build with utilities for advanced usage
* Compiled `ui.css` and `ui.js` scripts
* Common frontend components, including lookups, date pickers, and multi-file uploaders

Current unresolved issues can be found and reported on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+)

The [Styleguide app on the dev server](https://orwebdev02.rf.ohio-state.edu/styleguide) contains usage references and demos for this framework.

## Requirements
* PHP 5.6+
* Composer
* NodeJS/NPM If you're not using the compiled ui.css and ui.js

### CSS Support
The gulp build process uses the following compatibility table for autoprefixing CSS:
```
Chrome >= 35
Firefox >= 31
Edge >= 12
Explorer >= 9
iOS >= 8
Safari >= 8
Android 2.3
Android >= 4
Opera >= 12
```

As per University policy, official support for IE is **IE11 only**.

## Installation
This library is installable via Composer through `composer.json`, as long as you add UCR as a GitLab repository source:

```
{
    "repositories": [
        {
            "type": "gitlab",
            "url":  "git@code.osu.edu:ORIS/ui.git"
        }
    ],
    "config": {
        "gitlab-domains": [
            "code.osu.edu"
        ]
    },
    "require": {
        "oris/ui": "@dev"
    },
    ... etc ...
}
```

Chase will eventually update the ORIS Satis service to make this slightly easier to configure. :)

### Including SASS/CSS
If your project's stylesheets are built using SASS (i.e. you have a `/sass/app.scss` in your project), add the following import:
```
@import "../vendor/oris/ui/src/scss/ui.scss";
```

If not, copy `vendor/ui/dist/css/ui.css` to your project's `css` folder, or reference it directly.

**Important** - Do make sure you are cache busting the included CSS file. Otherwise future updates will potentially break display for clients.

### Including Javascript
Similar to SASS, you can directly include the source Javascript into your build process, just ensure that it compiles all files in `vendor/oris/ui/src/js/**/*.js`.

**Important to note** - The source files may, at some point, migrate to ES6/ES2015. The build process to create `ui.js` and `ui.min.js` will **always** transpile the source to ES5, but if you are to include sources directly you will need to do it manually.

Alternatively (the easy route), you can copy to your `js/vendor` directory (or reference directly) the compiled `vendor/oris/ui/dist/js/ui.js` or the `vendor/oris/ui/dist/js/ui.min.js` optimized for production.

If you have a gulp process that compiles `app.js`, you can add `ui.js` to it's build path, e.g.:
```
gulp.src(['src/js/**/*.js', 'vendor/oris/ui/dist/js/ui.js'])
    .pipe(sourcemaps.init())
    .pipe(... whatever else ...)
    ... etc
```

Just like with the CSS, ensure you are cache busting your Javascript files to ensure clients always have the correct version.

## Testing

TBD

## Contributing

Check out open issues on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+) and create merge requests for implementations.

