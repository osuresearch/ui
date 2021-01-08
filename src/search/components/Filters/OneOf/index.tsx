
import React, { useContext } from 'react';
import { TermFilter, term } from '../../..';
import { KeyValuePairs } from '../Common';
import { Context } from '..';
import { Radio, FieldSet } from '../../../..';

export type Props = {
    name: string

    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string

    options: KeyValuePairs
};

/**
 * Radioset (or dropdown) of options where the user may only pick one.
 *
 * Each option is represented as a `Term` filter.
 */
const OneOf: React.FC<Props> = ({ name, title, options }) => {
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

    if (!title) {
        return <span className="text-danger">Title property not defined</span>
    }

    return (
        <div className="filters-one-of">
            <fieldset>
                <legend className="sr-only">{title}</legend>

                {Object.keys(options).map((key) => {
                    const id = `${name}-${key}`;
                    const value = active?.term[name] as string;

                    return (
                        <Radio id={id} name={name}>
                            <Radio.Input
                                checked={key === value}
                                onChange={() => onChange(key, options[key])}
                            />
                            <Radio.Label>{options[key]}</Radio.Label>
                        </Radio>
                    );
                })}
            </fieldset>

            <button className="btn btn-link" onClick={() => onChange()}>
                Clear
            </button>
        </div>
    );
}

export default OneOf;
