# Change Log
Current unresolved issues can be found and reported on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project:%20%7BFrameworks%20and%20Packages%7D%20UI%20%23Unresolved%20)

Versions follow [Semantic Versioning](https://semver.org/) guidelines - given a version number MAJOR.MINOR.PATCH:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards-compatible manner, and
3. PATCH version when you make backwards-compatible bug fixes.

# 4.3.0

__New Features:__

* Integration of the [PrimeReact UI Library](https://www.primefaces.org/primereact/), with support for its `DataTable`, `TreeTable`, and `Accordion` components (support for additional PrimeReact components forthcoming)
* New `Alert` component based on [Bootstrap Alerts](https://getbootstrap.com/docs/4.0/components/alerts/)
* New `Chips` form component based on the PrimeReact component of the same name
* New `Dropdown` form component based on the PrimeReact component of the same name
* New `MenuButton` component based on [Bootstrap Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)
* New `MultiSelect` form component based on the PrimeReact component of the same name
* Navigation improvements to styleguide by categorizing components

__Internal changes:__

* The base styleguide page no longer loads all of the components in the styleguide
* Added the ability to override the component path line; if `componentPathLine` is set in a component, it will override the default (i.e. `import { Component } from '@oris/ui'`)
* Improved the method of wrapping component names in brackets
* Moved component files into category folders within the components folder
* Removed (now) redundant HTML docs


# 4.2.5 (2020-12-29)

__New Features:__
* Adds support for installation through UCR's package repository


# 4.2.4 (2020-11-07)

__Accessibility Fixes:__
* Resolves color-contrast issues with link text (FWK-250) and theme colors (FWK-237)

# 4.2.3 (2020-10-25)

This version adds additional documentation for form components.

__Bug Fixes:__
* The `name` property of form field components inside of a `FieldSet` is no longer overridden by the `name` property in the `FieldSet` bind
* An `onBlur` callback was added to `Text.Rich` for RHF compatability
* Improved error state styles for `Text.Rich`
* Error and Success subcomponents will display when the parent `.ui-form-element` also has `.is-invalid` or `.is-valid` class, respectively (resolves FWK-251)

# 4.2.2 (2020-10-12)

__Accessibility Fixes:__

* The common Label component included an `aria-label` that denoted required fields. This was removed in favor of adding an `aria-required` attribute to form inputs/controls - the more semantic solution
* `aria-live` was removed from the Error component, since `role="alert"` automatically makes the component an assertive live region. Additionally, a recommendation to perform validation on blur was added to the Form component documentation. Validating on blur will allow for the alerts to perform properly, per [this article recommended by Jen](https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible) and testing in macOS VoiceOver.
* Added the `aria-invalid` attribute to form inputs/controls to aid in error validation for users of assistive technologies.

__Bug Fixes:__

* Fixed a minor display bug for help text and success/error messages in Chrome

# 4.2.1 (2020-09-30)

__Bug Fixes:__

* Removed outdated form components from the distribution folder that were causing some form subcomponents to crash

__Internal Changes:__

* Build process will now delete the dist folder prior to build

# 4.2.0 (2020-09-29)

__Deprecated Components:__

Components marked as deprecated will be removed in a future release. They will continue to work until their removal.

* `Richtext` has been deprecated in favor of `Text.Rich` in the new Form Components

__Minor Breaking Changes:__

* `Button` - Changed the default theme to `primary` (previously was `secondary`)

__New Features:__

* Introduces new Form Components (`Form`, `FieldSet`, `Checkbox`, `Text`, etc) to abstract away the complexities of setting up accessible forms.
* `Richtext` - Added `id` prop
* `Button` - Added `type` prop (one of `'button' | 'reset' | 'submit'` - defaults to `button`).
* `Button` - Added `to` prop. When specified, the button renders as a React Router `<Link>` to the designated route

__Bug Fixes:__

* Changed defaults for `$vendor-fonts` and `$vendor-images` to not use a local server copy of `/assets` and instead point to the production copy at `orapps.osu.edu`
* Fixed text underlines on badges that were wrapped within anchors
* `Navbar` - Removed `exact` from Link elements to fix compatibility with newer React Router versions
* `Search` - Fixed bug where Search inputs without `defaultValue` focus on load

__Internal Changes:__

* Fixed Styleguidst mangling component names during styleguide builds - preventing deployments
* Added support for deploying a build of the styleguide to the dev server

# 4.1.1 (2020-05-20)

Rebuilt ES5 distribution files that were not correctly built for the 4.1.0 release.


# 4.1.0 (2020-05-18)

__Deprecated Components:__

Components marked as deprecated will be removed in a future release. They will continue to work until their removal.

* `Profile` - Now part of the [@oris/auth](https://code.osu.edu/ORIS/auth/) package.
* `Emulate` - Now part of the [@oris/auth](https://code.osu.edu/ORIS/auth/) package.

__Minor Breaking Changes:__

* `Button` - Removed `small` prop. Use `className="btn-sm"` instead.
* `Icon` - Removed the use of `children` prop for screen reader labeling. Use `label` prop instead.
* `ModalHeader` - Changed default of `hasCloseButton` prop to `true`. Previous usage that assumed the close button would be hidden

__New Features:__

* New `Richtext` component based on CKEditor 4
* New `TabList` and `TabItem` components for a responsive list of many tabs
* `Button` - Added optional `className` and `disabled` props
* `Icon` - Added optional `label` prop for screen reader labels

__UI Changes:__

* `ExternalLink` - Made the icon less obtrusive
* `Footer` - Replaced webmaster contact with Accessibility Coordinator. For technical support contact, use the `Support` component.


# 4.0.1 (2020-01-15)

__Bug Fixes:__

* Refactored package dependencies to no longer require specific builds of node-sass or react-scripts installed when installing @oris/ui through npm.
    * Minimum supported React versions are defined via `peerDependencies` to issue warnings during `npm install` if these are not met.

Note that with the above fix `react-dom` and `react-router-dom` will no longer be installed alongside @oris/ui. If your project was using an older version of @oris/ui, you will need to install these dependencies manually via:

```
npm install react-dom react-router-dom --save
```


# 4.0.0 (2019-11-18)

__New Styleguide and Interactive Examples System:__

Styleguide documentation has been integrated directly into the project via [React Styleguidist](https://react-styleguidist.js.org/). Simply `git checkout` a copy of oris/ui and do a `npm start` to start up a local interactive styleguide.

__Backwards Breaking Changes:__

* All non-React components have been removed or replaced with React-equivalents
    * This does not include every Bootstrap component. Use those as you typically would.
* Composer support has been removed. Now installable as a `npm` package
* Component imports must now come from the `@oris/ui` package
* `Lookup` component has been replaced by `Search` - with similar arguments and less jQuery
* `Modal` component now has additional wrapper DOM. Recommended to use new `ModalHeader` and `ModalBody` as the only children.
* Removed `AppLoader` component
* Removed `AppError` component
* Removed `ShibbolethMonitor` component - see [FWK-185](https://ordevsvc01.rf.ohio-state.edu/youtrack/issue/FWK-185) for a future replacement
* Removed `Util.debounce` function

__New Features:__

* New `ExternalLink` component to automatically handle accessibility and security standards for links out of an application.
* New `Icon` component to automatically handle accessibility standards for Font Awesome icons.
* New `Search` component to replace legacy `$.Lookup`
    * No longer jQuery-based
    * Has multiple new props for configuration
* New `Footer` component to display the standard brand footer
* New `OhioStateNavbar` component to encapsulate the required OSU brand navbar
* New `PersonSearchResult` renderer component for `Search` to standardize how person results look across applications.
* New `Button` component
* New `Badge` component
* New `ModalHeader` component
* New `ModalBody` component

__Accessibility Improvements:__

* Links now have an underline by default
* `Search` "Clear" button has been changed to an X that is now always persistent as long as there is text in the input.


# 3.3.1 (2019-10-10)

__Bug Fixes:__
* Multiple React components: Fixed `fetch` compatibility issues with Edge < 18


# 3.3.0 (2019-05-14)

__New Features:__
* Add new React components for common ORIS application features (Emulate, AppLoader, AppError, Lookup, Modal, Profile, Navbar, SystemAlert, ShibbolethMonitor)
* Add `i.required-asterisk` component style to render out the red asterisk used on required fields in any context that a designer wants (e.g. for individual checkbox labels or a form heading)

__Bug Fixes:__
* Lookup: Fix component not updating `$.Lookup` when `value, valueKey` props mutate
* DataTables: Fix _empty container class always inheriting underlying `.even, .odd` styles
* Fix extra margins added for adjacent inputs in a group

__UI Changes:__
* DataTables: Swapped what row is "darkened" for a `.stripe` table to improve the look of paginated tables with an even number of records per page
* Added Capita as an available font - with Times New Roman fallback
* Change `h1, h2` headings to scarlet Capita
* Add a slight additional margin between navbar links to reduce crowding
* Slightly adjust the grey of `.navbar` tabs to better support embedding into modals


# 3.2.1 (2018-03-13)

__Bug Fixes:__
* Emulate: Fixed incorrect property call to Lookup


# 3.2.0 (2018-03-13)

__New Features:__
* Uploader: Added user confirmation prior to sending a request to delete a file
* Uploader: Added `dataField` option (default: `filedata`) to support changing the target for `$_FILES`
* Uploader: Added the ability to specify per-file metadata (submitted to delete/download endpoints as `file-metadata`)

__Bug Fixes:__
* Removed specificity for `form-group.is-required` label star suffixes - fails for cases where labels are inside a BS4 rowset
* Fixed `.form-group` margins for the case when the `.form-group` is combined with a `.col-*` class (margins failed to collapse due to additional padding)
* Fixed edge case of incorrect margins for a `.form-group` that is defined as a `fieldset` (fieldsets do *not* allow margin collapse)
* Update gulp-sass dependency to `^3` due to 404 errors being thrown for the old `^2` branch's dependencies
* Component: Fixed a missing ifelse causing all function calls to be treated as property getters
* Uploader: Fixed static method call for item template DOM
* Uploader: Improved error handling and error states
* Uploader: Moved request body payload to query parameters for DELETE requests to support certain webservers ignoring the body of a DELETE request
* Uploader: Fixed event listeners handling events in the same call stack as the Uploader plugin
* Uploader: Fixed various edge cases causing `isEmpty` to incorrectly return false

__UI Changes:__
* Rounded badges to make them look less like buttons
* Changed DataTables pagination controls to look/behave like Bootstrap 4
* Removed some redundant (noisy) borders from tables/DataTables
* Defaulting DataTables to a non-paging simple table-only view. Additional features are to be turned on at developer’s discretion
* Uploader: Changed default file info to `Complete` for previously uploaded files without a custom `info` field

__Internal Changes:__
* Uploader: Defaulting `download` option to false
* Uploader: Cleaned up SASS


# 3.1.1 (2018-02-13)

__Bug Fixes__:
* Lookup: Fixed support for array notation in lookup input names. `name="foo[arr]"` will require a sibling input with `name="foo-key[arr]"`
* Lookup: Fixed incorrect variable reference for `keyValue` method


# 3.1.0 (2018-02-07)

__Backwards Breaking Changes:__
* Lookup: Changed `store` option to `key` to better reflect its purpose
* Lookup: Will no longer move the `name` attribute from the Lookup input to the hidden "key" input. This changes how data is POSTed alongside forms, as you will no longer get the hidden key value but instead the original display text of the input for the named field. Key value will now be stored and submitted via an input named the same as the original lookup input, but with the suffix `-key`.

__Bug Fixes:__
* Fixed Lookup incorrectly forcing focus to the input when `set()` or `clear()` methods are called via Javascript
* Fixed Lookup not automatically setting itself to <code>readonly</code> if prepopulated with a value
* Fixed margins for checks/radios inside a `.form-check-inline` group

__Implemented Enhancements:__
* Lookup: Now supports using a pre-populated "key" input on initial DOM load. The input MUST be a sibling to the lookup input and named the same plus the suffix `-key`. E.g. for `<input data-provide="lookup" name="foo" ...>` there would be an `<input name="foo-key" ...>` sibling. If one could not be found, a hidden input will be created automatically that meets the requirements.
* Added kebabcase synonym for all frontend components registered in the jQuery prototype. E.g. `$.fn.CoolTool` is also now registered as `$.fn['cool-tool']`
* Added rule to throw an error if a component name overrides an existing entry in jQuery's prototype


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
