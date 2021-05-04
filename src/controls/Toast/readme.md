### Message API

API for the Toast's `show()` method.

| Name       | Type                  | Default | Description                                                                                            |
|------------|-----------------------|---------|--------------------------------------------------------------------------------------------------------|
| `severity` | string                |         | Severity of the message. One of the following:<br>   - success<br>   - info<br>   - warn<br>   - error |
| `summary`  | JSX Element or string |         | Summary content of the message.                                                                        |
| `detail`   | JSX Element or string |         | Detail content of the message.                                                                         |
| `content`  | any                   |         | Custom content of the message. If enabled, summary and details properties are ignored.                 |
| `closable` | boolean               | true    | Whether the message can be closed manually using the close icon.                                       |
| `sticky`   | boolean               |         | When enabled, message is not removed automatically.                                                    |
| `life`     | number                | 3000    | Delay in milliseconds to close the message automatically.                                              |
|            |                       |         |                                                                                                        |

### Examples

```jsx
import { useToast, ToastProvider, Button } from '@ORIS/ui';

const toast = useToast();

<ToastProvider>
    <h5>Severities</h5>
    <Button 
        theme="success"
        onClick={() => {
            toast.show({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Form submitted!'
            })
        }}
    >
        Success
    </Button>

    <Button
        theme="info"
        onClick={() => {
            toast.show({
                severity: 'info',
                summary: 'Info Message',
                detail: 'Message content'
            })
        }}
    >
        Info
    </Button>

    <Button
        theme="warning"
        onClick={() => {
            toast.show({
                severity: 'warn',
                summary: 'Warning Message',
                detail: 'Message content'
            })
        }}
    >
        Warn
    </Button>

    <Button
        theme="danger"
        onClick={() => {
            toast.show({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Message content'
            })
        }}
    >
        Error
    </Button>

    <hr/>

    <h5>Options</h5>
    <Button 
        theme="primary"
        onClick={() => {
            toast.show([
                {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
                {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
                {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
            ]);
        }}
    >
        Multiple
    </Button>

    <Button
        theme="info"
        onClick={() => {
            toast.show({
                severity: 'info', 
                summary: 'Sticky Message',
                detail: 'Message Content', 
                sticky: true
            })
        }}
    >
        Sticky
    </Button>

    <hr/>

    <h5>Clear</h5>
    <Button theme="secondary" onClick={() => toast.clear()}>Clear</Button>
</ToastProvider>
```

### Set up and use Toasts in your application
To make it easier to incorporate Toasts into your app, a `useToast` hook is provided in ORIS/ui. To use this hook (more instructions below), a `ToastProvider` must be added to your application's `App.tsx`.

#### How to set up `ToastProvider` in `App.tsx`

1 - In `App.tsx`, add `ToastProvider` to the @ORIS/ui imports
```jsx static
import {
    OhioStateNavbar,
    Navbar,
    Footer,
    ToastProvider
} from '@ORIS/ui';
```

2 - Wrap the `ToastProvider` around the app's main content.
```jsx static
<main id="content">
    <ToastProvider>
        <Switch>
            <Route exact path="/" component={Workspace} />
            <Route component={NotFound} />
        </Switch>
    </ToastProvider>
</main>
```

#### How to use the `useToast` hook

In your component, import the `useToast` hook from ORIS/ui. Once you need to display a toast message (such as after a form submission), invoke Toast's `show` method on the toast ref.

```jsx static
import { useToast } from '@ORIS/ui';

const MyToastyComponent = () => {
    const toast = useToast();

    // Fire off a message by invoking Toast's `show` method
    toast?.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Form submitted!'
    });
}
```