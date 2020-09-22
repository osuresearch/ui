import React from 'react';

import { DriverProps } from '../..';
import useSearch from '../../hooks/useSearch';

/**
 * Search driver that talks with a JSON:API endpoint
 * 
 * **PLACEHOLDER - NOT IMPLEMENTED**. If you would like JSON:API support, 
 * please make a merge request with an implementation. 
 */
export default function JsonApi(endpoint: string) {
    const DriverComponent: React.FC<DriverProps> = ({
        provider,
        updateSearchData
    }) => {
        const { terms, filters, sort } = useSearch(provider);
        
        throw new Error('TODO: Implement!');

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
