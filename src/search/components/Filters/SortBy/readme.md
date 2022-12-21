
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger, sort } from '@osuresearch/ui';
import Mock from '@osuresearch/ui/search/drivers/Mock';

const ID = 'demo-SortBy';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.SortBy name="sort-by" title="Sort by" options={[
            sort('Relevance', 'rank'),
            sort('Last Modified ↓', 'lastModifiedDate', 'desc'),
            sort('Last Modified ↑', 'lastModifiedDate', 'asc'),
        ]} />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
