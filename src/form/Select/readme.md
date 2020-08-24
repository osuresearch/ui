
### Examples

#### Basic Implementation
```jsx
import { Form } from '@oris/ui';

<Form.Group>
    <Select id="color-select">
        <Select.Label>Select a Color Profile</Select.Label>

        <Select.Control>
            <Select.Option value="">
                -- Please choose an option --
                </Select.Option>
            <Select.Option value="RGB">RGB</Select.Option>
            <Select.Option value="CMYK">CMYK</Select.Option>
            <Select.Option value="HSL">HSL</Select.Option>
        </Select.Control>

        <Select.Help>
            Some additional help text here
        </Select.Help>
    </Select>
</Form.Group>
```

#### Using `optionsBind` in React Flow
```jsx
import { Form } from '@oris/ui';

const dropdownOptions = {
       value: {
          cheddar: 'Cheddar Cheese',
          feta: 'Feta Cheese'
        }
    };

<Form.Group>
    <Select id="bind-options">
        <Select.Label>Binding Options</Select.Label>

        <Select.Control>
            <Select.Option optionsBind={dropdownOptions} />
        </Select.Control>

        <Select.Help>
            Some additional help text here
        </Select.Help>
    </Select>
</Form.Group>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Button } from '@oris/ui';

const [error, setError] = useState('');
const [success, setSuccess] = useState('');

<Form>
    <Form.Group>
        <Select id="error-example" error={error} success={success} required>
            <Select.Label>Which color model is used for print?</Select.Label>

            <Select.Control name="color-profiles">
                <Select.Option value="">
                    -- Please choose an option --
                </Select.Option>
                <Select.Option value="RGB">RGB</Select.Option>
                <Select.Option value="CMYK">CMYK</Select.Option>
                <Select.Option value="HSL">HSL</Select.Option>
            </Select.Control>

            <Select.Error />

            <Select.Success />

            <Select.Help>
                Some additional help text here
            </Select.Help>
        </Select>
    </Form.Group>

    <Button theme='danger' onClick={() => {
        setSuccess('');
        setError('You must select a color profile');
    }}>Trigger Error</Button>

    <Button theme='success' onClick={() => {
        setError('');
        setSuccess('Your selection is correct');
    }}>Trigger Success</Button>
</Form>
```