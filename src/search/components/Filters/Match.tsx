import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { Icon } from '@oris/ui';
import { FiltersContext } from '.';
import { term, Term } from '../..';

export type Props = {
    name: string

    /** Prefix displayed in the pill for this filter */
    prefix: string

    /** HTML title attribute for the input */
    title?: string

    /** HTML input placeholder */
    placeholder?: string
};

/**
 * Match an exact value for a given field.
 * 
 * The display name of the filter will be in the form of `{title}: "{value}"`.
 * For example: `Protocol: "2019H0023"`
 */
const Match: React.FC<Props> = ({ name, prefix, placeholder, title = 'Search by keyword' }) => {
    const ctx = useContext(FiltersContext);
    const [value, setValue] = useState('');

    // title + ': ' causes pills to also display the term value
    const filter = ctx.getFilter<Term>(prefix + ':');
    const currentValue = filter?.term[name] as string || '';

    // Update self when an external entity modifies the filter
    useEffect(() => setValue(currentValue), [currentValue]);

    const updateFilter = (newValue: string) => {
        ctx.addFilter(term(name, newValue, prefix + ':'));
    }

    return (
        <div className="input-group filters-terms">
            <span className="input-group-prefix">
                <Icon name="search" />
            </span>

            <input type="text" 
                className="form-control" 
                title={title}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                onKeyUp={(e) => e.keyCode === 13 && updateFilter(value)}
            />
            <div className="input-group-append">
                <button type="button"
                    className="btn btn-outline-secondary" 
                    onClick={() => updateFilter(value)}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Match;
