
import React, { useState } from 'react';
import { Icon } from '@oris/ui';

export type Props = { };

/**
 * Even MORE filters to show (contains a set of groups)
 */
const More: React.FC<Props> = ({ children }) => {
    const [more, setMore] = useState(false);

    return (
        <div className="filters-more">
            {more && children}

            <button className="btn btn-link filters-more-toggle" onClick={() => setMore(!more)}>
                {more && <>Show Less <Icon name="chevron-up" /></>}
                {!more && <>Show More <Icon name="chevron-down" /></>}
            </button>
        </div>
    );
}

export default More;
