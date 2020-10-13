
```jsx
import { useRef } from 'react';
import { SearchProvider, Search, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const ref = useRef();

const ResultComponent = ({ result }) => (
    <button className="dropdown-item" type="button" 
        onClick={() => window.open(`https://www.google.com/search?q=${result.state}`, '_blank')}>
        {result.name}
    </button>
);

<SearchProvider id="autocomplete">
    <Search provider="autocomplete" driver={Mock()}>
        <Search.AutoComplete provider="autocomplete" ref={ref} />

        <Search.Results>
            <Search.Results.AggregatePanel 
                provider="autocomplete"
                categorizeBy="state"
            >
                <ResultComponent />
            </Search.Results.AggregatePanel>
        </Search.Results>
    </Search>

    <SearchDebugger provider="autocomplete" />
</SearchProvider>
```