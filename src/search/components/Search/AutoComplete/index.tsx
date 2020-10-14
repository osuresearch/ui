
import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import useSearch from '../../../hooks/useSearch';

import PrefixIcon from './PrefixIcon';
import Icon from '../../../../components/Icon';

export interface SearchMethods {
    /**
     * Reset the search to what was supplied in the `defaultValue` prop
     */
    reset: () => void;

    /**
     * Clear the current search field and results.
     *
     * This will also unlock the search field to accept new
     * input from the user if it was previously locked.
     */
    clear: () => void;

    /**
     * Sets the selected search value
     * 
     * @param {string} display A string that represents the full value that will be displayed in the search input
     * @param {any} value The complete value object
     */
    set: (display: string, value: any) => void;
}

interface SearchValue {
    display: string;
    value?: any;
}

export type Props = {
    /**
     * Provider ID - the ID of the SearchProvider
     */
    provider: string

    /**
     * Preloaded value to start with when initializing the component
     */
    defaultValue?: SearchValue

    /** Placeholder text to appear in Search box */
    placeholder?: string

    /**
     * Callable for when an item is selected from the search results, or the search is cleared.
     *
     * The callable receives the selected value
     */
    onChange?: (value: any) => void

    /**
     * `onFocus` event delegated to the inner `input` element
     */
    onFocus?: () => void

    /**
     * `onBlur` event delegated to the inner `input` element
     */
    onBlur?: () => void

    /**
     * Can the search input be modified by the end user. Setting this to `true`
     * will also disable the user's ability to clear the selection.
     */
    readOnly?: boolean
}

const AutoComplete = React.forwardRef<SearchMethods, Props>(({
    provider,
    defaultValue,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    readOnly
}, ref) => {
    const { setTerms, terms } = useSearch(provider);
    const [value, setValue] = useState(defaultValue);
    const [lockSearchInput, setLockSearchInput] = useState(false);

    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (value?.value && !lockSearchInput) {
            setLockSearchInput(true);
        }
    }, [lockSearchInput, value, defaultValue]);

    useImperativeHandle(ref, () => ({
        reset: () => reset(),
        clear: () => clear(),
        set: (display: string, value: any) => {
            setTerms('');
            set(display, value);
        }
    }));

    /**
     * Reset the search to what was supplied in the `defaultValue` prop
     */
    const reset = () => setValue(defaultValue);

    /**
     * Clear the current search field and results.
     *
     * This will also unlock the search field to accept new
     * input from the user if it was previously locked.
     * 
     */
    const clear = () => {
        setValue({ display: '', value: undefined });
        setLockSearchInput(false);

        // Ensure the input gets focus after the search is cleared
        input.current?.focus();
    }

    /**
     * Sets the selected search value
     * 
     * @param {string} display A string that represents the full value that will be displayed in the search input
     * @param {any} value The complete value object
     * 
     */
    const set = (display: string, value?: any) => {
        setValue({ display, value });

        if (onChange) onChange(value);
    }

    let classNames = 'form-control search-input';

    if (value?.display) {
        classNames += ' search-input-has-value';
    }

    return (
        <div className="input-group search">
            <PrefixIcon searching={false} error={false} />

            <input
                id={provider}
                name={provider}
                type="text"
                className={classNames}
                value={terms || value?.display}
                placeholder={placeholder}
                autoComplete="off"
                aria-autocomplete="list"
                aria-haspopup="true"
                aria-owns={provider + '-results'}
                readOnly={lockSearchInput || readOnly}
                ref={input}
                onChange={(e) => setTerms(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
            />

            {value?.display && !readOnly &&
                <button className="btn btn-link search-clear"
                    type="button"
                    aria-label="clear selection"
                    onClick={clear}>
                    <Icon name="close"></Icon>
                </button>
            }
        </div>
    );
});

export default AutoComplete;
