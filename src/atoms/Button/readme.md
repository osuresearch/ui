
### Examples

Default button with a click event handler.

```jsx
<Button onClick={() => alert('Pressed!')}>Press Me</Button>
```

Small themed button

```jsx
<Button
    className="btn-sm"
    theme="danger"
    onClick={() => alert('Deleted!')}
>Delete</Button>
```

Link button (will render as a React Router Link themed to look like a button):

```jsx
import { MemoryRouter } from 'react-router';

{/* Memory router is used here to be able to use React Router
    in the demo code. Do not include it in your app */}
<MemoryRouter>
    <Button theme="link">Go Home</Button>
</MemoryRouter>
```

### Themes

Filled buttons for primary actions, such as submitting a form

```jsx
<Button theme="primary">Primary</Button>
<Button theme="secondary">Secondary</Button>
<Button theme="success">Success</Button>
<Button theme="info">Info</Button>
<Button theme="warning">Warning</Button>
<Button theme="danger">Danger</Button>
```

Outline buttons for secondary (less important / focused) actions, such as cancel buttons or delete

```jsx
<Button theme="outline-primary">Primary</Button>
<Button theme="outline-secondary">Secondary</Button>
<Button theme="outline-success">Success</Button>
<Button theme="outline-info">Info</Button>
<Button theme="outline-warning">Warning</Button>
<Button theme="outline-danger">Danger</Button>
```

Examples of buttons with icons.

```jsx
import { Icon } from '@ORIS/ui';

<div>
    <Button theme="outline-secondary">
        <Icon name="envelope-o">Send email</Icon>
    </Button>

    <Button theme="danger">
        <Icon name="trash">Delete</Icon>
    </Button>
</div>
```

Do not combine icons and words together in buttons, unless it is to represent some sort of active state such as saving in progress:

```jsx
import { Icon } from '@ORIS/ui';

<Button disabled={true}>
    <Icon name="spinner" spin={true} /> Saving...
</Button>
```
