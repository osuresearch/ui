
### Examples

```jsx
import { SearchProvider, Filters } from '@oris/ui/search';

const ID = 'demo-more';

<SearchProvider id={ID}>
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
