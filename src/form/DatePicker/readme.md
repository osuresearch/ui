### Examples

```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';
const [date, setDate] = useState(new Date());

<Form>
    <Form.Group>
        <DatePicker id="choose-date">
            <DatePicker.Label>Choose a date</DatePicker.Label>

            <DatePicker.Input
                defaultValue={date}
                onChange={setDate}
            />
        </DatePicker>
    </Form.Group>
</Form>
```
#### Specify custom range for selectable dates

```jsx
import { useState } from 'react';
import { Form } from '@oris/ui';
const [date, setDate] = useState(new Date());

const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
};

<Form>
    <Form.Group>
        <DatePicker id="choose-weekday">
            <DatePicker.Label>Choose a weekday</DatePicker.Label>

            <DatePicker.Input 
                defaultValue={date}
                onChange={setDate}
                minDate={new Date('2020-01-01T00:00:00-05:00')}
                maxDate={new Date('2025-12-31T00:00:00-05:00')}
                filterDate={isWeekday}
            />
        </DatePicker>
    </Form.Group>
</Form>
```