### Examples

#### Basic Implementation

```jsx
import { Form, Checkbox } from '@oris/ui';

<Form.Group>
    <FieldSet id="colors">
        <FieldSet.Legend>
            Collection of checkboxes in a <code>FieldSet</code>
        </FieldSet.Legend>

        <Checkbox id="rgb">
            <Checkbox.Input />
            <Checkbox.Label>RGB</Checkbox.Label>
        </Checkbox>

        <Checkbox id="cmyk">
            <Checkbox.Input />
            <Checkbox.Label>CMYK</Checkbox.Label>
        </Checkbox>

        <Checkbox id="hsl">
            <Checkbox.Input disabled />
            <Checkbox.Label>HSL</Checkbox.Label>
        </Checkbox>

        <FieldSet.Help>
            Use a <strong>1em</strong> padding between elements in the same <code>FieldSet</code>
        </FieldSet.Help>
    </FieldSet>
</Form.Group>
```

#### Radio FieldSet
```jsx
import { Form, Radio } from '@oris/ui';

<Form.Group>
    <FieldSet id="color-1">
        <FieldSet.Legend>
            Collection of radio buttons
        </FieldSet.Legend>

        <Radio id="rgb-123">
            <Radio.Input />
            <Radio.Label>RGB</Radio.Label>
        </Radio>

        <Radio id="cmyk-123">
            <Radio.Input />
            <Radio.Label>CMYK</Radio.Label>
        </Radio>

        <Radio id="hsl-123">
            <Radio.Input />
            <Radio.Label>HSL</Radio.Label>
        </Radio>

        <FieldSet.Help>
            Add <code>required</code> to the containing <code>FieldSet</code> to create required forms
        </FieldSet.Help>
    </FieldSet>
</Form.Group>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Radio, Button } from '@oris/ui';

const [error, setError] = useState('');

<Form.Group>
    <FieldSet id="yes-no-123" error={error} required>
        <FieldSet.Legend>FieldSet with an error</FieldSet.Legend>

        <Radio id="yes-123">
            <Radio.Input />
            <Radio.Label>Yes</Radio.Label>
        </Radio>

        <Radio id="no-123">
            <Radio.Input />
            <Radio.Label>No</Radio.Label>
        </Radio>

        <FieldSet.Help>
            A short list of options (e.g. yes/no)
            may be horizontally aligned with <strong>2em</strong> padding between options
        </FieldSet.Help>

        <FieldSet.Error />
    </FieldSet>

    <Button theme="primary" onClick={() => setError('You must select an option')}>Trigger Error</Button>
</Form.Group>
```

#### Inline
```jsx
import { Form, Radio } from '@oris/ui';

<Form.Group>
    <FieldSet id="yes-no-456">
        <FieldSet.Legend>
            A common yes/no radio pattern
        </FieldSet.Legend>

        <FieldSet.Inline>
            <Radio id="yes-456">
                <Radio.Input />
                <Radio.Label>Yes</Radio.Label>
            </Radio>

            <Radio id="no-456">
                <Radio.Input />
                <Radio.Label>No</Radio.Label>
            </Radio>
        </FieldSet.Inline>

        <FieldSet.Help>
            A short list of options (e.g. yes/no) may be horizontally aligned with <strong>2em</strong> padding between options
        </FieldSet.Help>
    </FieldSet>
</Form.Group>
```

### Accessibility Guidelines

`<Radio>` buttons must be wrapped in a `<FieldSet>` and include a `<FieldSet.Legend>` element as the first child for screen readers. The legend is your primary fieldset description.