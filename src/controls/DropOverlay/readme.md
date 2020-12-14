```jsx
import React, { useState } from 'react';

const [selected, setSelected] = useState();

const handleClick = (e) => {
    console.log(e);
}

<DropOverlay id="example-dropoverlay-component">
    <DropOverlay.Button theme="outline-info">DropOverlay button</DropOverlay.Button>

    <DropOverlay.Menu positionRight>
        <h6 className="dropdown-header">DropOverlay header</h6>

        <DropOverlay.Menu.Item onClick={handleClick}>
            Action
        </DropOverlay.Menu.Item>

        <DropOverlay.Menu.Item onClick={handleClick}>
            Another action
        </DropOverlay.Menu.Item>

        <DropOverlay.Menu.Item onClick={handleClick}>
            Disabled action
        </DropOverlay.Menu.Item>

        <div className="dropdown-divider"></div>

        <DropOverlay.Menu.Item onClick={handleClick}>
            Separated link
        </DropOverlay.Menu.Item>
    </DropOverlay.Menu>
</DropOverlay>
```

### Best Practices

* Only use DropOverlays to hide infrequently used features. Users should not require a feature daily that is hidden behind a DropOverlays.
* Avoid using split DropOverlay buttons. It can be confusing to the end user that there are two distinct buttons with different actions.
