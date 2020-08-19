
### Examples

Inlining values

```jsx
import { useState } from 'react';
import { Button } from '@oris/ui';

const [readOnly, setReadOnly] = useState(false);
const [error, setError] = useState('');
const [value, setValue] = useState('foo bar');
const [prev, setPrev] = useState('');

const onChange = (currentValue, prevValue) => {
    console.debug('called onChange');
    setPrev(prevValue);
}

<div>
    <Text id="foo1" name="foo" readOnly={readOnly} error={error} onChange={onChange}>
        <Text.Label>
            Label here
        </Text.Label>

        <Text.Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />

        <Text.Help>
            Help stuff go here
        </Text.Help>
        
        <Text.Error />
    </Text>

    <Button onClick={() => setReadOnly(!readOnly)}>
        Toggle Read Only
    </Button>
    
    <Button onClick={() => setError(error ? '' : 'Do better')}>
        Toggle Error
    </Button>
    
    <p>Current value: {value}</p>
    <p>Previous value: {prev}</p>
</div>
```

An example involving a Search transformed back and forth from a `key|name` string:

```jsx
import { useState } from 'react';

const [value, setValue] = useState('200275154|Chase McManning');

<div>
    <Text id="foo-search" value={value} onChange={setValue}>
        <Text.Label>
            Label here
        </Text.Label>

        <Text.Search />

        <Text.Help>
            You picked <strong>{value ? value : 'nobody'}</strong>
        </Text.Help>
    </Text>
</div>
```

Email input example

```jsx
<Text id="foo-email">
    <Text.Label>Provide your email address</Text.Label>
    <Text.Email />
    <Text.Error />
</Text>
```

Providing a `bind` class instance:

```jsx
import { Button } from '@oris/ui';
import { MyMockStringBind } from './etc';

const bind = new MyMockStringBind('foo4', 'foo bar');

<div>
    <Text bind={bind}>
        <Text.Label />
        <Text.Input />
        <Text.Help />
        <Text.Error />
    </Text>

    <Button onClick={() => bind.readOnly = !bind.readOnly}>
        Toggle Read Only
    </Button>
    
    <Button onClick={() => bind.error = bind.error ? '' : 'Do better'}>
        Toggle Error
    </Button>
</div>
```

Getting bind values on form submit:

```jsx
import React, { useEffect } from 'react';
import { MyMockStringBind } from './etc';

const bind = new MyMockStringBind('foo6', 'foo bar');
console.log('create bind', bind);

function MyComponent() {
    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        alert(`"${form.get('foo6')}" === "${bind.value}"`);
    }

    return (
        <form onSubmit={onSubmit}>
            <Text bind={bind}>
                <Text.Label />
                <Text.Input />
                <Text.Help />
            </Text>

            <button type="submit">Submit</button>
        </form>
    );
}

<MyComponent />
```

Update binds externally

```jsx
import React, { useEffect, useState } from 'react';
import { Button } from '@oris/ui';
import { MyMockStringBind } from './etc';

const bind = new MyMockStringBind('foo7', 'foo bar');

<div>
    <Text bind={bind}>
        <Text.Label />
        <Text.Input />
        <Text.Help />
    </Text>

    <Button onClick={() => bind.value = 'fizz buzz'}>
        1. Change to 'fizz buzz'
    </Button>
</div>
```

Two Fields One Bind

Also demos another component that uses the `useFieldBind` hook to monitor a bind for changes or apply changes.

```jsx
import React, { useEffect } from 'react';
import { Button } from '@oris/ui';
import { MyMockStringBind } from './etc';
import useFieldBind from './useFieldBind';

const bind = new MyMockStringBind('foo8', 'foo bar');

function MyComponent() {
    // Add to redraw this component on changes to the bind.
    useFieldBind(bind);

    return (
        <div>
            <p>Current value: {bind.value}</p>
            <Button onClick={() => bind.value = 'Fizz Buzz'}>
                Set to Fizz Buzz
            </Button>
        </div>
    );
}

<div>
    <Text bind={bind}>
        <Text.Label />
        <Text.Input />
        <Text.Help />
    </Text>
    <Text bind={bind}>
        <Text.Label />
        <Text.Input />
        <Text.Help />
    </Text>
    <MyComponent />
</div>
```
