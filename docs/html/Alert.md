
### Examples

```js
import { Icon } from '@oris/ui';

<div className="alert alert-primary" role="alert">
    <Icon name="question" circled={true} />
    <p>
        Primary alert box, using <code>.alert.alert-primary</code>
    </p>
</div>
```

```js
import { Icon } from '@oris/ui';

<div className="alert alert-secondary" role="alert">
    <Icon name="info" circled={true} />
    <p>
        Secondary alert box, using <code>.alert.alert-secondary</code>
    </p>
</div>
```

Other alert themes:

```js
import { Icon } from '@oris/ui';

<div>
    <div className="alert alert-dark" role="alert">
        <p>
            Dark alert box. If you don't feel an icon helps
            convey your message, you can leave it out.
        </p>
    </div>

    <div className="alert alert-success" role="alert">
        <Icon name="check" circled={true} />
        <p>
            Success alert box, using <code>.alert.alert-success</code>
        </p>
    </div>

    <div className="alert alert-danger" role="alert">
        <Icon name="exclamation" circled={true} />
        <p>
            Error alert box, using <code>.alert.alert-danger</code>
        </p>
    </div>

    <div className="alert alert-warning" role="alert">
        <Icon name="eye" circled={true} />
        <p>
            Warning alert box, using <code>.alert.alert-warning</code>
        </p>
    </div>
</div>
```

You can add `.alert-banner` to create an alert that spans across the entire container. Useful for flash message banners or system alerts.

```js
<div className="alert alert-success alert-banner" role="alert">
    <p>Form saved successfully!</p>
</div>
```
