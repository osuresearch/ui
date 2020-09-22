
import React, { useContext } from 'react';
import { AnyOf as AnyOfFilter, anyOf } from '../../..';
import { YetAnotherCheckboxWrapper } from '../Common';
import { Context } from '..';

export type Props = {
    name: string
    options: string[]

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
 * 
 * @visibleName Filters.AnyOf
 */
const AnyOf: React.FC<Props> = ({ name, options, minimumOptionsForClearButton = 5}) => {
    const ctx = useContext(Context);
    const filter = ctx.getFilter<AnyOfFilter>(name);

    let values: string[] = [];
    if (filter) {
        const field = Object.keys(filter.anyOf)[0];
        values = filter.anyOf[field];
    }

    const onToggle = (entry: string, checked: boolean) => {
        const updated = values.filter((v) => v !== entry);
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
            {options.map((entry) =>
                <YetAnotherCheckboxWrapper 
                    name={`${name}-${entry}`} 
                    checked={values.indexOf(entry) >= 0}
                    onClick={(checked: boolean) => onToggle(entry, checked)}
                >
                    {entry}
                </YetAnotherCheckboxWrapper>
            )}
            
            {options.length >= minimumOptionsForClearButton &&
                <button className="btn btn-link" onClick={onClear}>
                    Clear
                </button>
            }
        </div>
    );
}

export default AnyOf;
