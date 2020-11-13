```jsx
import React, { useState } from 'react';

const [selected, setSelected] = useState();

const handleClick = (e) => {
    console.log(e);
}

<Drop id="example-drop-component">
    <Drop.Button>Drop button</Drop.Button>

    <Drop.Menu>
        <h6 className="dropdown-header">Drop header</h6>

        <Drop.Menu.Item onClick={handleClick}>
            Action
        </Drop.Menu.Item>

        <Drop.Menu.Item onClick={handleClick}>
            Another action
        </Drop.Menu.Item>

        <Drop.Menu.Item onClick={handleClick}>
            Disabled action
        </Drop.Menu.Item>

        <div className="dropdown-divider"></div>

        <Drop.Menu.Item onClick={handleClick}>
            Separated link
        </Drop.Menu.Item>
    </Drop.Menu>
</Drop>
```

### Best Practices

* Only use dropdowns to hide infrequently used features. Users should not require a feature daily that is hidden behind a dropdown.
* Avoid using split dropdown buttons. It can be confusing to the end user that there are two distinct buttons with different actions.
