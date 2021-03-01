
```jsx static
<Number.Input
    min={5}
    max={100}
    step={5}
/>
```

```js noeditor
import { Icon } from '@ORIS/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and will be automatically associated with the <code>Number.Label</code>.
    </p>
</div>
```