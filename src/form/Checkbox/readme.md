
### Examples

#### Basic Implementation

```jsx
<Checkbox id="receive-newsletter">
    <Checkbox.Input />

    <Checkbox.Label>
        Yes! I would like to receive your newsletter
    </Checkbox.Label>

    <Checkbox.Help>
        We will not spam your inbox
    </Checkbox.Help>
</Checkbox>
```

#### Disabled field
```jsx
<Checkbox id="checkbox-disabled">
    <Checkbox.Input disabled />
    <Checkbox.Label>
        This checkbox field is disabled
    </Checkbox.Label>
</Checkbox>
```

#### Validation
```jsx
import { useState } from 'react';
import { Button } from '@oris/ui';

const [error, setError] = useState();
const [success, setSuccess] = useState();

<div>
    <Checkbox id="terms" error={error} success={success}>
        <Checkbox.Input required />

        <Checkbox.Label>
            I agree to the terms and services
        </Checkbox.Label>

        <Checkbox.Error />
        <Checkbox.Success />
    </Checkbox>

    <div className='mt-3'>
        <Button theme='danger' onClick={() => {
            setSuccess();
            setError('You must accept the terms and services');
        }}>Show Error</Button>

        <Button theme='success' onClick={() => {
            setError();
            setSuccess('Thank you for accepting the terms and services');
        }}>Show Success</Button>
    </div>
</div>
```