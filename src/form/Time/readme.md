
### Examples

#### Blank Input

```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';

const [time, setTime] = useState();

<Form.Group>
    <Time id="start-time" required>
        <Time.Label>Start Time</Time.Label>

        <Time.Input
            value={time}
            onChange={setTime}
        />

        <Time.Error />
    </Time>
</Form.Group>
```

#### Input with Default Value
```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';

const [time, setTime] = useState();

const now = new Date();
const defaultValue = now.toLocaleTimeString('en-GB').substring(0, 5); // Convert date to 24h time string, then use substring to remove the seconds from the string

<Form.Group>
    <Time id='signature-time'>
        <Time.Label>Signature Time</Time.Label>

        <Time.Input
            defaultValue={defaultValue}
            value={time}
            onChange={setTime}
        />
    </Time>
</Form.Group>
```

#### Read-only
```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';

const [time, setTime] = useState();

const defaultValue = '13:30';

<Form.Group>
    <Time id='appointment-time' readOnly>
        <Time.Label>Appointment Time</Time.Label>

        <Time.Input 
            defaultValue={defaultValue}
            value={time}
            onChange={setTime}
        />
    </Time>
</Form.Group>
```