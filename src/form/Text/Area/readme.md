
Sub-component will inherit `id`, `onChange`, and `readOnly` props from parent component.

#### Examples:

Basic `<Text.Area>`
```jsx
import { Text } from '@ORIS/ui';

<Text id="textarea-sample" required>
    <Text.Label>Basic textarea</Text.Label>

    <Text.Area
        placeholder="You may include a placeholder, but it must not contain important information."
        rows={3}
    />

    <Text.Help>
        Textareas may expand vertically but <strong>not</strong> horizontally outside their defined container.
    </Text.Help>
</Text>
```

Basic `<Text.Area>` with React Hook Form (v7)
```jsx
import { useForm } from 'react-hook-form';
import { Text } from '@ORIS/ui';

const { register, formState: { errors } } = useForm({ mode: "onBlur" });

<Text
    id="rhf-textarea-sample"
    error={errors['rhf-textarea-sample'] && 'This is required'}
    required
>
    <Text.Label>Basic textarea</Text.Label>

    <Text.Area
        placeholder="You may include a placeholder, but it must not contain important information."
        rows={3}
        {...register('rhf-textarea-sample', {
            required: true
        })}
    />

    <Text.Error />

    <Text.Help>
        Textareas may expand vertically but <strong>not</strong> horizontally outside their defined container.
    </Text.Help>
</Text>
```

`<Text.Area>` with Not Applicable option
```jsx
import { Text, FieldSet, Checkbox } from '@ORIS/ui';

<FieldSet>
    <Text id="textarea-with-na">
        <Text.Label>
            Textarea with Not Applicable option - a common pattern used in our apps
        </Text.Label>
        <Text.Area rows={3} />
    </Text>

    <Checkbox id="na-check">
        <Checkbox.Input />
        <Checkbox.Label>Not Applicable</Checkbox.Label>
    </Checkbox>

    <FieldSet.Help>
        Use a <strong>1em</strong> padding between elements in the same <code>div</code>
    </FieldSet.Help>
</FieldSet>
```

```js noeditor
import { Icon } from '@ORIS/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The sub-component will inherit the <code>id</code> from the parent component and will be automatically associated with the <code>Text.Label</code>.
    </p>
</div>
```

Read Only
```jsx
import { Text } from '@ORIS/ui';

<Text id="textarea-sample-readOnly" required readOnly>
    <Text.Label>Basic textarea</Text.Label>

    <Text.Area
        rows={3}
        defaultValue={
`Aenean ultrices feugiat purus, tristique convallis purus tempus sed. Curabitur in sapien vel dui laoreet luctus nec sed massa. Aenean diam magna, sollicitudin ac dignissim quis, facilisis sed enim. Duis vehicula non mauris ac pellentesque. Quisque iaculis lobortis convallis. Duis eu volutpat purus. Sed eu lacus id eros rhoncus volutpat quis id ipsum. Curabitur finibus sit amet dolor id aliquet. Fusce nec nisi id mi posuere mattis quis vel libero.

Maecenas molestie sodales tortor, in accumsan massa laoreet id. Ut euismod tortor quis augue sodales porta. Nunc quis mi libero. Praesent lacinia blandit mi, ut gravida neque hendrerit ut. Vivamus porttitor nisi eget tincidunt venenatis. Nunc ac consectetur velit. Morbi viverra mattis magna consequat ultricies. Fusce sit amet faucibus est. Phasellus luctus magna vitae nunc porta, a pulvinar ante ultrices. Aliquam lorem enim, tincidunt ornare laoreet vel, lobortis vitae quam. Donec in posuere tellus. Duis ac enim elit. Fusce efficitur nulla non ex blandit congue.

Phasellus nec eleifend nisi. Praesent pharetra nisi in justo vehicula lobortis. Pellentesque sodales lacus sit amet tortor maximus, vitae iaculis tellus eleifend. Donec scelerisque massa ac consequat scelerisque. Maecenas nec varius odio. Nunc sem neque, sodales semper nisi in, cursus dignissim metus. Proin id vehicula mi, non feugiat sem. Donec auctor ultrices orci vel rutrum.
        `}
    />

    <Text.Help>
        Textareas may expand vertically but <strong>not</strong> horizontally outside their defined container.
    </Text.Help>
</Text>
```
