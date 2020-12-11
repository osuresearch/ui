import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { Context } from '..';
import { term, TermFilter } from '../../..';
import { Icon, Text } from '../../../..';

export type Props = {
    name: string

    /** Prefix for the filter name */
    prefix: string

    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string

    /** HTML title attribute for the input */
    inputTitle?: string

    /** HTML input placeholder */
    placeholder?: string
};

/**
 * Match an exact value for a given field.
 *
 * The display name of the filter will be in the form of `{prefix}: "{value}"`.
 * For example: `Protocol: "2019H0023"`
 */
const Match: React.FC<Props> = ({ name, prefix, placeholder, title, inputTitle = 'Search by keyword' }) => {
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

    if (!title) {
        return <span className="text-danger">Title property not defined</span>
    }

    return (
        <Text id={name}>
            <Text.Label className="sr-only">{title}</Text.Label>

            <div className="input-group filters-terms">
                <span className="input-group-prefix">
                    <Icon name="search" />
                </span>

                <Text.Input
                    title={inputTitle}
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
        </Text>
    );
}

export default Match;
