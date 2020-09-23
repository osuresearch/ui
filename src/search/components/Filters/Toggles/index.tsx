
import React, { useContext } from 'react';
import { KeyValuePairs, YetAnotherCheckboxWrapper } from '../Common';
import { Context } from '..';
import { OrFilters, AndFilters, Term, term, OR, AND } from '../../..';

export type Props = {
    options: KeyValuePairs

    /**
     * Toggle group name. 
     * 
     * This does not typically need to match any backend field
     * as all toggle fields are individual terms combined with `AND/OR`
     */
    name: string

    /** 
     * Minimum options displayed before the clear button is also displayed.
     */
    minimumOptionsForClearButton?: number

    /**
     * How should individual terms be combined
     */
    operator?: 'AND' | 'OR' 
};

/**
 * Batch of multiple <Toggle> components matching to an enumeration 
 * between filter names and titles. Each filter will be set as a boolean
 * `true` value when checked, or deleted when unchecked.
 */
const Toggles: React.FC<Props> = ({ name, options, minimumOptionsForClearButton = 5, operator = 'AND' }) => {
    const ctx = useContext(Context);

    let filter: OrFilters | AndFilters | undefined;
    let terms: Term[] = [];

    if (operator === 'OR') {
        filter = ctx.getFilter<OrFilters>(name);
        if (filter) {
            terms = filter.OR as Term[];
        }
    } else {
        filter = ctx.getFilter<AndFilters>(name);
        if (filter) {
            terms = filter.AND as Term[];
        }
    }

    let activeFields: string[] = [];
    terms.forEach((f) => {
        activeFields.push(Object.keys(f.term)[0]);
    });
    
    /**
     * Add/Remove a key from the set of term filters
     */
    const toggleTerm = (key: string, checked: boolean) => {
        // Strip out existing
        terms = terms.filter((f) => {
            const field = Object.keys(f.term)[0];
            return field !== key;
        });

        if (checked) {
            terms.push(term(key, true, options[key]));
        }

        // Finally - replace the filter with new terms
        if (operator === 'OR') {
            ctx.addFilter(OR(terms, name));
        } else {
            ctx.addFilter(AND(terms, name));
        }
    }

    const onClear = () => {
        ctx.deleteFilter(name);
    }

    const keys = Object.keys(options);

    return (
        <div className="filters-toggles">
            {keys.map((key) =>
                <YetAnotherCheckboxWrapper 
                    name={key} 
                    checked={activeFields.indexOf(key) >= 0} 
                    onClick={(checked) => toggleTerm(key, checked)}
                >
                    {options[key]}
                </YetAnotherCheckboxWrapper>
            )}
            
            {keys.length >= minimumOptionsForClearButton &&
                <button className="btn btn-link" onClick={onClear}>
                    Clear
                </button>
            }
        </div>
    );
}

export default Toggles;
