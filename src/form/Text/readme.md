
### Examples

Inlining values

```jsx
import { useState } from 'react';
import { Button } from '@oris/ui';

const [readOnly, setReadOnly] = useState(false);
const [error, setError] = useState('');

<div>
    <Text id="foo1" name="foo" value="foo bar" readOnly={readOnly} error={error}>
        <Text.Label>
            Label here
        </Text.Label>

        <Text.Input />

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
</div>
```

Rendering as a textarea

```jsx
<Text id="foo2" name="foo" value="foo bar">
    <Text.Label>
        Label here
    </Text.Label>

    <Text.Input lines={3} />

    <Text.Help>
        Help stuff go here
    </Text.Help>
</Text>
```

Defaulting to parent `<Text>` props 

```jsx
<Text id="foo3" value="foo bar" instructions="Label here" help="Help stuff">
    <Text.Label />
    <Text.Input />
    <Text.Help />
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

Change Handling (without binds)

```jsx
import { useState } from 'react';

const [value, setValue] = useState('foo bar');
const [prev, setPrev] = useState('');

const onChange = (foo, prevFoo) => {
    setValue(foo);
    setPrev(prevFoo);
};

<Text id="foo5" value={value} onChange={onChange}>
    <Text.Label>Instructions here</Text.Label>
    <Text.Input />

    <p>Previous value: {prev}</p>
    <p>Current value: {value}</p>
</Text>
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

        alert(`"${form.get('foo')}" === "${bind.value}"`);
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
