
Sub-component will inherit `id`, `onChange`, and `readOnly` props from parent component.

#### Examples:

Basic Implementation

```jsx
import { Text } from '@osuresearch/ui';

<Text id="foo-email">
    <Text.Label>Provide your email address</Text.Label>
    <Text.Email />
    <Text.Error />
</Text>
```

Basic Implementation with React Hook Form (v7)

```jsx
import { useForm } from 'react-hook-form';
import { Text } from '@osuresearch/ui';

const { register } = useForm({ mode: "onBlur" });

<Text id="rhf-email">
    <Text.Label>Provide your email address</Text.Label>
    <Text.Email {...register('rhf-email')} />
    <Text.Error />
</Text>
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