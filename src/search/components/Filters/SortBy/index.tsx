
import React, { useContext } from 'react';
import { SortFields } from '../../..';
import { Context } from '..';
import { Select } from '../../../..';

export type Props = {
    /** Different sort options that a user can pick from */
    options: SortFields[]

    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string

    name: string

    /** Size - If needed, make the size of the select control large (lg) or small(sm) */
    size?: 'lg' | 'sm'
};

/**
 * Sort options for a search.
 *
 * Provide multiple `Sort` rules for the user to pick from.
 */
const SortBy: React.FC<Props> = ({ options, title, name, size }) => {
    const ctx = useContext(Context);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options[parseInt(e.target.value)];
        ctx.setSort(selected);
    };

    if (!title) {
        return <span className="text-danger">Title property not defined</span>
    }

    return (
        <Select id={name}>
            <Select.Label className="sr-only">{title}</Select.Label>
            <Select.Control onChange={onChange} className={size && `form-control-${size}`}><>
                <Select.Option disabled selected={ctx.sort === undefined}>{title}</Select.Option>

                {options.map((opt, index) =>
                    <Select.Option key={index}
                        selected={opt.name === ctx.sort?.name}
                        value={index}
                    >
                        {opt.name}
                    </Select.Option>
                )}
            </></Select.Control>
        </Select>
    );
}

export default SortBy;
