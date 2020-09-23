

### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';

const ID = 'demo-Toggle';

<SearchProvider id={ID}>
    <Filters provider={ID}>
        <Filters.Toggle name="watched">
            Show Only Watched Items
        </Filters.Toggle>
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
