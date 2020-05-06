
### Requirements

Include the following CDN script in your application.

```html
<script src="https://cdn.ckeditor.com/ckeditor5/19.0.0/decoupled-document/ckeditor.js"></script>
```

### Examples

```js
// Provide the HTML value as a string
const html = "<h1>Hello World</h1><p>I am <strong>rich</strong> text!</p>";

<Richtext defaultValue={html} />
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