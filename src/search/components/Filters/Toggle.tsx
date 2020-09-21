
import React, { useContext } from 'react';
import { YetAnotherCheckboxWrapper } from './Common';
import { FiltersContext } from '.';
import { Term, term } from '../..';

export type Props = {
    name: string
    title: string
};

/**
 * Single checkbox with custom formatting support
 */
const Toggle: React.FC<Props> = ({ name, title, children }) => {
    const ctx = useContext(FiltersContext);
    const filter = ctx.getFilter<Term>(title);
    
    const onToggle = (checked: boolean) => {
        if (checked) {
            ctx.addFilter(term(name, true, title));
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
