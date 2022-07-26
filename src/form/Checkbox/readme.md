
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

#### Basic Implementation with React Hook Form (v7)

```jsx
import { useForm } from 'react-hook-form';

const { register, watch } = useForm({ mode: 'onBlur' });

<>
<Checkbox id="rhf-receive-newsletter">
    <Checkbox.Input {...register('rhf-receive-newsletter')} />

    <Checkbox.Label>
        Yes! I would like to receive your newsletter
    </Checkbox.Label>

    <Checkbox.Help>
        We will not spam your inbox
    </Checkbox.Help>
</Checkbox>

<hr/>
Value: {watch('rhf-receive-newsletter') ? 'Yes' : 'No'}
</>
```

#### Read Only
```jsx
import { Checkbox } from '@ORIS/ui';

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
import { Form, Button } from '@ORIS/ui';

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

#### Validation with React Hook Form (v7)
```jsx
import { useForm } from 'react-hook-form';
import { Form, Button } from '@ORIS/ui';

const { register, formState: { isValid, errors }, reset, handleSubmit } = useForm({ mode: 'onBlur' });

const onSubmit = data => console.log(data);

<Form onSubmit={handleSubmit(onSubmit)}>
    <Checkbox
        id="rhf-terms"
        error={errors["rhf-terms"] && "You must accept the terms and services"}
        success={isValid && "Thank you for accepting the terms and services"}
        required
    >
        <Checkbox.Input {...register('rhf-terms', { required: true })} />

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
import { FieldSet } from '@ORIS/ui';

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

#### Checkbox FieldSet with React Hook Form (v7)

```jsx
import { useForm } from 'react-hook-form';
import { FieldSet } from '@ORIS/ui';

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
        <Checkbox.Input 
            value="spot"
            {...register('light-types')} 
        />
        <Checkbox.Label>Spot light</Checkbox.Label>
    </Checkbox>

    <Checkbox id="directional">
        <Checkbox.Input 
            value="directional"
            {...register('light-types')} 
        />
        <Checkbox.Label>Directional Light</Checkbox.Label>
    </Checkbox>

    <Checkbox id="point">
        <Checkbox.Input 
            value="point"
            {...register('light-types')} 
        />
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

#### dangerouslySetInnerHTML

Do not set `dangerouslySetInnerHTML` on the label unless you understand the risks involved and have a good usecase. This is almost never a good idea!

```jsx
<Checkbox id="receive-newsletter-dsih">
    <Checkbox.Input />

    <Checkbox.Label dangerouslySetInnerHTML={{__html: 'My label'}}/>

    <Checkbox.Help>
        We will not spam your inbox
    </Checkbox.Help>
</Checkbox>
```

### Subcomponents