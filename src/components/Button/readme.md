
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
import { Icon } from '@oris/ui';

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
import { Icon } from '@oris/ui';

<Button disabled={true}>
    <Icon name="spinner" spin={true} /> Saving...
</Button>
```
