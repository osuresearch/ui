
By default, the content iframe inside the editor uses a CSS file in the Assets project. You can provide your own app-specific CSS by providing an alternative source file in `contentsCss`. 

#### Examples:

Provide the HTML value as a string

```jsx
import { Text } from '@oris/ui';

const html = "<h1>Hello World</h1><p>I am <strong>rich</strong> text!</p>";

<Text id="rich-text-editor">
    <Text.Label>Rich Text Editor input</Text.Label>

    <Text.Rich defaultValue={html} />
</Text>
```

Read Only
```jsx
import { Text } from '@oris/ui';

const html = "<h1>Hello World</h1><p>I am <strong>rich</strong> text!</p>";

<Text id="rich-text-editor-read-only" readOnly>
    <Text.Label>Rich Text Editor input</Text.Label>

    <Text.Rich defaultValue={html} />
</Text>
```

A "simple" UI version is also available if you do not need (or want) the full range of controls in your app:

```jsx
import { Text } from '@oris/ui';

const html = "Hello World! <p>I am <strong>rich</strong> text!</p>";

<Text id="simple-rte">
    <Text.Label>I am a simple Rich Text Editor</Text.Label>

    <Text.Rich 
        defaultValue={html} 
        labelText='I am a simple Rich Text Editor'
        simple 
    />
</Text>
```

Use the `defaultValue` and `onChange` props to set and extract the text from your own component:

```jsx
import { useState } from 'react';
import { Form, Text } from '@oris/ui';

const [content, setContent] = useState('<p>Start typing and see it update live</p>');

<Form>
    <Text id="set-change-values" onChange={setContent}>
        <Text.Label>Live Update</Text.Label>

        <Text.Rich defaultValue={content} />
    </Text>

    Raw Content
    <p><code>{content}</code> </p>
</Form>
```

Use `<Text.Rich>` with React Hook Form

*Since `<Text.Rich>` is a controlled component, it must be wrapped in a React Hook Form `<Controller>` component.*

```jsx
import { useForm, Controller } from 'react-hook-form';
import { Form, Text } from '@oris/ui';

const { register, errors, control, watch } = useForm({ 
    mode: "onBlur",
    defaultValues: {
        "rhf-set-change-values": "<p>Start typing and see it update live</p>"
    }
});

<Form>
    <Text 
        id="rhf-set-change-values" 
        error={errors["rhf-set-change-values"] && "Enter Text Above"}
        required
    >
        <Text.Label>Live Update in React Hook Form with <code>watch()</code></Text.Label>

        <Controller
            control={control}
            name="rhf-set-change-values"
            rules={{ required: true }}
            render={({ onChange, onBlur, value }) => 
                <Text.Rich 
                    defaultValue={value} 
                    onChange={onChange}
                    onBlur={onBlur} // Notifies RHF to validate field
                />
            }
        />

        <Text.Error />
    </Text>

    Raw Content
    <p><code>{watch("rhf-set-change-values")}</code> </p>
</Form>
```