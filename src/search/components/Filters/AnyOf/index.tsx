
import React, { useContext, useState } from 'react';
import { AnyOfFilter as AnyOfFilter, anyOf } from '../../..';
import { YetAnotherCheckboxWrapper } from '../Common';
import { Context } from '..';

export type Props = {
    name: string

    /**
     * Accepts either an array of values or a TypeScript enum.
     *
     * The values of the array will be used.
     */
    options: string[] | { [key: number]: string | number }

    /**
     * Display values for each option checkbox. These will also be used as filter names.
     *
     * If not supplied - the values of the options prop will be displayed instead.
     */
    displayOptions?: string[] | { [key: number]: string | number }

    /**
     * Prefix for naming active filters. Will be titled in the form `{prefix}{value}`
     */
    prefix?: string

    /**
     * If provided - the filter will be named in such a way that each chosen value
     * is aggregated under a single name - thus creating a single pill when displaying
     * active filters to the end user.
     *
     * For example: rather than individual pills for "Kansas", "California", "Texas"
     * there will be a single filter pill named "Kansas, California, Texas".
     *
     * If a prefix is supplied, it will be used as well. E.g. "States: Kansas, California"
     * instead of separate "States: California" and "States: Kansas" filters.
     */
    combineValues?: boolean

    /**
     * Minimum options displayed before the clear button is also included.
     *
     * It's not included by default because it doesn't make sense for one or two options.
     */
    minimumOptionsForClearButton?: number
};

/**
 * Enumeration of options that get combined together into a single `AnyOf` filter.
 *
 * Only supports strings for keys.
 */
const AnyOf: React.FC<Props> = ({
    name,
    options,
    displayOptions,
    prefix = '',
    combineValues,
    minimumOptionsForClearButton = 5
}) => {
    const ctx = useContext(Context);
    const keys = Object.keys(options) as string[];

    let filter: AnyOfFilter | undefined;

    // Since getFilter() is name-based we have to search until something matches.
    // This includes accounting for the optional prefix as well. E.g. for a filter
    // named 'State: California' that actually maps to the option 'CA'
    for (let i = 0; i < keys.length && !filter; i++) {
        filter = ctx.getFilter<AnyOfFilter>(
            prefix + (displayOptions
                        ? displayOptions[keys[i] as any]
                        : options[keys[i] as any]
                    )
        );
    }

    // Current filter names
    let names: string | string[] | undefined;

    // Current filter values
    let values: (string | number)[] = [];

    if (filter) {
        const field = Object.keys(filter.anyOf)[0];
        values = filter.anyOf[field];
        names = filter.name;
    }

    const onToggle = (entry: string, checked: boolean) => {
        let updated: any[] = []; // Any is used here because of a re-map issue to string|number arrays.
        for (let i = 0; i < values.length; i++) {
            if (values[i] !== entry) {
                updated.push(values[i]);
            }
        }

        if (checked) {
            updated.push(entry);
        }

        if (updated.length < 1) {
            ctx.deleteFilter(name);
        } else {
            ctx.addFilter(anyOf(name, updated, name));
        }
    };

    const onClear = () => {
        ctx.deleteFilter(name);
    }

    return (
        <div className="filters-any-of">
            {keys.map((key) => {
                const value = options[key as any] as string;
                return (
                <YetAnotherCheckboxWrapper
                    name={`${name}-${key}`}
                    checked={values.indexOf(value) >= 0}
                    onClick={(checked: boolean) => onToggle(value, checked)}
                >
                    {displayOptions ? displayOptions[value as any] : value}
                </YetAnotherCheckboxWrapper>
                );
            })}

            {keys.length >= minimumOptionsForClearButton &&
                <button className="btn btn-link" onClick={onClear}>
                    Clear
                </button>
            }
        </div>
    );
}

export default AnyOf;
