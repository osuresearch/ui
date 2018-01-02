# Change Log
Current unresolved issues can be found and reported on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+)


## 3.0.0 (2018-??-??)
Upgrade to ES6 for Javascript components

This upgrade requires changes to the `gulpfile.js` in ES5 applications (any application doing an upgrade from oris/ui 2.0 to 3.0). See the [migration guide on the OR Wiki](https://orwiki.osu.edu/xwiki/wiki/oris/view/Development/Guides/Migrations/UI%202.0%20to%203.0/)

__Backwards Breaking Changes:__
* Rewrite of Javascript components to ES6
* `navbar-nav` will now be hidden on displays `<= sm` with the expectation that a `tabbar` will be visible for navigation.

__Fixed Bugs:__
* Fixed responsive navbar rules for when a `form-inline` is adjacent to a `profile`
* Fixed alignment of icons for inputs included in a navbar's `form-inline`
* Fixed outline buttons looking too similar to disabled buttons
* Fixed `header.is-sticky` not supporting variable height headers (e.g. when extra message banners are visible)

__Implemented Enhancements:__
* Added `src/dist/ui.es5.js` full backwards compatible build for ES5 applications
* Added new `application-alert` component for displaying important server-wide notice banners on applications
* Added new `profile` component
* Added `Util` function group, and a general purpose `Util.debounce` function for frequent event handlers


## 2.0.0 (2017-10-25)
Upgrade for Bootstrap 4 Beta.2

There are a handful of breaking changes between BS4 Alpha to BS4 Beta. Be sure to thoroughly read the two ship lists:
* [Bootstrap 4 Beta 1 Ship List](https://github.com/twbs/bootstrap/issues/21568)
* [Bootstrap 4 Beta 2 Ship List](https://github.com/twbs/bootstrap/issues/23278)

The following changelog only applies to ORIS components or adjustments made on top of Bootstrap 4.

__Backwards Breaking Changes:__
* Replaced `$.Lookup` with a new 2.0. See the Styleguide for new usage documentation.
* Now requires jQuery 3+
* Removed `tether.js` vendor library
* `.is-error`/`.error` form validation classes removed. Now uses BS4's validation structure (see official docs)
* Replaced `.navbar-thick` with `.navbar-main` to better consolidate a number of required classes into one
* `.navbar-expand` has been merged directly into `.navbar` so all navbars are horizontal flex by default
* Removed `.z-depth-*` classes
* Removed `@mixin vertical-align`
* Complete rewrite of the OSU Brand Header. See Styleguide for new DOM structure.

__Fixed Bugs:__
* Fixed icons not displaying for mobile in the OSU Brand Header
* Fixed default render theme for components when a developer forgets to add a theme class

__Implemented Enhancements:__
* Added new `tabbar` component
* Added new `uploader` component
* Added new `richtext` component
* Added extended color palette for SASS
* No longer using an absolutely positioned/absolute height footer
* Added `.is-horizontal-scroll` for the body element to make a horizontally scrollable body with fixed headers


## 1.1.0 (2017-10-25)
Upgrade for Bootstrap 4 alpha.6

__Backwards Breaking Changes:__
* All layout components (`.nav`, `.row`, etc) are now 100% based on [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* `.nav-stacked` changed to `flex-column`
* `.container` changed to `.wrapper` for the OSU Navbar component
* `col-xs` breakpoints have been removed. Use `col-` for default non-responsive layout behavior. Example: `col-xs-12` is now just `col-12`

__Fixed Bugs:__
* Fixed color contrast between enabled and disabled dates in the Datepicker component
* Fixed brand font-face not being applied to control elements
* Fix margin for custom control groups

__Implemented Enhancements:__
* All Javascript has been refactored to follow the [AirBNB ES5 styleguide](https://github.com/airbnb/javascript/tree/es5-deprecated)
* Lookup component has been implemented with real AJAX requests
* Prefix `.input-group-addon` icons are now embedded within adjacent inputs (previously was presented as a button)
* Simplified `.table` display
* Changed sm breakpoint to 500px to force col-sm-* support for Chrome 57+ printing


## 1.0.0 (2017-02-07)
Initial stable release based on Bootstrap 4 alpha.4
