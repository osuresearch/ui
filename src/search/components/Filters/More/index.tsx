
import React, { useState } from 'react';
import { Icon } from '../../../..';

export type Props = { };

/**
 * Even MORE filters to show (contains a collapsible set of groups).
 *
 * We suggest you only have one `<Filters.More>` at the end of your filter list.
 */
const More: React.FC<Props> = ({ children }) => {
    const [more, setMore] = useState(false);

    return (
        <div className="filters-more">
            {more && children}

            <button className="btn btn-link filters-more-toggle" onClick={() => setMore(!more)}>
                {more && <>Show Fewer Filters <Icon name="chevron-up" /></>}
                {!more && <>Show More Filters <Icon name="chevron-down" /></>}
            </button>
        </div>
    );
}

export default More;
