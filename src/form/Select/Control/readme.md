
Sub-component will inherit `id`, `onChange`, and `readOnly` props from parent component.

```jsx static
<Select.Control>
    <Select.Option value="1">One</Select.Option>
    <Select.Option value="2">Two</Select.Option>
    <Select.Option value="3">Three</Select.Option>
</Select.Control>
```

```js noeditor
import { Icon } from '@ORIS/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and will be automatically associated with the <code>Select.Label</code>.
    </p>
</div>
```