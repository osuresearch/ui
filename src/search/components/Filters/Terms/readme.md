
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';

const ID = 'demo-Terms';

<SearchProvider id={ID}>
    <Filters provider={ID}>
        <Filters.Terms />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
