# OSU Research UI 4

Collection of React components and a rebranded [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for Office of Research applications.


## Installation

```
npm i --save @osuresearch/ui
```


## Usage

Each component is importable from `@osuresearch/ui`, for example:

```jsx
import React from 'react';
import { Icon, Button } from '@osuresearch/ui';

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
@import "@osuresearch/ui/dist/sass";
```


## Styleguide and Examples

This project uses [React Styleguidist](https://react-styleguidist.js.org/) to provide a styleguide with interactive examples.

To view the styleguide of any version, `git clone` the tag for the version you are using and and run `npm install && npm start`.

## Contributing

Check out [CONTRIBUTING](CONTRIBUTING.md)
