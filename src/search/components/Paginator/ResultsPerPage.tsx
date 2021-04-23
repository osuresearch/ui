
import React from 'react';
import useSearchProvider from '../../hooks/useSearchProvider';

import { Dropdown } from 'primereact/dropdown';

type Props = {
    provider: string
}

export default function ResultsPerPage({ provider }: Props) {
    /** Could just pass this down in props, but we also need the provider name for the id, so we'll just get the search provider again */
    const ctx = useSearchProvider(provider);

    const options = [
        { label: '10', value: 10 },
        { label: '20', value: 20 },
        { label: '50', value: 50 },
        { label: '100', value: 100 }
    ];

    const id = `${provider}-results-per-page`;

    return (<>
        <label htmlFor={id} className="sr-only">
            Results Per Page
        </label>

        <Dropdown
            id={id}
            value={ctx.limit}
            options={options}
            onChange={e => ctx.setLimit(e.value)}
        />
    </>);
}
