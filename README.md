# @ORIS/ui

Collection of React components and a rebranded [Bootstrap 4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) build for Office of Research applications.


## Installation

These components are available as a private npm package. Simply run:

```
npm i --save @ORIS/ui
```

Note that you will need to add UCR as a private registry to NPM before running the above command.


## Usage

Each component is importable from `@ORIS/ui`, for example:

```jsx
import React from 'react';
import { Icon, Button } from '@ORIS/ui';

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
@import "@ORIS/ui/build/sass";
```


## Styleguide and Examples

This project uses [React Styleguidist](https://react-styleguidist.js.org/) to provide a styleguide with interactive examples.

A copy of the styleguide for the *latest* version of UI [is available on our development server](https://orwebdev02.rf.ohio-state.edu/ui/styleguide).


To view the styleguide of any other version, `git clone` the tag for the version you are using and and run `npm install && npm start`.

## Contributing

Check out [CONTRIBUTING](CONTRIBUTING.md)
