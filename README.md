# @oris/ui

Collection of React components and a rebranded [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) build for Office of Research applications.


## Installation

These components are available as a private npm package. Simply run:

```
npm install git+ssh://git@code.osu.edu:ORIS/ui.git#semver:^4.0
```

**- Or -** add the following to your `package.json` and run `npm install`:

```json
{
    ...
    "dependencies": {
        "@oris/ui": "git+ssh://git@code.osu.edu:ORIS/ui.git#semver:^4.0"
    }
}
```


## Usage

Each component is importable from `@oris/ui`, for example:

```jsx
import React from 'react';
import { Icon, Button } from '@oris/ui';

const MyPage = () =>
    <div className="my-page">
        ...
        <Button theme="danger" onClick={onDelete}>
            <Icon name="trash">Delete</Icon>
        </Button>
    </div>
```

To import the SASS styles into your application, import the following in whatever your primary sass file is (typically an `index.sass`):

```css
@import "@oris/ui/dist/sass";
```


## Styleguide and Examples

This project uses [React Styleguidist](https://react-styleguidist.js.org/) to provide a styleguide with interactive examples.

To view the styleguide, `git clone` this project and run `npm install && npm start`.


## Contributing

Check out [CONTRIBUTING](CONTRIBUTING.md)
