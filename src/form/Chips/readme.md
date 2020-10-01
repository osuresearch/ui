### Examples

#### Basic
```jsx
import React, { useState } from 'react';

const [values, setValues] = useState([]);

<Chips id='chips'>
    <Chips.Label>Chips</Chips.Label>

    <Chips.Input 
        value={values}
        onChange={(e) => setValues(e.value)}
    />
</Chips>
```

#### Comma Separator
```jsx
import React, { useState } from 'react';

const [values, setValues] = useState([]);

<Chips id='tags'>
    <Chips.Label>Tags</Chips.Label>

    <Chips.Input 
        value={values}
        onChange={(e) => setValues(e.value)}
        separator=","
    />
</Chips>
```

#### Template
```jsx
import React, { useState } from 'react';
import { Icon } from '@oris/ui';

const [values, setValues] = useState([]);

const customChip = (item) => {
    return (
        <div>
            {item} - (active) <Icon name='user-plus' />
        </div>
    )
}

<Chips id='users'>
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