
import React, { useContext, useState } from 'react';
import { Term, term } from '../..';
import { KeyValuePairs, YetAnotherRadioSetWrapper } from './Common';
import { FiltersContext } from '.';

export type Props = {
    name: string
    options: KeyValuePairs
};

/**
 * Radioset (or dropdown) of options where the user may only pick one.
 * 
 * Each option is represented as a Term filter.
 */
const OneOf: React.FC<Props> = ({ name, options }) => {
    const ctx = useContext(FiltersContext);

    // Find an active filter matching the option set
    const names = Object.values(options);
    const active = ctx.filters.find((filter) =>
        filter.name ? names.indexOf(filter.name) > -1 : false
    ) as Term;

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
