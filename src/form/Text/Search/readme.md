
### Examples

An example involving a Search transformed back and forth from a `key|name` string:

```jsx
import { useState } from 'react';
import { Text } from '@oris/ui';

const [value, setValue] = useState('200275154|Chase McManning');

<Text id="foo-search" value={value} onChange={setValue}>
    <Text.Label>
        Label here
    </Text.Label>

    <Text.Search />

    <Text.Help>
        You picked <strong>{value ? value : 'nobody'}</strong>
    </Text.Help>
</Text>
```
