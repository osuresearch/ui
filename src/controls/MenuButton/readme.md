```jsx
import React, { useState } from 'react';

const [selected, setSelected] = useState();

const handleClick = (e) => {
    console.log(e);
}

<MenuButton id="example-drop-component">
    <MenuButton.Button>MenuButton button</MenuButton.Button>

    <MenuButton.Menu>
        <h6 className="dropdown-header">MenuButton header</h6>

        <MenuButton.Menu.Item onClick={handleClick}>
            Action
        </MenuButton.Menu.Item>

        <MenuButton.Menu.Item onClick={handleClick}>
            Another action
        </MenuButton.Menu.Item>

        <MenuButton.Menu.Item onClick={handleClick}>
            Disabled action
        </MenuButton.Menu.Item>

        <div className="dropdown-divider"></div>

        <MenuButton.Menu.Item onClick={handleClick}>
            Separated link
        </MenuButton.Menu.Item>
    </MenuButton.Menu>
</MenuButton>
```

### Best Practices

* Only use dropdowns to hide infrequently used features. Users should not require a feature daily that is hidden behind a dropdown.
* Avoid using split dropdown buttons. It can be confusing to the end user that there are two distinct buttons with different actions.
