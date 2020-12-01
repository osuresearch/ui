
### Examples

```jsx
import { SearchProvider, Filters } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-more';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Group title="Group 1">
            ...
        </Filters.Group>

        <Filters.Group title="Group 2">
            ...
        </Filters.Group>

        <Filters.More>
            <Filters.Group title="Group 3">
                ...
            </Filters.Group>

            <Filters.Group title="Group 4">
                ...
            </Filters.Group>
        </Filters.More>
    </Filters>
</SearchProvider>
```
