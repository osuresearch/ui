### Examples

#### Basic Implementation
```jsx
import { useState } from 'react';
const [date, setDate] = useState('2011-07-09');

<DateTime id="choose-date">
    <DateTime.Label>Choose a date</DateTime.Label>

    <DateTime.Input
        value={date}
        onChange={setDate}
    />

    <DateTime.Help>
        You may type in the field or select a date in the calendar
    </DateTime.Help>
</DateTime>
```

#### Basic Implementation with React Hook Form (v7)

Since `<DateTime>` is a controlled component, `<DateTime.Input>` must be wrapped in a React Hook Form `<Controller>` component.

```jsx
import { useForm, Controller } from 'react-hook-form';

const { control, watch } = useForm({ 
    mode: 'onBlur',
    defaultValues: {
        "rhf-choose-date": "2011-07-09"
    }
});
<>
<DateTime id="rhf-choose-date">
    <DateTime.Label>Choose a date</DateTime.Label>

    <Controller
        control={control}
        name="rhf-choose-date"
        render={({
            field: { onChange, onBlur, value, name },
        }) => (
            <DateTime.Input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />
        )}
    />

    <DateTime.Help>
        You may type in the field or select a date in the calendar
    </DateTime.Help>
</DateTime>

<hr/>
Value:
{watch("rhf-choose-date")}
</>
```

#### Specify custom range for selectable dates

```jsx
import { useState } from 'react';
const [date, setDate] = useState();

const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
};

<DateTime id="choose-weekday">
    <DateTime.Label>Choose a weekday</DateTime.Label>

    <DateTime.Input
        value={date}
        onChange={setDate}
        minDate={new Date('2020-01-01T00:00:00-05:00')}
        maxDate={new Date('2025-12-31T00:00:00-05:00')}
        filterDate={isWeekday}
    />
</DateTime>
```

#### Include a `<Time>` field with the calendar
```jsx
import { useState } from 'react';
const [date, setDate] = useState('2025-12-31T08:00:00-05:00');

<DateTime id="choose-date-time">
    <DateTime.Label>Choose a date and time</DateTime.Label>

    <DateTime.Input
        value={date}
        onChange={setDate}
        showTimeInput
    />
</DateTime>
```

### Subcomponents