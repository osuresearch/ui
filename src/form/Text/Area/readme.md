
### Examples


Basic `<Text.Area>`
```jsx
import { Text } from '@oris/ui';

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

`<Text.Area>` with Not Applicable option
```jsx
import { Text, FieldSet, Checkbox } from '@oris/ui';

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
