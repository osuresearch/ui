#### Examples

```js
import { Icon } from '@ORIS/ui';

<Alert theme="primary" role="presentation">
    <Icon name="question" circled={true} />
    <p>
        Primary alert box, using <code>.alert.alert-primary</code>
    </p>
</Alert>
```

```js
import { Icon } from '@ORIS/ui';

<Alert theme="secondary" role="presentation">
    <Icon name="info" circled={true} />
    <p>
        Secondary alert box, using <code>.alert.alert-secondary</code>
    </p>
</Alert>
```

Other alert themes:

```js
import { Icon } from '@ORIS/ui';

<>
<Alert theme="dark" role="presentation">
    <p>
        Dark alert box. If you don't feel an icon helps convey your message, you can leave it out.
    </p>
</Alert>

<Alert theme="success" role="presentation">
    <Icon name="check" circled={true} />
    <p>
        Success alert box
    </p>
</Alert>

<Alert theme="danger" role="presentation">
    <Icon name="exclamation" circled={true} />
    <p>
        Error alert box
    </p>
</Alert>

<Alert theme="warning" role="presentation">
    <Icon name="eye" circled={true} />
    <p>
        Warning alert box
    </p>
</Alert>
</>
```

Dismissible alerts
```jsx
<Alert theme="warning" role="presentation" dismissible={true}>
    <p><strong>Holy guacamole!</strong> You should check in on some of those fields below.</p>
</Alert>
```

You can use the `banner` prop to create an alert that spans across the entire container. Useful for flash message banners or system alerts.

```js
<Alert theme="success" role="presentation" banner={true}>
    <p>Form saved successfully!</p>
</Alert>
```
