
### Examples

#### Blank Input

```jsx
import { useState } from 'react';

const [time, setTime] = useState();

<Time id="start-time" required>
    <Time.Label>Start Time</Time.Label>

    <Time.Input
        value={time}
        onChange={setTime}
    />

    <Time.Error />
</Time>
```

#### Blank Input with React Hook Form

Since `<Time>` is a controlled component, `<Time.Input>` must be wrapped in a React Hook Form `<Controller>` component.

```jsx
import { useForm, Controller } from 'react-hook-form';

const { register, errors, control } = useForm({ mode: "onBlur" });

<Time 
    id="rhf-start-time" 
    error={errors["rhf-start-time"] && "Enter a time"}
    required
>
    <Time.Label>Start Time</Time.Label>

    <Controller 
        control={control}
        name="rhf-start-time"
        rules={{ required: true }}
        render={({ onChange, onBlur, value }) => 
            <Time.Input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        }
    />

    <Time.Error />
</Time>
```

#### Input with Default Value

```jsx
import { useState } from 'react';

const [time, setTime] = useState();

const now = new Date();
const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

<Time id='signature-time'>
    <Time.Label>Signature Time</Time.Label>

    <Time.Input
        defaultValue={defaultValue}
        value={time}
        onChange={setTime}
    />
</Time>
```

#### Input with Default Value in React Hook Form

Since `<Time>` is a controlled component, `<Time.Input>` must be wrapped in a React Hook Form `<Controller>` component.

```jsx
import { useForm, Controller } from 'react-hook-form';

const now = new Date();
const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

const { register, control } = useForm({ 
    mode: "onBlur",
    defaultValues: {
        "rhf-signature-time": defaultValue
    }
});

<Time id='rhf-signature-time'>
    <Time.Label>Signature Time</Time.Label>

    <Controller 
        control={control}
        name="rhf-signature-time"
        render={({ onChange, onBlur, value }) => 
            <Time.Input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        }
    />
</Time>
```

#### Read-only

```jsx
import { useState } from 'react';

const [time, setTime] = useState();

const defaultValue = '13:30';

<Time id='appointment-time' readOnly>
    <Time.Label>Appointment Time</Time.Label>

    <Time.Input
        defaultValue={defaultValue}
        value={time}
        onChange={setTime}
    />
</Time>
```

### Subcomponents