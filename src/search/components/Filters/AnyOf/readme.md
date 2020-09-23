
If you are using TypeScript, you can supply an `enum` directly to options:

```tsx
enum DataClassification {
    S1 = 'Public (S1)',
    S2 = 'Internal (S2)',
    S3 = 'Private (S3)',
    S4 = 'Restricted (S4)',
}

<Filters.AnyOf name="dataClassification" options={DataClassification} />
```

The enum `value` will be added to the filter and used for the checkbox labeling.


### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';

const ID = 'demo-AnyOf';

<SearchProvider id={ID}>
    <Filters provider={ID}>
        <Filters.AnyOf name="dataClassification" options={[
            'Public (S1)',
            'Internal (S2)',
            'Private (S3)',
            'Restricted (S4)',
        ]} />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
