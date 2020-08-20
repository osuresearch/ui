
### Examples

#### Blank Input

```jsx
import { useState } from 'react';

const [time, setTime] = useState();

<Time id="start-time">
    <Time.Label>Start Time</Time.Label>

    <Time.Input
        value={time}
        onChange={setTime}
    />
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

#### Read-only
```jsx
import { useState } from 'react';

const [time, setTime] = useState();

const defaultValue = '13:30';

<Time id='appointment-time'>
    <Time.Label>Appointment Time</Time.Label>

    <Time.Input 
        defaultValue={defaultValue}
        value={time}
        onChange={setTime}
        readOnly
    />
</Time>
```