
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

#### Basic Implementation with React Hook Form

```jsx
import { useForm } from 'react-hook-form';

const { register } = useForm({ mode: 'onBlur' });

<Checkbox id="rhf-receive-newsletter">
    <Checkbox.Input ref={register} />

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
import { Checkbox } from '@oris/ui';

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

#### Validation with React Hook Form
```jsx
import { useForm } from 'react-hook-form';
import { Form, Button } from '@oris/ui';

const { register, errors, formState, reset, handleSubmit } = useForm({ mode: 'onBlur' });

const onSubmit = data => console.log(data);

<Form onSubmit={handleSubmit(onSubmit)}>
    <Checkbox 
        id="rhf-terms"
        error={errors["rhf-terms"] && "You must accept the terms and services"} 
        success={formState.isValid && "Thank you for accepting the terms and services"} 
        required
    >
        <Checkbox.Input ref={register({ required: true })} />

        <Checkbox.Label>
            I agree to the terms and services
        </Checkbox.Label>

        <Checkbox.Error />
        <Checkbox.Success />
    </Checkbox>

    <Button type="submit" theme="primary">
        Check Validation
    </Button>
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

#### Checkbox FieldSet with React Hook Form

```jsx
import { useForm } from 'react-hook-form';
import { FieldSet } from '@oris/ui';

const { register, watch } = useForm({ 
    mode: 'onBlur', 
    defaultValues: {
        "light-types": ["directional"]
    } 
});

const selectedLightTypes = watch('light-types');

<>
<FieldSet id="light-types" name="light-types">
    <FieldSet.Legend>
        Select your light types
    </FieldSet.Legend>

    <Checkbox id="spot">
        <Checkbox.Input ref={register} value="spot" />
        <Checkbox.Label>Spot light</Checkbox.Label>
    </Checkbox>

    <Checkbox id="directional">
        <Checkbox.Input ref={register} value="directional" />
        <Checkbox.Label>Directional Light</Checkbox.Label>
    </Checkbox>

    <Checkbox id="point">
        <Checkbox.Input ref={register} value="point" />
        <Checkbox.Label>Point Light</Checkbox.Label>
    </Checkbox>
</FieldSet>

<hr/>
Selected:
<ul>
    {selectedLightTypes.map(type => <li>{type}</li>)}
</ul>
</>
```

### Subcomponents