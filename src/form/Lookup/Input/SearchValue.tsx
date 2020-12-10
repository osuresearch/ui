
import React from 'react';
import { JsonObject } from '..';
import { IFieldBind, Nullable } from '../../../internal/FormCommon/types';

type Props = {
    bind: IFieldBind<JsonObject>,
    updateValue: (newValue: Nullable<JsonObject>) => void,
    children: React.ReactNode;
}

const SearchValue = React.forwardRef<HTMLDivElement, Props>(({
    bind,
    updateValue,
    children
}, ref) => {
    return (
        <div className={`lookup-value ${children ? '' : 'd-none'}`}>
            <div
                ref={ref}
                className="lookup-value-content"
                tabIndex={0}
                id={bind.id}
            >
                {children}
            </div>

            <button className="lookup-value-clear" aria-label="Clear value" title="Clear value" onClick={() => updateValue(null)}>
                <span aria-hidden>&times;</span>
            </button>
        </div>
    );
});

export default SearchValue;
