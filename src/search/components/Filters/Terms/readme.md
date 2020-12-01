
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-Terms';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Terms />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
