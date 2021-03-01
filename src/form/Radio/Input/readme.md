
Sub-component will inherit `id`, `onChange`, and `readOnly` props and methods from parent component.

```jsx static
<Radio.Input value='pork' />
```

```js noeditor
import { Icon } from '@ORIS/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and will be automatically associated with the <code>Radio.Label</code>.
    </p>
</div>
```