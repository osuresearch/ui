# Change Log
Current unresolved issues can be found and reported on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+)

Versions follow [Semantic Versioning](https://semver.org/) guidelines - given a version number MAJOR.MINOR.PATCH:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards-compatible manner, and
3. PATCH version when you make backwards-compatible bug fixes.


# 3.1.0 (2018-02-06)

__Backwards Breaking Changes:__
* Lookup: Changed `store` option to `key` to better reflect its purpose
* Lookup: Will no longer move the `name` attribute from the Lookup input to the hidden "key" input. This changes how data is POSTed alongside forms, as you will no longer get the hidden key value but instead the original display text of the input for the named field. Key value will now be stored and submitted via an input named the same as the original lookup input, but with the suffix `-key`.

__Bug Fixes:__
* Fixed Lookup incorrectly forcing focus to the input when `set()` or `clear()` methods are called via Javascript
* Fixed margins for checks/radios inside a `.form-check-inline` group

__Implemented Enhancements:__
* Lookup: Now supports using a pre-populated "key" input on initial DOM load. The input MUST be a sibling to the lookup input and named the same plus the suffix `-key`. E.g. for `<input data-provide="lookup" name="foo" ...>` there would be an `<input name="foo-key" ...>` sibling. If one could not be found, a hidden input will be created automatically that meets the requirements.


# 3.0.1 (2018-02-01)
There's Always Something Edition

__Bug Fixes:__
* Fixed class names for Emulate component DOM template (changed for BS4 Release)
* Fixed checkboxes for Feedback component DOM template (changed for BS4 Release)
* Fixed Lookup setting a `display: block` on the clear button - causing adjacent buttons to be misaligned


## 3.0.0 (2018-01-23)
Upgrade to Bootstrap 4.0.0 Release and to ES6 for Javascript components

This upgrade requires changes to the `gulpfile.js` in ES5 applications (any application doing an upgrade from oris/ui 2.0 to 3.0),
changes to the version of Bootstrap included from Assets, and contains a number of backwards breaking changes
between Bootstrap 4 Beta 2 and Release.

See the [migration guide on the OR Wiki](https://orwiki.osu.edu/xwiki/wiki/oris/view/Development/Guides/Migrations/UI%202.0%20to%203.0/)

__Backwards Breaking Changes:__
* Upgrade to Bootstrap 4.0.0 Release
* Rewrite of Javascript components to ES6
* Rename `scss` directory to `sass` to be consistent with the applications
* `navbar-nav` will now be hidden on displays `<= sm` with the expectation that a `tabbar` will be visible for navigation.
* Removed unused Bootstrap 3 + Symfony Forms templates

__Fixed Bugs:__
* Fixed responsive navbar rules for when a `form-inline` is adjacent to a `profile`
* Fixed alignment of icons for inputs included in a navbar's `form-inline`
* Fixed outline buttons looking too similar to disabled buttons
* Fixed `header.is-sticky` not supporting variable height headers (e.g. when extra message banners are visible)
* Fixed cursor to be a pointer for default button styles
* Fixed z-indexes for custom components going higher than Bootstrap components (e.g. navbar being rendered over modals)

__Implemented Enhancements:__
* Added `src/dist/ui.es5.js` full backwards compatible build for ES5 applications
* Added new `ApplicationAlert` component for displaying important server-wide notice banners on applications
* Added new `Profile` component and DOM template (src/twig/profile.html)
* Added new `Support` component and DOM template (src/twig/support.html)
* Added new `Emulate` component and DOM template (src/twig/emulate.html)
* Added `Util` function group, and a general purpose `Util.debounce` function for frequent event handlers
* Lookup: Added `set(display, store)` method
* Lookup: Added getters `displayValue` and `storeValue`


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
