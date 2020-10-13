
```jsx
import { useRef, useState } from 'react';
import { SearchProvider, Search, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const [showPanel, setShowPanel] = useState(false);

const ref = useRef();

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

<SearchProvider id="autocomplete">
    <Search provider="autocomplete" driver={Mock()}>
        <Search.AutoComplete 
            provider="autocomplete" 
            ref={ref}
            onFocus={() => setShowPanel(true)}
        />

        {showPanel &&
            <Search.Results>
                <Search.Results.AggregatePanel 
                    provider="autocomplete"
                    categorizeBy="state"
                    placeholder={Placeholder}
                >
                    <ResultComponent />
                </Search.Results.AggregatePanel>
            </Search.Results>
        }
    </Search>

    <SearchDebugger provider="autocomplete" />
</SearchProvider>
```