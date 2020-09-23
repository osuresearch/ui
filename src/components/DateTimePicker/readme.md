
### Examples

```jsx
import { useState } from 'react';
const [dateTime, setDateTime] = useState(new Date());

<>
    <label htmlFor='appointment-datetime'>Choose an appointment date and time</label>
    <DateTimePicker
        id='appointment-datetime'
        defaultValue={dateTime}
        onChange={setDateTime}
    />
</>
```
#### Specify custom range for selectable dates

```jsx
import { useState } from 'react';
const [dateTime, setDateTime] = useState(new Date());

const isWeekday = (dateTime) => {
    const day = dateTime.getDay();
    return day !== 0 && day !== 6;
};

<>
    <label htmlFor='appointment-datetime-weekday'>Choose an appointment date and time</label>
    <DateTimePicker
        id='appointment-datetime-weekday'
        defaultValue={dateTime}
        onChange={setDateTime}
        minDate={new Date('2020-01-01T00:00:00-05:00')}
        maxDate={new Date('2025-12-31T00:00:00-05:00')}
        filterDate={isWeekday}
    />
</>
```
