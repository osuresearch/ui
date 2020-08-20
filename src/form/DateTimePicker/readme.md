
### Examples

```jsx
import { useState } from 'react';

const [dateTime, setDateTime] = useState(new Date());

<DateTimePicker id="appointment-datetime">
    <DateTimePicker.Label>
        Choose an appointment date and time
    </DateTimePicker.Label>

    <DateTimePicker.Input 
        defaultValue={dateTime}
        onChange={setDateTime}    
    />
</DateTimePicker>
```

#### Specify custom range for selectable dates

```jsx
import { useState } from 'react';
const [dateTime, setDateTime] = useState(new Date());

const isWeekday = (dateTime) => {
    const day = dateTime.getDay();
    return day !== 0 && day !== 6;
};

<DateTimePicker id="appointment-datetime-weekday">
    <DateTimePicker.Label>
        Choose an appointment date and time
    </DateTimePicker.Label>

    <DateTimePicker.Input 
        defaultValue={dateTime}
        onChange={setDateTime}
        minDate={new Date('2020-01-01T00:00:00-05:00')}
        maxDate={new Date('2025-12-31T00:00:00-05:00')}
        filterDate={isWeekday}
    />
</DateTimePicker>
```
