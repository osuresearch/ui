
import React, { useContext } from 'react';
import { KeyValuePairs, YetAnotherCheckboxWrapper } from '../Common';
import { Context } from '..';
import { OrFilters, AndFilters, TermFilter, term, OR, AND, TermValue } from '../../..';

export type Props = {
    options: KeyValuePairs

    /**
     * Values to set to the filter per option. If omitted, boolean `true` will be used instead.
     */
    values?: KeyValuePairs

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
const Toggles: React.FC<Props> = ({ name, options, values, minimumOptionsForClearButton = 5, operator = 'AND' }) => {
    const ctx = useContext(Context);

    let filter: OrFilters | AndFilters | undefined;
    let terms: TermFilter[] = [];

    if (operator === 'OR') {
        filter = ctx.getFilter<OrFilters>(name);
        if (filter) {
            terms = filter.OR as TermFilter[];
        }
    } else {
        filter = ctx.getFilter<AndFilters>(name);
        if (filter) {
            terms = filter.AND as TermFilter[];
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
            const value: TermValue = (values) ? values[key] : true;
            terms.push(term(key, value, options[key]));
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
