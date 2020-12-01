

### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-Toggle';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Toggle name="watched">
            Show Only Watched Items
        </Filters.Toggle>
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
