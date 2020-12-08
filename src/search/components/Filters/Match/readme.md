
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-Match';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Match name="sponsor" prefix="Sponsor" />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
