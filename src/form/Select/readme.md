
### Examples

#### Basic Implementation
```jsx
<Select id="color-select">
    <Select.Label>Select a Color Profile</Select.Label>

    <Select.Control>
        <Select.Option value="">
            -- Please choose an option --
        </Select.Option>
        <Select.Option value="RGB">RGB</Select.Option>
        <Select.Option value="CMYK">CMYK</Select.Option>
        <Select.Option value="HSL">HSL</Select.Option>
    </Select.Control>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```

#### Basic Implementation with React Hook Form
```jsx
import { useForm } from 'react-hook-form';

const { register, watch } = useForm({ mode: "onBlur" });

<>
<Select id="rhf-color-select">
    <Select.Label>Select a Color Profile</Select.Label>

    <Select.Control ref={register}>
        <Select.Option value="">
            -- Please choose an option --
        </Select.Option>
        <Select.Option value="RGB">RGB</Select.Option>
        <Select.Option value="CMYK">CMYK</Select.Option>
        <Select.Option value="HSL">HSL</Select.Option>
    </Select.Control>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>

<hr/>
Value: {watch("rhf-color-select")}
</>
```

#### Using `optionsBind` in React Flow
```jsx
const dropdownOptions = {
    value: {
        cheddar: 'Cheddar Cheese',
        feta: 'Feta Cheese'
    }
};

<Select id="bind-options">
    <Select.Label>Binding Options</Select.Label>

    <Select.Control>
        <Select.Option optionsBind={dropdownOptions} />
    </Select.Control>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Button } from '@ORIS/ui';

const [error, setError] = useState('');
const [success, setSuccess] = useState('');

<Form>
    <Select id="error-example" error={error} success={success} required>
        <Select.Label>Which color model is used for print?</Select.Label>

        <Select.Control name="color-profiles">
            <Select.Option value="">
                -- Please choose an option --
                </Select.Option>
            <Select.Option value="RGB">RGB</Select.Option>
            <Select.Option value="CMYK">CMYK</Select.Option>
            <Select.Option value="HSL">HSL</Select.Option>
        </Select.Control>

        <Select.Error />

        <Select.Success />

        <Select.Help>
            Some additional help text here
        </Select.Help>
    </Select>

    <Button theme='danger' onClick={() => {
        setSuccess('');
        setError('You must select a color profile');
    }}>Trigger Error</Button>

    <Button theme='success' onClick={() => {
        setError('');
        setSuccess('Your selection is correct');
    }}>Trigger Success</Button>
</Form>
```

#### Validation with React Hook Form
```jsx
import { useForm } from 'react-hook-form';
import { Form, Button } from '@ORIS/ui';

const { register, errors, formState, handleSubmit } = useForm({ mode: "onBlur" });

const onSubmit = data => console.log(data);

<Form onSubmit={handleSubmit(onSubmit)}>
    <Select
        id="rhf-error-example"
        error={errors["rhf-error-example"] && "You must select a color option"}
        success={formState.isValid && "Your selection is correct"}
        required
    >
        <Select.Label>Which color model is used for print?</Select.Label>

        <Select.Control ref={register({ required: true })}>
            <Select.Option value="">
                -- Please choose an option --
                </Select.Option>
            <Select.Option value="RGB">RGB</Select.Option>
            <Select.Option value="CMYK">CMYK</Select.Option>
            <Select.Option value="HSL">HSL</Select.Option>
        </Select.Control>

        <Select.Error />

        <Select.Success />

        <Select.Help>
            Some additional help text here
        </Select.Help>
    </Select>

    <Button theme="primary" type="submit">Trigger Validation</Button>
</Form>
```

#### Change Events

```jsx
const onChange = (newStrValue, oldStrValue) => {
    alert(`Selection changed from ${oldStrValue} to ${newStrValue}`);
}

<Select id="vertex-component-type" onChange={onChange}>
    <Select.Label>Select a data type for vertex components</Select.Label>

    <Select.Control>
        <Select.Option value="">
            -- Please choose an option --
        </Select.Option>
        <Select.Option value="Float32">32-bit float number</Select.Option>
        <Select.Option value="Float16">16-bit float number</Select.Option>
        <Select.Option value="UNorm8">8-bit unsigned normalized number</Select.Option>
        <Select.Option value="SNorm16">8-bit signed normalized number</Select.Option>
    </Select.Control>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```

### Subcomponents