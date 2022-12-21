Chips requires an array as its `value` and `onChange` callback to update the model.

[Chips documentation sourced from PrimeReact website](https://www.primefaces.org/primereact/showcase/#/chips)

### Examples

#### Basic
```jsx
import React, { useState } from 'react';

const [values, setValues] = useState([]);

<Chips id="chips">
    <Chips.Label>Chips</Chips.Label>

    <Chips.Input
        value={values}
        onChange={(e) => setValues(e.value)}
    />

    <Chips.Help>
        Press the enter key between each chip
    </Chips.Help>
</Chips>
```

#### Comma Separator
```jsx
import React, { useState } from 'react';

const [values, setValues] = useState([]);

<Chips id="tags">
    <Chips.Label>Tags</Chips.Label>

    <Chips.Input
        value={values}
        onChange={(e) => setValues(e.value)}
        separator=","
    />

    <Chips.Help>
        Separate chips with commas
    </Chips.Help>
</Chips>
```

#### Custom Content

A chip is customized using `itemTemplate` function where value is passed to return JSX.

```jsx
import React, { useState } from 'react';
import { Icon } from '@osuresearch/ui';

const [values, setValues] = useState([]);

const customChip = (item) => {
    return (
        <div>
            {item} - (active) <Icon name='user-plus' />
        </div>
    )
}

<Chips id="users">
    <Chips.Label>Users</Chips.Label>

    <Chips.Input
        value={values}
        onChange={(e) => setValues(e.value)}
        max={5}
        itemTemplate={customChip}
    />
</Chips>
```

### Subcomponents