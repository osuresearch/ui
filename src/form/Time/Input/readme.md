
Sub-component will inherit `id` and `readOnly` props from parent component.

```jsx static
const [time, setTime] = useState('15:30');

<Time.Input
    value={time}
    onChange={setTime}
/>
```

```js noeditor
import { Icon } from '@osuresearch/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and will be automatically associated with the <code>Text.Label</code>.
    </p>
</div>
```