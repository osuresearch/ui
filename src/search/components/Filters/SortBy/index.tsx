
import React, { useContext } from 'react';
import { SortFields } from '../../..';
import { Context } from '..';

export type Props = {
    /** Different sort options that a user can pick from */
    options: SortFields[]
};

/**
 * Sort options for a search.
 *
 * Provide multiple `Sort` rules for the user to pick from.
 */
const SortBy: React.FC<Props> = ({ options }) => {
    const ctx = useContext(Context);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options[parseInt(e.target.value)];
        ctx.setSort(selected);
    };

    return (
        <select className="custom-select custom-select-sm filters-sort" onChange={onChange}>
            <option disabled selected={ctx.sort === undefined}>Sort by</option>
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
