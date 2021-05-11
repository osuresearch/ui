
import React, { useContext } from 'react';
import { Context } from '..';
import { TermFilter, term, TermValue } from '../../..';
import { Checkbox } from '../../../..';

export type Props = {
    name: string
    title: string

    /** Optional id - will default to name if not provided */
    id?: string

    /**
     * Value that should be set when toggled on. Defaults to boolean `true`
     */
    value?: TermValue
};

/**
 * Single checkbox with custom formatting support
 */
const Toggle: React.FC<Props> = ({
    name,
    title,
    id = name,
    value = true,
    children
}) => {
    const ctx = useContext(Context);
    const filter = ctx.getFilter<TermFilter>(title);

    const onToggle = (checked: boolean) => {
        if (checked) {
            ctx.addFilter(term(name, value, title));
        } else {
            ctx.deleteFilter(title);
        }
    };

    return (
        <div className="filters-toggle">
            <Checkbox id={id} onChange={checked => onToggle(checked as boolean)}>
                <Checkbox.Input checked={filter !== undefined} />
                <Checkbox.Label>{children}</Checkbox.Label>
            </Checkbox>
        </div>
    );
}

export default Toggle;
