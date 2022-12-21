
The enum `value` will be added to the filter and used for the checkbox labeling.


### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@osuresearch/ui';
import Mock from '@osuresearch/ui/search/drivers/Mock';

const ID = 'demo-AnyOf';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.AnyOf name="dataClassification" title="Data Classification" options={[
            'Public (S1)',
            'Internal (S2)',
            'Private (S3)',
            'Restricted (S4)',
        ]} />

        <hr/>
        <Filters.Active />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
