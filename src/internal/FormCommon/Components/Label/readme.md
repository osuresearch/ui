```jsx static
<X.Label>
    Small help text
</X.Label>
```

```js noeditor
<div className="alert alert-dark">
    <p><strong>Note:</strong> <code>X</code> represents the parent component (i.e. <code>Checkbox</code>, <code>Text</code>, <code>FieldSet</code>, etc.)</p>
</div>
```

```js noeditor
import { Icon } from '@oris/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and automatically set it as <code>htmlFor</code>.
    </p>
</div>
```