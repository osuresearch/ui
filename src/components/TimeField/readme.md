
### Examples

#### Blank input

```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    return(
        <TimeField
            label='Start time'
            onChange={setTime}
        />
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
        <TimeField
            label='All time fields require a label'
            defaultValue={defaultValue}
            onChange={setTime}
        />
    );
}

<Component />
```

#### Disabled/Read-only
```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    const now = new Date();
    const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

    return(
        <TimeField
            label='All time fields require a label'
            defaultValue={defaultValue}
            onChange={setTime}
            disabled
        />
    );
}

<Component />
```

#### Inline label

```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    const now = new Date();
    const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

    return(
        <TimeField
            label='All time fields require a label'
            defaultValue={defaultValue}
            onChange={setTime}
            inline
        />
    );
}

<Component />
```