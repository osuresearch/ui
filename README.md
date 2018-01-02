# ORIS UI Package

Frontend UI components built on [Bootstrap 4 Beta](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for use in PHP applications. Includes:
* SASS build with utilities for advanced usage
* Compiled `dist/css/ui.css` and `dist/js/ui.es5.js` scripts
* Common frontend components, including lookups, date pickers, and multi-file uploaders

Current unresolved issues can be found and reported on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+)

The [Styleguide app on the dev server](https://orwebdev02.rf.ohio-state.edu/styleguide) contains usage references and demos for this framework.

## Requirements
* PHP 5.6+
* Composer
* NodeJS/NPM If you're not using the compiled ui.css and ui.es5.js

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
        "oris/ui": "^3.0"
    },
    ... etc ...
}
```

### Including SASS/CSS
If your project's stylesheets are built using SASS (i.e. you have a `/sass/index.scss` in your project), add the following import:
```
@import "../vendor/oris/ui/src/sass/ui.scss";
```

If not, copy `vendor/ui/dist/css/ui.css` to your project's `css` folder, or reference it directly.

**Important** - Do make sure you are cache busting the included CSS file. Otherwise future updates will potentially break display for clients.

### Including Javascript
An ES5-compatible build is made every release and found in `vendor/ui/dist/js/ui.es5.js`. You may either concatenate that into your application's Javascript or include it separately.

If your application is in ES6, you can import `src/js/ui.js` into your bundle. An basic example of how this works is available in the `oris/template` project.

Just like with the CSS, ensure you are cache busting your Javascript files to ensure clients always have the correct version.

## Testing

TBD

## Contributing

Check out open issues on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+) and create merge requests for implementations.

