# [4.9.0](https://github.com/osuresearch/ui/compare/v4.8.3...v4.9.0) (2023-04-25)


### Bug Fixes

* **ci:** omit `clean-exclude` list from gh-pages deployment ([68ea49c](https://github.com/osuresearch/ui/commit/68ea49c7b911efafd3ee16237303dbbfc9ce46ff))
* remove inline scss imports from components ([295876c](https://github.com/osuresearch/ui/commit/295876c3ea3867b122580074124f04faf3c5e061)), closes [#72](https://github.com/osuresearch/ui/issues/72)


### Features

* **ci:** deploy Styleguidist to GitHub Pages for v4 docs ([5366eac](https://github.com/osuresearch/ui/commit/5366eac82cbb69aed7a0248cec550ed2a6438f6b))

# [4.9.0](https://github.com/osuresearch/ui/compare/v4.8.3...v4.9.0) (2023-04-25)


### Bug Fixes

* remove inline scss imports from components ([295876c](https://github.com/osuresearch/ui/commit/295876c3ea3867b122580074124f04faf3c5e061)), closes [#72](https://github.com/osuresearch/ui/issues/72)


### Features

* **ci:** deploy Styleguidist to GitHub Pages for v4 docs ([5366eac](https://github.com/osuresearch/ui/commit/5366eac82cbb69aed7a0248cec550ed2a6438f6b))

## [4.8.3](https://github.com/osuresearch/ui/compare/v4.8.2...v4.8.3) (2023-02-03)


### Bug Fixes

* **Upload:** allowed the display of uploader to be controlled by 'disabled' attribute ([#32](https://github.com/osuresearch/ui/issues/32)) ([ce77242](https://github.com/osuresearch/ui/commit/ce77242656ab268ebcfa91b896caf1fc7823f189))

## [4.8.2](https://github.com/osuresearch/ui/compare/v4.8.1...v4.8.2) (2023-01-19)


### Bug Fixes

* language ([4d56aaa](https://github.com/osuresearch/ui/commit/4d56aaac5257d01b9d91aa0ec421bc8936787d2c))

## [4.8.1](https://github.com/osuresearch/ui/compare/v4.8.0...v4.8.1) (2023-01-19)


### Bug Fixes

* **ci:** add missing publishConfig key ([44d19ea](https://github.com/osuresearch/ui/commit/44d19ea60a26f508cac102a35a0b85e1262666c0))
* **ci:** lock semantic-release dependency to 19 ([734c069](https://github.com/osuresearch/ui/commit/734c0699834f1ddf902d21cd3a6989883b7f6e67))
* **dependencies:** downgrade PrimeReact back to 6.3 due to build compat issues ([da1066e](https://github.com/osuresearch/ui/commit/da1066e17fa9f74e33044d56e8f1ef92b428ab5b))
* **dependencies:** make sass a true dependency instead of dev dependency ([9ba2c9f](https://github.com/osuresearch/ui/commit/9ba2c9f5f10baabc8a33ae15f13467e93e56230e)), closes [#17](https://github.com/osuresearch/ui/issues/17)
* missing Upload component export ([1ddcda0](https://github.com/osuresearch/ui/commit/1ddcda0a760ae0e6db0094343ae2fce384296f2a)), closes [#16](https://github.com/osuresearch/ui/issues/16)

# [4.8.0](https://code.osu.edu/ORIS/ui/compare/4.7.1...4.8.0) (2022-12-20)


### Features

* add Upload form component ([f11c819](https://code.osu.edu/ORIS/ui/commit/f11c819dbc4aaf30ca933d4f6bae08f25ee252f3))

## [4.7.1](https://code.osu.edu/ORIS/ui/compare/4.7.0...4.7.1) (2022-10-25)


### Bug Fixes

* missing type information for DropOverlay.Menu props ([80707ce](https://code.osu.edu/ORIS/ui/commit/80707cef4a536c1c1fdd9b2028860f73b990fa30))

# [4.7.0](https://code.osu.edu/ORIS/ui/compare/4.6.1...4.7.0) (2022-10-25)


### Features

* add optional `className` prop to `DropOverlay.Menu` and `DropOverlay.Menu.Item` ([d2b1217](https://code.osu.edu/ORIS/ui/commit/d2b1217f72d4631632b66f7030fe8a800ca6b3fd))

## [4.6.1](https://code.osu.edu/ORIS/ui/compare/4.6.0...4.6.1) (2022-10-21)


### Bug Fixes

* **a11y:** `Text.Rich` no longer uses h1-h3 DOM elements to avoid conflicts with existing page layout (resolves [#17](https://code.osu.edu/ORIS/ui/issues/17)) ([c7aaf87](https://code.osu.edu/ORIS/ui/commit/c7aaf871ea3c8d3076f0ced6eac0568dec5c581e))
* division symbol deprecation warnings in sass files ([7364811](https://code.osu.edu/ORIS/ui/commit/73648114187677e1b5d4e79f72514e8a7f090301))

# [4.6.0](https://code.osu.edu/ORIS/ui/compare/4.5.1...4.6.0) (2022-10-13)


### Bug Fixes

* **a11y:** link themed buttons will now correctly show a focus ring (resolves [#20](https://code.osu.edu/ORIS/ui/issues/20)) ([0c2e9fa](https://code.osu.edu/ORIS/ui/commit/0c2e9fa888b7b6c22541311bbf52babf3b241390))
* ChangeParams and ChangeTargetOptions missing from exports (resolves [#8](https://code.osu.edu/ORIS/ui/issues/8)) ([67f62fc](https://code.osu.edu/ORIS/ui/commit/67f62fc7307d3e79a65673f80bbee37195a98c0f))
* invalid import paths to JsonObject ([5c5b52b](https://code.osu.edu/ORIS/ui/commit/5c5b52bbf63290806089fd6bb1b723265060f5be))


### Features

* add `Text.Autocomplete` component ([a531b03](https://code.osu.edu/ORIS/ui/commit/a531b03a0c46ba9d8f9957cc9a5b89907b66ee8a))
* add optional placeholder prop to `Lookup.Input` ([06dedd5](https://code.osu.edu/ORIS/ui/commit/06dedd5874b1ee9d4b11d9752b02b4083c803dbc))

## [4.5.1](https://code.osu.edu/ORIS/ui/compare/4.5.0...4.5.1) (2022-07-29)


### Bug Fixes

* LazyLoaded content now displays as soon as loading is complete without delay. Screen reader enhancements no longer affect visual display ([cc1de76](https://code.osu.edu/ORIS/ui/commit/cc1de76cecad7f11faa136ac2fb8d732f5279c34))

# [4.5.0](https://code.osu.edu/ORIS/ui/compare/4.4.11...4.5.0) (2022-07-26)


### Bug Fixes

* Added icons to invalid and valid form feedback text so they can pass WCAG 1.4.1 ([8763d2a](https://code.osu.edu/ORIS/ui/commit/8763d2a2a72c18d8884d763f9ef407dc8eb5cd25))
* Alert close button position style ([e4636f3](https://code.osu.edu/ORIS/ui/commit/e4636f380b8e46896e98ce29574c6c1d27ec7627))
* ARIA issue with Alert - allow users to choose the role, since role='alert' should be used sparingly and is rather inaccessible if not used properly. Keeping the default role as alert to prevent a breaking change. ([4873183](https://code.osu.edu/ORIS/ui/commit/48731839d65a3b929b750d9de0a9b1e4f1053ae6))
* Change default Alert role to status ([8441a69](https://code.osu.edu/ORIS/ui/commit/8441a698e5341d554115b9b3b2bd83964e533ab1))
* Correct documentation for adding accessible text to an `<Icon>` ([23e6c94](https://code.osu.edu/ORIS/ui/commit/23e6c94e156218c03a421942a44b8a2352ce9c16))
* dangerouslySetInnerHTML for Checkbox and Radio labels (resolves FWK-374) ([81814bf](https://code.osu.edu/ORIS/ui/commit/81814bf8003cd02d943fcc4a18d6cc5b56793586))
* Give `Navbar` a unique label (resolves FWK-401) ([bc3aae6](https://code.osu.edu/ORIS/ui/commit/bc3aae6ba0dc14c7d76dbcf753e877af3521a45c))
* Handle Dropdown.readOnly and MultiSelect.readOnly props (resolves FWK-378) ([eea9f50](https://code.osu.edu/ORIS/ui/commit/eea9f506f2e8152d9511125340866d0085fc9981))
* Increase contrast ratio between navigation item and NavBar (resolves FWK-399) ([e24ad8d](https://code.osu.edu/ORIS/ui/commit/e24ad8d090b6f6a3abf452315a99d4c71bd4230a))
* LazyLoaded display logic where toggling back to loading would not show the placeholder ([b814f9a](https://code.osu.edu/ORIS/ui/commit/b814f9a5f989e9706ad18b3cb23db71fbf8e322f))
* Properly handle onBlur for DateTime component (partially resolves FWK-379) ([974596e](https://code.osu.edu/ORIS/ui/commit/974596e12e852ee3c12821740f6e3ab48c1b2471))
* Remove experimental `AppSearch` and `DocumentReview` components ([6e39829](https://code.osu.edu/ORIS/ui/commit/6e398292ba03cfd747b1d59f37adbd720dcfadb8))
* Resolve CSS validation errors, excluding SVG false positive errors (resolves FWK-400) ([f730ff5](https://code.osu.edu/ORIS/ui/commit/f730ff580f6c1c4212ffe04fa027db2cd96c8ea3))
* Set document title to Page title prop every time that prop changes ([3d7aacb](https://code.osu.edu/ORIS/ui/commit/3d7aacbcf4b26822ecf78d3843eff6fe602779fa))
* Use state to control the visibility of Alerts, instead of the Bootstrap data-dismiss attribute (resolves FWK-383) ([3f3c9ed](https://code.osu.edu/ORIS/ui/commit/3f3c9edf310722dfa6c02ab60ad5ea5741b02010))


### Features

* Add `<Page>` component to improve application accessibility ([4fab2f8](https://code.osu.edu/ORIS/ui/commit/4fab2f8cd735dbaf0623977129ba3452b0e038dd))
* CheckboxSet component for Checkbox fieldsets ([2c22118](https://code.osu.edu/ORIS/ui/commit/2c2211858e4fac16eb33e08b14470d810ef5d2d3))
* LazyLoaded component for better lazy loaded content accessibility ([f2aa02b](https://code.osu.edu/ORIS/ui/commit/f2aa02b9a7f4cc1ec1ed52d25afd22ceb428a7ad))
* RadioSet component for Radios in fieldsets ([3c41d3e](https://code.osu.edu/ORIS/ui/commit/3c41d3eaf6288d650b41e65c97b8719e426850b7))

## [4.4.11](https://code.osu.edu/ORIS/ui/compare/4.4.10...4.4.11) (2022-04-13)


### Bug Fixes

* remove package-level exports of search drivers introduced in 4.4.10 ([c047162](https://code.osu.edu/ORIS/ui/commit/c0471625c4f0b0914c3dfb1b582310759ec82f81))

## [4.4.10](https://code.osu.edu/ORIS/ui/compare/4.4.9...4.4.10) (2022-04-13)


### Bug Fixes

* incorrect export of `SearchFilters` as a type (resolves FWK-384) ([418655e](https://code.osu.edu/ORIS/ui/commit/418655e0f15f4e0e4a947d3422d5a685a26be488))
* missing search drivers and interfaces to package export (resolves FWK-385) ([8ae10e9](https://code.osu.edu/ORIS/ui/commit/8ae10e9a8b8a19a2a2c1f13d0ca8a7b07f699968))

## [4.4.9](https://code.osu.edu/ORIS/ui/compare/4.4.8...4.4.9) (2022-03-22)


### Bug Fixes

* Add `name` and `id` props to Text.Rich component (resolves FWK-375 and FWK-377) ([d764f13](https://code.osu.edu/ORIS/ui/commit/d764f1341728412e1381259348fcbcdd74d47660))
* Show asterisk for required single checkboxes (resolves FWK-376) ([f856c5a](https://code.osu.edu/ORIS/ui/commit/f856c5a356a057789d56879248f55e957c3d0717))

## [4.4.8](https://code.osu.edu/ORIS/ui/compare/4.4.7...4.4.8) (2022-03-11)


### Bug Fixes

* Update type of children prop for <FieldSet.Legend> to ReactChild, allowing both JSX elements and strings ([9b808b8](https://code.osu.edu/ORIS/ui/commit/9b808b8f863caa82d4be6ec1b4abb6c6edff94fe))

## [4.4.7](https://code.osu.edu/ORIS/ui/compare/4.4.6...4.4.7) (2022-03-10)


### Bug Fixes

* className gnored on all top level form components (resolves FWK-373) ([5df45b4](https://code.osu.edu/ORIS/ui/commit/5df45b439e0985164219886dbffcb3899aa49988))
* FeldSet does not use `id` attribute (resolves FWK-365) ([1b68d26](https://code.osu.edu/ORIS/ui/commit/1b68d2610682a720c15cc91bb9f16055940c9d32))
* Labels do not support HTML content (resolves FWK-374) ([f670f9c](https://code.osu.edu/ORIS/ui/commit/f670f9c51e27167124a73a8cb0925f7bbd92bbc3))
* Update FieldSet to not require a `name` and to inherit the `id` as the `name` if no name is set (follows the pattern of the rest of the components) ([bb6ce81](https://code.osu.edu/ORIS/ui/commit/bb6ce81185acac6854ef026be1b1426415cf843a))

## [4.4.6](https://code.osu.edu/ORIS/ui/compare/4.4.5...4.4.6) (2022-01-21)


### Bug Fixes

* **styleguide:** add a .htaccess so deployed styleguides can be accessed from just the project root ([7b6c3f2](https://code.osu.edu/ORIS/ui/commit/7b6c3f25cbfb1e3f64d7cde72b84c99d78007f17))

# 4.4.5 (2021-07-06)

__Bug Fixes:__

* Fixes issue introduced in the previous release where `Lookup.Input` result could not be selected by mouse click.
* Input focus event now passed to `onBlur` callback on `Lookup.Input`.

# 4.4.4 (2021-06-29)

__Bug Fixes:__

* Improve results pane behavior on `Lookup.Input` component.

# 4.4.3 (2021-06-11)

__Bug Fixes:__

* `props.onChange()` is no longer invoked when `readOnly` is set to true in the `Checkbox.Input`, `Number.Input`, `Radio.Input`, `Text.Area`, `Text.Email`, `Text.Input`, and `Text.Rich` components.

# 4.4.2 (2021-05-13)

__Bug Fixes:__

* Data objects inlined for `MultiSelect`, `Dropdown`, `DataTable`, and `TreeTable` component examples (resolves FWK-308)
* Added error handling for `Paginator` component for when the search limit is set to a number less than one (1) (resolves FWK-309)
* Added missing keys to `Filters.Active` and `Filters.OneOf`
* Added optional `id` property to `Filter.Toggle` component (resolves FWK-296)

# 4.4.1 (2021-05-04)

Bumping version due to a version conflict on UCR's package repository

# 4.4.0 (2021-05-04)

__Deprecated Components:__

* `Modal` (superseded by PrimeReact `Dialog`)

__Breaking Changes:__

* Potential breaking changes in all PrimeReact components due to upgrade to version 6.3.0 (see [\#1738](https://github.com/primefaces/primereact/issues/1738), [\#1566](https://github.com/primefaces/primereact/issues/1566), and [\#1877](https://github.com/primefaces/primereact/issues/1877))
* `useSearchProvider` - Rename `results` to `response` and `setResults` to `setResponse` in the returned object

__New Features:__

* Added pagination support for Search components (`offset` and `limit` getters/setters in Search context).
* `Apollo` search driver updated to include pagination support.
* `SyncSearchWithURL` updated to include pagination support.
* Added `Paginator` component to be used within a `SearchProvider`.
* Added support for parameters in `JsonApi` Search driver.
* Added `Avatar` component with https://opic.osu.edu integration.
* Added `EmailLink` component.
* PrimeReact updated from version 5.0.0 to version 6.3.0.
    * New PrimeReact component support in ORIS/ui: `Dialog` (replaces Modal), `Toast` (via `useToast` hook and `ToastProvider`), and `Skeleton`.

__Bug Fixes:__

* The `DateTime.Input` calendar now displays above all DOM elements. This resolves an issue where the calendar would be cut off when used in a Modal or Dialog.
* The `DateTime.Input` field no longer ignores direct keyboard input.
* `SyncSearchWithURL` now conditionally checks that the initial URL actually has filters prior to replacing them in the Search provider.

# 4.3.2 (2021-03-01)

__Minor Backwards Breaking Changes:__

* Internal imports have changed to use the uppercase package name `@ORIS` instead of `@oris` to support NPM > 6. If you have the package installed as `@osuresearch/ui` you may encounter build errors. Reinstall as `@osuresearch/ui`.

# 4.3.1 (2021-02-19)

__Bug Fixes:__

* The Lookup form component can now be properly used as a controlled component. If the value passed into the `Lookup.Input` subcomponent is updated, the internal state will be updated to reflect the new value. An example for clearing `Lookup.Input` using this method was added to the README file for the `Lookup` component.
* Resolves FWK-279 - the Lookup.Input clear button no longer triggers form submission

# 4.3.0 (2021-01-11)

__New Features:__

* Integration of the [PrimeReact UI Library](https://www.primefaces.org/primereact/), with support for its `DataTable`, `TreeTable`, and `Accordion` components (support for additional PrimeReact components forthcoming)
* New `Alert` component based on [Bootstrap Alerts](https://getbootstrap.com/docs/4.0/components/alerts/)
* New `Chips` form component based on the PrimeReact component of the same name
* New `Dropdown` form component based on the PrimeReact component of the same name
* New `DropOverlay` component based on [Bootstrap Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)
* New `MultiSelect` form component based on the PrimeReact component of the same name
* New search components `SearchProvider` and `Filters.*` to standardize search and filtering tools in apps (supports both GraphQL and JSON:API backends)
* New `Lookup` form component that uses the new search and filtering tools
* Navigation improvements to styleguide by categorizing components

__Internal changes:__

* The base styleguide page no longer loads all of the components in the styleguide
* Added the ability to override the component path line; if `componentPathLine` is set in a component, it will override the default (i.e. `import { Component } from '@osuresearch/ui'`)
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

* `Profile` - Now part of the [@ORIS/auth](https://code.osu.edu/ORIS/auth/) package.
* `Emulate` - Now part of the [@ORIS/auth](https://code.osu.edu/ORIS/auth/) package.

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

* Refactored package dependencies to no longer require specific builds of node-sass or react-scripts installed when installing `@osuresearch/ui` through npm.
    * Minimum supported React versions are defined via `peerDependencies` to issue warnings during `npm install` if these are not met.

Note that with the above fix `react-dom` and `react-router-dom` will no longer be installed alongside `@osuresearch/ui`. If your project was using an older version of `@osuresearch/ui`, you will need to install these dependencies manually via:

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
* Component imports must now come from the `@osuresearch/ui` package
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
