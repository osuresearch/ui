
import React, { useContext } from 'react';
import { YetAnotherCheckboxWrapper } from '../Common';
import { Context } from '..';
import { TermFilter, term, TermValue } from '../../..';

export type Props = {
    name: string
    title: string

    /**
     * Value that should be set when toggled on. Defaults to boolean `true`
     */
    value?: TermValue
};

/**
 * Single checkbox with custom formatting support
 */
const Toggle: React.FC<Props> = ({ name, title, value = true, children }) => {
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
            <YetAnotherCheckboxWrapper
                name={name}
                checked={filter !== undefined}
                onClick={onToggle}
            >
                {children}
            </YetAnotherCheckboxWrapper>
        </div>
    );
}

export default Toggle;
