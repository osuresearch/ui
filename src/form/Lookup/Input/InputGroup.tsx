
import React from 'react';
import { JsonObject } from '..';
import Icon from '../../../components/Icon';
import { IFieldBind } from '../../../internal/FormCommon/types';

type Props = {
    error: any,
    searching: boolean,
    bind: IFieldBind<JsonObject>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e?: React.FocusEvent) => void
    onKeyDown: (e: React.KeyboardEvent) => void,
    classNames: string,
    showResultsPane: boolean,
    activeDescendant?: string
}

const InputGroup = React.forwardRef<HTMLInputElement, Props>(({
    error,
    searching,
    bind,
    onChange,
    onBlur,
    onKeyDown,
    classNames,
    showResultsPane,
    activeDescendant
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
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />

        {searching &&
            <div className="sr-only" role="status">
                Searching...
            </div>
        }
    </>);
});

export default InputGroup;