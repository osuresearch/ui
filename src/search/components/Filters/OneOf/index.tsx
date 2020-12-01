
import React, { useContext, useState } from 'react';
import { TermFilter, term } from '../../..';
import { KeyValuePairs, YetAnotherRadioSetWrapper } from '../Common';
import { Context } from '..';

export type Props = {
    name: string
    options: KeyValuePairs
};

/**
 * Radioset (or dropdown) of options where the user may only pick one.
 *
 * Each option is represented as a `Term` filter.
 */
const OneOf: React.FC<Props> = ({ name, options }) => {
    const ctx = useContext(Context);

    // Find an active filter matching the option set
    const names = Object.values(options);
    const active = ctx.filters.find((filter) =>
        typeof filter.name === 'string' ? names.indexOf(filter.name) > -1 : false
    ) as TermFilter;

    const onChange = (key?: string, value?: string) => {
        if (active) {
            ctx.deleteFilter(active.name as string);
        }

        if (key) {
            ctx.addFilter(term(name, key, value));
        }
    }

    return (
        <div className="filters-one-of">
            <YetAnotherRadioSetWrapper
                name={name}
                options={options}
                value={active?.term[name] as string}
                onChange={onChange}
            />
            <button className="btn btn-link" onClick={() => onChange()}>
                Clear
            </button>
        </div>
    );
}

export default OneOf;
