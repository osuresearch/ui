
```jsx
import { useRef, useState } from 'react';
import { SearchProvider, Search, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const [showPanel, setShowPanel] = useState(false);

const autoCompleteRef = useRef();
const resultsRef = useRef();

const ResultComponent = ({ result }) => (
    <button className="dropdown-item" type="button" 
        onClick={() => window.open(`https://www.google.com/search?q=${result.state}`, '_blank')}>
        {result.name}
    </button>
);

const Placeholder = () => (
    <div class="row">
                <div class="col-6 search-tips">
                    <span class="text-muted">Search Tips</span>
                    <a href="#">Anchor</a>
                    <ul class="list-unstyled">
                        <li>
                            Type the important words:
                            <div class="text-muted">computational linguistics</div>
                        </li>
                        <li>
                            Use keywords to narrow your search further:
                            <div class="text-muted">National Science Foundation Bio</div>
                        </li>
                        <li>
                            You can search for project numbers, titles, departments, or people
                        </li>
                    </ul>
                </div>

                <div class="col-6 blankslate-message"><i class="fa fa-search" aria-hidden="true"></i> Start typing to see suggestions</div>
            </div>
);

console.log('results ref', resultsRef.current);

<SearchProvider id="autocomplete">
    <Search provider="autocomplete" driver={Mock()}>
        <Search.AutoComplete 
            provider="autocomplete" 
            ref={autoCompleteRef}
            label="Search"
            labelMode="placeholder"
            onFocus={() => resultsRef.current.show()}
            onBlur={() => resultsRef.current.hide()}
        />

            <Search.Results>
                <Search.Results.AggregatePanel 
                    ref={resultsRef}
                    provider="autocomplete"
                    categorizeBy="state"
                    placeholder={Placeholder}
                >
                    <ResultComponent />
                </Search.Results.AggregatePanel>
            </Search.Results>
    </Search>

    <SearchDebugger provider="autocomplete" />
</SearchProvider>
```