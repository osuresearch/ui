### Examples
```jsx
import { useToast, ToastProvider, Button } from '@ORIS/ui';

const toast = useToast();

<ToastProvider>
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
</ToastProvider>
```

### Set up and use Toasts in your application
Toasts **should not** be added directly within individual components in your application. This is because any Toasts invoked within a component are destroyed whenever the component unmounts.

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
    toast.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Form submitted!'
    });
}
```