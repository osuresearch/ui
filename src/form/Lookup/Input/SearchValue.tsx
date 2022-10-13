
import React from 'react';
import { JsonObject } from '../../../types';
import { IFieldBind } from '../../../internal/FormCommon/types';

type Props = {
    bind: IFieldBind<JsonObject>,
    onClear?: () => void,
    children: React.ReactNode;
}

const SearchValue = React.forwardRef<HTMLDivElement, Props>(({
    bind,
    onClear,
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

            {onClear &&
                <button type="button" className="lookup-value-clear" aria-label="Clear value" title="Clear value" onClick={onClear}>
                    <span aria-hidden>&times;</span>
                </button>
            }
        </div>
    );
});

export default SearchValue;
