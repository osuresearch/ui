
By default, the content iframe inside the editor uses a CSS file in the Assets project. You can provide your own app-specific CSS by providing an alternative source file in `contentsCss`.

#### Examples:

Provide the HTML value as a string

```jsx
import { Text } from '@ORIS/ui';

const html = "<h1>Hello World</h1><p>I am <strong>rich</strong> text!</p>";

<Text id="rich-text-editor">
    <Text.Label>Rich Text Editor input</Text.Label>

    <Text.Rich defaultValue={html} />
</Text>
```

Read Only
```jsx
import { Text } from '@ORIS/ui';

const html = "<h1>Hello World</h1><p>I am <strong>rich</strong> text!</p>";

<Text id="rich-text-editor-read-only" readOnly>
    <Text.Label>Rich Text Editor input</Text.Label>

    <Text.Rich defaultValue={html} />
</Text>
```

A "simple" UI version is also available if you do not need (or want) the full range of controls in your app:

```jsx
import { Text } from '@ORIS/ui';

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
import { Form, Text } from '@ORIS/ui';

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

Use `<Text.Rich>` with React Hook Form (v7)

*Since `<Text.Rich>` is a controlled component, it must be wrapped in a React Hook Form `<Controller>` component.*

```jsx
import { useForm, Controller } from 'react-hook-form';
import { Form, Text } from '@ORIS/ui';

const { control, watch, formState: { errors } } = useForm({
    mode: "onBlur",
    defaultValues: {
        "rhf-set-change-values": "<p>Start typing and see it update live</p>"
    }
});

<Form>
    <Text
        id="rhf-set-change-values"
        error={errors['rhf-set-change-values'] && 'Enter Text Above'}
        required
    >
        <Text.Label>Live Update in React Hook Form with <code>watch()</code></Text.Label>

        <Controller
            control={control}
            name="rhf-set-change-values"
            rules={{ required: true }}
            render={({
                field: { onChange, onBlur, value, name}
            }) =>
                <Text.Rich
                    name={name}
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

Full example of supported DOM elements:

```jsx
import { useState } from 'react';
import { Form, Text } from '@ORIS/ui';

const [content, setContent] = useState('<div class="h1">header 1</div> <p>this is <strong>rich</strong> <em>content</em> under header 1</p> <div class="h2">header 2</div> <pre> this is formatted content under header 2!</pre> <div class="h3">header 3</div> <p>this is content under header 3</p> <ol> <li>A numbered list</li> <li>can be included here</li> </ol> <p><s>There is no header 4 through 6</s></p> <ul> <li>And this</li> <li>is a</li> <li>bulleted</li> <li>list</li> </ul> <blockquote> <p>This is a block quote</p> <p>- Chase</p> </blockquote> <p><a href="https://research.osu.edu">OR Homepage</a> link</p> <table border="1" cellpadding="1" cellspacing="1" style="width:500px" summary="Summary of my table"> <caption>This is a table caption</caption> <thead> <tr> <th scope="col">left column</th> <th scope="col">right column</th> </tr> </thead> <tbody> <tr> <td>this is content 1</td> <td>content 2</td> </tr> <tr> <td>and some third content</td> <td>and some fourth</td> </tr> </tbody> </table> <p>&nbsp;</p>');

<Form>
    <Text id="rich-all-dom-example" onChange={setContent}>
        <Text.Label>Sample</Text.Label>

        <Text.Rich defaultValue={content} />
    </Text>

    Raw Content
    <p><code>{content}</code> </p>
</Form>
```
