
### Examples

#### Basic Implementation

```jsx
<Checkbox id="receive-newsletter">
    <Checkbox.Input />

    <Checkbox.Label>
        Yes! I would like to receive your newsletter
    </Checkbox.Label>

    <Checkbox.Help>
        We will not spam your inbox
    </Checkbox.Help>
</Checkbox>
```

#### Read Only
```jsx
<Checkbox id="checkbox-readonly" readOnly={true}>
    <Checkbox.Input defaultChecked={true} />
    <Checkbox.Label>
        This checkbox field is read only
    </Checkbox.Label>
</Checkbox>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Button } from '@oris/ui';

const [error, setError] = useState();
const [success, setSuccess] = useState();

<Form>
    <Checkbox id="terms" error={error} success={success}>
        <Checkbox.Input required />

        <Checkbox.Label>
            I agree to the terms and services
        </Checkbox.Label>

        <Checkbox.Error />
        <Checkbox.Success />
    </Checkbox>

    <Button theme='danger' onClick={() => {
        setSuccess();
        setError('You must accept the terms and services');
    }}>Show Error</Button>

    <Button theme='success' onClick={() => {
        setError();
        setSuccess('Thank you for accepting the terms and services');
    }}>Show Success</Button>
</Form>
```

#### Change Events

```jsx
const onChange = (newBoolValue, oldBoolValue) => {
    alert(`Checkbox changed from ${oldBoolValue} to ${newBoolValue}`);
}

<Checkbox id="toggle-me" onChange={onChange}>
    <Checkbox.Input />

    <Checkbox.Label>
        Toggle Me!
    </Checkbox.Label>
</Checkbox>
```

```jsx
import { FieldSet } from '@oris/ui';

const onChange = (newArrayValue, oldArrayValue) => {
    alert(`Selected options changed from [${oldArrayValue}] to [${newArrayValue}]`);
}

<FieldSet id="light-types" onChange={onChange}>
    <FieldSet.Legend>
        Select your light types
    </FieldSet.Legend>

    <Checkbox id="light-types-spot">
        <Checkbox.Input />
        <Checkbox.Label>Spot light</Checkbox.Label>
    </Checkbox>

    <Checkbox id="light-types-directional">
        <Checkbox.Input  />
        <Checkbox.Label>Directional Light</Checkbox.Label>
    </Checkbox>

    <Checkbox id="light-types-point">
        <Checkbox.Input />
        <Checkbox.Label>Point Light</Checkbox.Label>
    </Checkbox>
</FieldSet>
```
