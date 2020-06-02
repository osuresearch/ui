
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
            value={time}
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
            value={time}
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
            value={time}
            onChange={setTime}
            inline
        />
    );
}

<Component />
```

#### Use an external label (only when necessary)

Sometimes you may need to use a label from outside of the component. In this scenario, pass the label element as a ref into the TimeField label prop. 

**Important note:** `htmlFor` must be defined in the label element – but you were going to do that anyway, right?

```jsx
import { useState, useRef } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    const now = new Date();
    const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

    const labelRef = useRef();

    return(
        <>
            <label ref={labelRef} htmlFor='timefield-id-ref'>An external label</label>
            <TimeField
                label={labelRef.current}
                defaultValue={defaultValue}
                value={time}
                onChange={setTime}
            />
        </>
    );
}

<Component />
```

If you cannot use a ref for some reason, another (more risky) option is to use `document.querySelector` to get the label element.

```jsx
import { useState } from 'react';

const Component = () => {
    const [time, setTime] = useState();

    const now = new Date();
    const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

    const label = document.querySelector("label[for='timefield-id-qselector']");

    return(
        <>
            <label htmlFor='timefield-id-qselector'>Another external label</label>
            <TimeField
                label={label}
                defaultValue={defaultValue}
                value={time}
                onChange={setTime}
            />
        </>
    );
}

<Component />
```