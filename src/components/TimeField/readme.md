
### Examples

#### Blank input

```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    return(
        <>
            <label htmlFor='start-time'>Start Time</label>
            <TimeField
                id='start-time'
                value={time}
                onChange={setTime}
            />
        </>
    );
}

<Component />
```

#### Input with Default Value

```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    const now = new Date();
    const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

    return(
        <>
            <label htmlFor='signature-time'>Signature Time</label>
            <TimeField
                id='signature-time'
                defaultValue={defaultValue}
                value={time}
                onChange={setTime}
            />
        </>
    );
}

<Component />
```

#### Read-only
```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    const now = new Date();
    const defaultValue = '13:30';

    return(
        <>
            <label htmlFor='appointment-time'>Appointment Time</label>
            <TimeField
                id='appointment-time'
                defaultValue={defaultValue}
                value={time}
                onChange={setTime}
                readOnly
            />
        </>
    );
}

<Component />
```