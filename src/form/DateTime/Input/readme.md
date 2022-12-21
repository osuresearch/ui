
Sub-component will inherit `id` and `readOnly` props from parent component.

```jsx static
import { useState } from 'react';
const [date, setDate] = useState('2020-09-25T22:27:39+0000');

<DateTime.Input
    value={date}
    onChange={setDate}
/>
```

```js noeditor
import { Icon } from '@osuresearch/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and will be automatically associated with the <code>DateTime.Label</code>.
    </p>
</div>
```