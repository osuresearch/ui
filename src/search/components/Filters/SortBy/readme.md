
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger, sort } from '@oris/ui/search';

const ID = 'demo-SortBy';

<SearchProvider id={ID}>
    <Filters provider={ID}>
        <Filters.SortBy options={[
            sort('Relevance', 'rank'), 
            sort('Last Modified ↓', 'lastModifiedDate', 'desc'),
            sort('Last Modified ↑', 'lastModifiedDate', 'asc'),
        ]} />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
