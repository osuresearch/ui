### Examples

```jsx
import { useState } from 'react';
const [date, setDate] = useState(new Date());

<>
    <label htmlFor='choose-date'>Choose a date</label>
    <DatePicker
        id='choose-date'
        defaultValue={date}
        onChange={setDate}
    />
</>
```
#### Specify custom range for selectable dates

```jsx
import { useState } from 'react';
const [date, setDate] = useState(new Date());

const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
};

<>
    <label htmlFor='choose-weekday'>Choose a weekday</label>
    <DatePicker
        id='choose-weekday'
        defaultValue={date}
        onChange={setDate}
        minDate={new Date('2020-01-01T00:00:00-05:00')}
        maxDate={new Date('2025-12-31T00:00:00-05:00')}
        filterDate={isWeekday}
    />
</>
```