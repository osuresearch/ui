
#### Examples:

```jsx
import { useState } from 'react';
import { Form, Button, Text } from '@osuresearch/ui';
import MockAutocomplete from '@osuresearch/ui/search/drivers/MockAutocomplete';

const [readOnly, setReadOnly] = useState(false);
const [error, setError] = useState('');
const [value, setValue] = useState('Foo Bar');
const [prev, setPrev] = useState('');

const onChange = (currentValue, prevValue) => {
    console.debug('called onChange');
    setPrev(prevValue);
}

<Form>
    <Text id="autocomplete-example" name="autocomplete-example" readOnly={readOnly} error={error} onChange={onChange}>
        <Text.Label>
            Label here
        </Text.Label>

        <Text.Autocomplete
            driver={MockAutocomplete()}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
        />

        <Text.Help>
            Type 'and', 'foo', or 'fizz' to see suggestions
        </Text.Help>

        <Text.Error />
    </Text>

    <Button onClick={() => setReadOnly(!readOnly)}>
        Toggle Read Only
    </Button>

    <Button onClick={() => setError(error ? '' : 'Do better')}>
        Toggle Error
    </Button>

    <hr/>
    <p>Current value: {value}</p>
    <p>Previous value: {prev}</p>
</Form>
```
