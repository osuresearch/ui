
import React from 'react';
import { JsonObject } from '../../../types';
import Icon from '../../../generic/Icon';
import { IFieldBind } from '../../../internal/FormCommon/types';

type Props = {
    error: any,
    searching: boolean,
    bind: IFieldBind<JsonObject>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onFocus?: (e?: React.FocusEvent) => void,
    onBlur?: (e: React.FocusEvent) => void,
    onKeyDown: (e: React.KeyboardEvent) => void,
    classNames: string,
    showResultsPane: boolean,
    activeDescendant?: string
    placeholder?: string
}

const InputGroup = React.forwardRef<HTMLInputElement, Props>(({
    error,
    searching,
    bind,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    classNames,
    showResultsPane,
    activeDescendant,
    placeholder = ''
}, ref) => {
    let iconProps = { name: 'search', spin: false };
    if (searching) {
        iconProps = { name: 'spinner', spin: true };
    }
    else if (error) {
        iconProps = { name: 'exclamation-circle', spin: false };
    }

    return (<>
        <span className={`input-group-prefix ${error && 'text-danger'}`}>
            <Icon {...iconProps} />
        </span>

        <input
            ref={ref}
            type="text"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={showResultsPane}
            aria-autocomplete="list"
            aria-controls={`${bind.id}-lookup-results`}
            aria-activedescendant={activeDescendant}
            id={bind.id}
            name={bind.name}
            className={classNames}
            required={bind.required}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
        />

        {searching &&
            <div className="sr-only" role="status">
                Searching...
            </div>
        }
    </>);
});

export default InputGroup;
