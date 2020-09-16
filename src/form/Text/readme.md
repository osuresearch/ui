
### Examples

Inlining values
```jsx
import { useState } from 'react';
import { Form, Button } from '@oris/ui';

const [readOnly, setReadOnly] = useState(false);
const [error, setError] = useState('');
const [value, setValue] = useState('foo bar');
const [prev, setPrev] = useState('');

const onChange = (currentValue, prevValue) => {
    console.debug('called onChange');
    setPrev(prevValue);
}

<Form>
    <Form.Group>
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
    </Form.Group>

    <Button onClick={() => setReadOnly(!readOnly)}>
        Toggle Read Only
    </Button>

    <Button onClick={() => setError(error ? '' : 'Do better')}>
        Toggle Error
    </Button>

    <p>Current value: {value}</p>
    <p>Previous value: {prev}</p>
</Form>
```

Providing a `bind` class instance:
```jsx
import { Form, Button } from '@oris/ui';
import { MyMockStringBind } from '../../internal/FormCommon/types';

const bind = new MyMockStringBind('foo4', 'foo bar');

<Form>
    <Form.Group>
        <Text bind={bind}>
            <Text.Label />
            <Text.Input />
            <Text.Help />
            <Text.Error />
        </Text>
    </Form.Group>

    <Button onClick={() => bind.readOnly = !bind.readOnly}>
        Toggle Read Only
    </Button>
        
    <Button onClick={() => bind.error = bind.error ? '' : 'Do better'}>
        Toggle Error
    </Button>
</Form>
```

Getting bind values on form submit:
```jsx
import React, { useEffect } from 'react';
import { Form, Button } from '@oris/ui';
import { MyMockStringBind } from '../../internal/FormCommon/types';

const bind = new MyMockStringBind('foo6', 'foo bar');
console.log('create bind', bind);

function MyComponent() {
    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        alert(`"${form.get('foo6')}" === "${bind.value}"`);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Text bind={bind}>
                    <Text.Label />
                    <Text.Input />
                    <Text.Help />
                </Text>
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    );
}

<MyComponent />
```

Update binds externally
```jsx
import React, { useEffect, useState } from 'react';
import { Form, Button } from '@oris/ui';
import { MyMockStringBind } from '../../internal/FormCommon/types';

const bind = new MyMockStringBind('foo7', 'foo bar');

<Form>
    <Form.Group>
        <Text bind={bind}>
            <Text.Label />
            <Text.Input />
            <Text.Help />
        </Text>
    </Form.Group>

    <Button onClick={() => bind.value = 'fizz buzz'}>
        1. Change to 'fizz buzz'
    </Button>
</Form>
```

Two Fields One Bind

Also demos another component that uses the `useFieldBind` hook to monitor a bind for changes or apply changes.

```jsx
import React, { useEffect } from 'react';
import { Form, Button } from '@oris/ui';
import { MyMockStringBind } from '../../internal/FormCommon/types';
import useFieldBind from '../../internal/FormCommon/hooks/useFieldBind';

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

<Form>
    <Form.Group>
        <Text bind={bind}>
            <Text.Label />
            <Text.Input />
            <Text.Help />
        </Text>
    </Form.Group>
    <Form.Group>
        <Text bind={bind}>
            <Text.Label />
            <Text.Input />
            <Text.Help />
        </Text>
    </Form.Group>

    <MyComponent />
</Form>
```

Validation
```jsx
import { Form } from '@oris/ui';

const error = 'You must fill out this field';

<Form.Group>
    <Text id="input-invalid-sample" error={error} required>
        <Text.Label>
            Input with a serverside-generated error message. Bootstrap 4 is now opinionated about how to handle clientside errors. See the <a href="https://getbootstrap.com/docs/4.0/components/forms/#validation" target="_blank">official validation documentation</a>.
        </Text.Label>

        <Text.Input />

        <Text.Error />

        <Text.Help>
            We recommend adding some clientside validation (but not relying on it) for ensuring that basic validation rules are met (like field lengths, a field matching a Regex, etc)
        </Text.Help>
    </Text>
</Form.Group>
```

```jsx
import { Form } from '@oris/ui';

const success = "This is valid!";

<Form.Group>
    <Text id="input-valid-sample" success={success}>
        <Text.Label>
            An input updated with a "this is valid!" message. Useful if you want some basic validation feedback while the user is filling out the form.
        </Text.Label>

        <Text.Input defaultValue="some value" />

        <Text.Success />

        <Text.Help>
            This is some additional help text
        </Text.Help>
    </Text>
</Form.Group>
```
