
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

        <Button onClick={() => setReadOnly(!readOnly)}>
            Toggle Read Only
        </Button>
        
        <Button onClick={() => setError(error ? '' : 'Do better')}>
            Toggle Error
        </Button>
        
        <p>Current value: {value}</p>
        <p>Previous value: {prev}</p>
    </Form.Group>
</Form>
```

An example involving a Search transformed back and forth from a `key|name` string:

```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';

const [value, setValue] = useState('200275154|Chase McManning');

<Form>
    <Form.Group>
        <Text id="foo-search" value={value} onChange={setValue}>
            <Text.Label>
                Label here
            </Text.Label>

            <Text.Search />

            <Text.Help>
                You picked <strong>{value ? value : 'nobody'}</strong>
            </Text.Help>
        </Text>
    </Form.Group>
</Form>
```

Email input example

```jsx
import { Form } from '@oris/ui';

<Form>
    <Form.Group>
        <Text id="foo-email">
            <Text.Label>Provide your email address</Text.Label>
            <Text.Email />
            <Text.Error />
        </Text>
    </Form.Group>
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

```jsx
import { Form } from '@oris/ui';

<Form>
    <Form.Group>
        <Text id="something">
            <Text.Label>My Label</Text.Label>

            <Text.Area />
        </Text>
    </Form.Group>
</Form>
```

```jsx
import { Form } from '@oris/ui';

<Form>
    <Form.Group>
        <Text id="rich-text-editor">
            <Text.Label>Rich Text Editor input</Text.Label>

            <Text.Rich />
        </Text>
    </Form.Group>
</Form>
```