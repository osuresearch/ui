# Research UI

[![npm@latest](https://img.shields.io/npm/v/@osuresearch/ui/latest)](https://www.npmjs.com/package/@osuresearch/ui)
[![npm@alpha](https://img.shields.io/npm/v/@osuresearch/ui/alpha)](https://www.npmjs.com/package/@osuresearch/ui)

Design System for Ohio State's Office of Research.


## Supported Versions

This branch contains the work in progress for UI 5 and is not production ready.

For Office of Research applications on UI 4, visit the 4.x maintenance branch.

| Version | Supported            |
| ------- | -------------------- |
| 5.0.0   | :warning: Prerelease |
| 4.8.x   | :white_check_mark:   |
| < 4.8.0 | :x:                  |


## Using RUI with Storybook

If you are writing components in Storybook that depend on RUI, you should wrap your stories with our provider to access theme tokens, portals, and other necessary utilities.

RUI integrates with Storybook's dark mode plugin to help you test components across multiple themes.

In your Storybook `preview.js` import the distribution CSS and add a decorator that wraps your stories with `RUIProvider`:

```js
import { RUIProvider } from '@osuresearch/ui';
import '@osuresearch/ui/dist/index.css';

...

export const decorators = [
  (Story) => (
    <RUIProvider theme={useDarkMode() ? 'dark' : 'light'}>
      <Story />
    </RUIProvider>
  ),
];
```

RUI's theme will update whenever you toggle dark mode in Storybook.

## Changelog

The changelog can be found on the [Releases page](https://github.com/osuresearch/ui/releases).


## Authors and license

[Chase McManning](https://github.com/McManning) and [contributors](https://github.com/osuresearch/ui/graphs/contributors).

MIT License, see the included [LICENSE](LICENSE.md) file.
