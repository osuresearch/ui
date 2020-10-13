
import React from 'react';
import useSearch from '../../../../hooks/useSearch';

import Empty from '../../Empty';
import Error from '../../Error';

import './index.scss';

export type Props = {
    provider: string;
    results?: any[];
    totalResults?: number;
    children: React.ReactElement;
}

const Panel: React.FC<Props> = ({
    provider,
    results,
    totalResults,
    children
}) => {
    const { terms } = useSearch(provider);

    if (terms) {
        // At least one result came back
        if (results && results.length > 0) {
            return (
                <div id={provider + '-results'} className="dropdown-menu" role="listbox">
                    {results?.map(
                        (result, idx) => (
                            <React.Fragment key={`search-result-${idx}`}>
                                { React.cloneElement(children, { result: result })}
                            </React.Fragment>
                        )
                    )}

                    {// If the total number of results exceeds the results array limit, display a prompt to narrow their search
                        totalResults && (totalResults - results.length) > 0 &&
                        <div className="dropdown-header">
                            There are <strong>{totalResults - results.length}</strong> additional
                                results. Please narrow your search.
                            </div>
                    }
                </div>
            );
        }

        return (<>
            <Empty>
                <div id={provider + '-results'} className="dropdown-menu" role="listbox">
                    <div className="dropdown-header">
                        There are no matching results.
                    </div>
                </div>
            </Empty>

            <Error>
                <div id={provider + '-results'} className="dropdown-menu" role="listbox">
                    <div className="dropdown-header">
                        <span className="lookup-error text-danger">
                            Something went wrong. Try reloading the page. If the problem persists,
                            contact <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>
                        </span>
                    </div>
                </div>
            </Error>
        </>);
    }

    // Return null if there are no terms
    return null;
}

export default Panel;
