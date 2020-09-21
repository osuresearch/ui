import React from 'react';

import { DriverProps } from '..';
import useSearch from '../hooks/useSearch';

/**
 * Search driver that talks with a JSON:API endpoint
 */
export default function JsonApi(endpoint: string) {
    const DriverComponent: React.FC<DriverProps> = ({
        id,
        updateSearchData
    }) => {
        const { terms, filters, sort } = useSearch(id);
        
        throw new Error('TODO: Implement!');

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
