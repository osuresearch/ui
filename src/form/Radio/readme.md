### Examples

```jsx
<Radio id="only-in-set">
    <Radio.Input />
    <Radio.Label>I only go into a <code>Set</code></Radio.Label>
</Radio>
```


<!-- 
### Examples

#### Basic Implementation

```jsx
import { Form } from '@oris/ui';

<Form>
    <Form.Group>
        <Checkbox id="receive-newsletter">
            <Checkbox.Input />

            <Checkbox.Label>
                Yes! I would like to receive your newsletter
            </Checkbox.Label>

            <Checkbox.Help>
                We will not spam your inbox
            </Checkbox.Help>
        </Checkbox>
    </Form.Group>
</Form>
```

#### Disabled field
```jsx
import { Form } from '@oris/ui';

<Form>
    <Form.Group>
        <Checkbox id="checkbox-disabled">
            <Checkbox.Input disabled />
            <Checkbox.Label>
                This checkbox field is disabled
            </Checkbox.Label>
        </Checkbox>
    </Form.Group>
</Form>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Button } from '@oris/ui';

const [error, setError] = useState();
const [success, setSuccess] = useState();

<Form>
    <Form.Group>
        <Checkbox id="terms" error={error} success={success}>
            <Checkbox.Input required />

            <Checkbox.Label>
                I agree to the terms and services
            </Checkbox.Label>

            <Checkbox.Error />
            <Checkbox.Success />
        </Checkbox>
    </Form.Group>

    <Form.Group>
        <Button theme='danger' onClick={() => {
            setSuccess();
            setError('You must accept the terms and services');
        }}>Show Error</Button>

        <Button theme='success' onClick={() => {
            setError();
            setSuccess('Thank you for accepting the terms and services');
        }}>Show Success</Button>
    </Form.Group>
</Form>
``` -->