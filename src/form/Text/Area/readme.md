
### Examples


Basic `<Text.Area>`
```jsx
import { Form, Text } from '@oris/ui';

<Form.Group>
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
</Form.Group>
```

`<Text.Area>` with Not Applicable option
```jsx
import { Text, Form, FieldSet, Checkbox } from '@oris/ui';

<Form.Group>
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
</Form.Group>
```
