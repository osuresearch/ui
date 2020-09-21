
import React, { useContext } from 'react';
import { Sort } from '../..';
import { FiltersContext } from '.';

export type Props = {
    /** Different sort options that a user can pick from */
    options: Sort[]
};

/**
 * Sort options for a search.
 * 
 * Provide multiple `Sort` instances for the user to pick from.
 * 
 * ```tsx
 * <Filter.SortBy options={[
 *  sort('Relevance', 'rank'), 
 *  sort('Last Modified ↓', 'lastModifiedDate', 'desc')
 *  sort('Last Modified ↑', 'lastModifiedDate', 'asc')
 * ]}
 * ```
 */
const SortBy: React.FC<Props> = ({ options }) => {
    const ctx = useContext(FiltersContext);
    
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options[parseInt(e.target.value)];
        ctx.setSort(selected);
    };

    return (
        <select className="custom-select custom-select-sm filters-sort" onChange={onChange}>
            {options.map((opt, index) =>
                <option key={index}
                    selected={opt.name === ctx.sort?.name} 
                    value={index}
                >{opt.name}</option>
            )}
        </select>
    );
}

export default SortBy;
