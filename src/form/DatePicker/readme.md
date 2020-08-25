### Examples

#### Basic Implementation

```jsx
import { useState, useRef } from 'react';
import { Form } from '@oris/ui';
const [date, setDate] = useState();

const ref = useRef();

<Form.Group>
    <DatePicker id="choose-date">
        <DatePicker.Label>Choose a date</DatePicker.Label>

        <DatePicker.Input
            selected={date}
            onChange={setDate}
            ref={ref}
        />
    </DatePicker>
</Form.Group>
```
#### Specify custom range for selectable dates

```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';
const [date, setDate] = useState();

const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
};

<Form.Group>
    <DatePicker id="choose-weekday">
        <DatePicker.Label>Choose a weekday</DatePicker.Label>

        <DatePicker.Input
            selected={date}
            onChange={setDate}
            minDate={new Date('2020-01-01T00:00:00-05:00')}
            maxDate={new Date('2025-12-31T00:00:00-05:00')}
            filterDate={isWeekday}
        />
    </DatePicker>
</Form.Group>
```

#### Include a `<Time>` field with the calendar
```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';
const [date, setDate] = useState();

<Form.Group>
    <DatePicker id="choose-date-time">
        <DatePicker.Label>Choose a date and time</DatePicker.Label>

        <DatePicker.Input
            selected={date}
            onChange={setDate}
            showTimeInput
        />
    </DatePicker>
</Form.Group>
```