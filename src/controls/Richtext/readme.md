
### Requirements

Include the following CDN script in your application.

```html
<script src="https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js"></script>
```

By default, the content iframe inside the editor uses a CSS file in the Assets project. You can provide your own app-specific CSS by providing an alternative source file in `contentsCss`. 

### Examples

```js
// Provide the HTML value as a string
const html = "<h1>Hello World</h1><p>I am <strong>rich</strong> text!</p>";

<Richtext defaultValue={html} />
```

A "simple" version is also supplied if you do not need (or want) the full range of controls in your app:

```js
const html = "Hello World! <p>I am <strong>rich</strong> text!</p>";

<Richtext defaultValue={html} simple={true} />
```

Use the `defaultValue` and `onChange` props to set and extract the text from your own component:

```js
import { useState } from 'react';

function MyComponent() {
    const [content, setContent] = useState('<p>Start typing and see it update live</p>');
    
    return (
        <div>
            <Richtext defaultValue={content} onChange={setContent} />
            <hr />
            Raw Content
            <p><code>{content}</code> </p>
        </div>
    );
}

<MyComponent />
```
