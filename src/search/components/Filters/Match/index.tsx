import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { Context } from '..';
import { term, TermFilter } from '../../..';
import { Icon } from '../../../..';

export type Props = {
    name: string

    /** Prefix for the filter name */
    prefix: string

    /** HTML title attribute for the input */
    title?: string

    /** HTML input placeholder */
    placeholder?: string
};

/**
 * Match an exact value for a given field.
 *
 * The display name of the filter will be in the form of `{prefix}: "{value}"`.
 * For example: `Protocol: "2019H0023"`
 */
const Match: React.FC<Props> = ({ name, prefix, placeholder, title = 'Search by keyword' }) => {
    const ctx = useContext(Context);
    const [value, setValue] = useState('');

    // title + ': ' causes pills to also display the term value
    const filter = ctx.getFilter<TermFilter>(prefix + ':');
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
                onKeyUp={(e) => e.key === 'Enter' && updateFilter(value)}
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
