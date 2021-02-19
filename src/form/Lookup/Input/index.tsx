import throttle from 'lodash/throttle';
import findIndex from 'lodash/findIndex';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Context, JsonObject } from '..';
import { Nullable } from '../../../internal/FormCommon/types';
import { useSearchProvider } from '../../../search';

import InputGroup from './InputGroup';
import SearchValue from './SearchValue';
import Result from './Result';
import ResultMessages from './ResultMessages';

export type Props = {
    /**
     * Additional class names to add to the component
     */
    className?: string

    /**
     * Initial value to populate the lookup in uncontrolled mode.
     *
     * Use the `onChange` prop of `Lookup` to get value updates.
     */
    defaultValue?: Nullable<JsonObject>

    resultRenderer: (result: JsonObject) => JSX.Element

    /**
     * If provided, this will be rendered in place of the default
     * message when there are no hits.
     *
     * Implement this to customize user feedback and provide
     * helpful search tips when the user cannot find what
     * they are looking for.
     */
    emptyRenderer?: () => JSX.Element

    resultJsonPath?: string

    hitsJsonPath?: string

    /**
     * Change handler for use with React Hook Form's `<Controller>`.
     *
     * **Do not use this directly. This is not supported for usage outside of RHF.**
     * **Use the `onChange` prop in `<Lookup>` instead.**
     */
    onChange?: (newValue: Nullable<JsonObject>) => void

    /**
     * Blur handler for use with React Hook Form's `<Controller>`.
     *
     * **Do not use this directly. This is not supported for usage outside of RHF.**
     */
    onBlur?: () => void

    /**
     * Controlled value for use with React Hook Form's `<Controller>`.
     *
     * **Do not use this directly. This is not supported for usage outside of RHF.**
     * **Use a combination of defaultValue and the `onChange` prop in `<Lookup>` instead.**
     */
    value?: Nullable<JsonObject>
}

/**
 * Lookup input
 * 
 * Based on W3C Combobox pattern: https://w3c.github.io/aria-practices/examples/combobox/grid-combo.html
 * 
 */
const Input: React.FC<Props> = (props) => {
    const { bind, provider } = useContext(Context);
    const { terms, searching, error, results, setTerms } = useSearchProvider(provider);

    const classNames = `
        form-control ${props.className ? props.className : ''}
        ${bind.error && ' is-invalid'}
        ${bind.success && ' is-valid'}
    `;

    // TODO: Flexible based on JSON Path.
    // Right now we assume it's always { hits: number, results: JsonObject[] }
    const typedResults = results ? results as { hits: number, results: JsonObject[] } : undefined;

    const totalHits = typedResults?.hits || 0;
    const hits: JsonObject[] = typedResults?.results || [];

    const [value, setValue] = useState<Nullable<JsonObject>>();

    // Update the internal value state if the props change
    useEffect(() => {
        setValue(props.value || props.defaultValue || null);
    }, [props]);

    const hasHits = terms.length > 0 && hits.length > 0;
    const hasNoHits = terms.length > 0 && !searching && totalHits < 1;
    const hasMoreHits = terms.length > 0 && !searching && totalHits > hits.length;

    const [showResultsPane, setShowResultsPane] = useState(false);

    useEffect(() => {
        setShowResultsPane(!value && (hasHits || hasNoHits || error !== undefined));
    }, [error, hasHits, hasNoHits, value]);

    const inputRef = useRef<HTMLInputElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const valueRef = useRef<HTMLDivElement>(null);

    const setTermsThrottled = useCallback(
        throttle(terms => setTerms(terms), 750),
        [throttle]
    );

    const updateValue = (newValue: Nullable<JsonObject>) => {
        setValue(newValue);
        setTerms('');

        if (props.onChange) {
            props.onChange(newValue);
        }

        // Blur gets fired at the same time as onChange due to the
        // input either existing or not existing once a change happens.
        if (props.onBlur) {
            props.onBlur();
        }

        // Notify the bind and trigger onChange of the parent Lookup.
        bind.value = newValue;
    }

    const [activeDescendant, setActiveDescendant] = useState<string | undefined>(undefined);

    const isActiveDescendant = (idx: number) => {
        return activeDescendant === `${bind.id}-result-${idx}`;
    }

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        const results = resultsRef.current?.querySelectorAll('.lookup-result');
        const activeDescendantIndex = results && activeDescendant ? findIndex(results, { id: activeDescendant }) : undefined;

        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
            // Clear activeDescendant
            setActiveDescendant(undefined);
        }

        // Down Arrow - If the listbox is displayed
        if (showResultsPane && e.key === "ArrowDown" && results) {
            // Prevent viewport from moving down
            e.preventDefault();

            if (typeof (activeDescendantIndex) !== "undefined" && typeof (results[activeDescendantIndex + 1]) !== "undefined") {
                // Move activeDescendant focus to next item
                setActiveDescendant(results[activeDescendantIndex + 1].id);
            } else {
                // Move activeDescendant focus to the first suggested value
                setActiveDescendant(results[0].id);
            }
        }

        // Up Arrow - If the listbox is displayed
        if (showResultsPane && e.key === "ArrowUp" && results) {
            // Prevent viewport from moving up
            e.preventDefault();

            if (typeof (activeDescendantIndex) !== "undefined" && typeof (results[activeDescendantIndex - 1]) !== "undefined") {
                // Move activeDescendant focus to previous item
                setActiveDescendant(results[activeDescendantIndex - 1].id);
            } else {
                // Move activeDescendant focus to the last suggested value
                setActiveDescendant(results[results.length - 1].id);
            }
        }

        // Escape
        if (e.key === "Escape") {
            if (showResultsPane) {
                // If the listbox is displayed, close it
                setShowResultsPane(false);
            } else if (inputRef.current) {
                // If the listbox is not displayed, clear the textbox
                inputRef.current.value = '';
                setTerms('');
            }
        }

        // Enter - Select the activeDescendant if one is defined
        if (showResultsPane && e.key === "Enter") {
            (resultsRef.current?.querySelector(`#${activeDescendant}`) as HTMLDivElement)?.click();
        }
    }

    // Read only 
    // TODO - Diff support
    if (bind.readOnly) {
        return (
            <SearchValue bind={bind}>
                {value ? props.resultRenderer(value) : <span></span>}
            </SearchValue>
        );
    }

    // Edit
    return (
        <div className="input-group lookup-input">
            {/* Only show the search input if we have no selection */}
            {!value &&
                <InputGroup
                    ref={inputRef}
                    error={error}
                    searching={searching}
                    bind={bind}
                    onChange={(e) => {
                        setTermsThrottled(e.target.value);
                    }}
                    onBlur={props.onBlur}
                    onKeyDown={handleInputKeyDown}
                    classNames={classNames}
                    showResultsPane={showResultsPane}
                    activeDescendant={activeDescendant}
                />
            }

            {/* Show the search value with a button to clear */}
            <SearchValue
                ref={valueRef}
                bind={bind}
                onClear={() => {
                    updateValue(null);
                    // Focus in the search input onClear
                    // Needs setTimeout for the effect to apply correctly in Safari
                    setTimeout(() => inputRef.current?.focus(), 100);
                }}
            >
                {value && props.resultRenderer(value)}
            </SearchValue>

            <div className="lookup-results">
                <div tabIndex={-1}
                    className={`dropdown-menu ${showResultsPane ? 'd-block' : 'd-none'}`}
                >
                    <div
                        ref={resultsRef}
                        aria-labelledby={bind.id}
                        role="listbox"
                        id={`${bind.id}-lookup-results`}
                    >
                        {hits.map((hit, idx) =>
                            <Result
                                key={idx}
                                id={`${bind.id}-result-${idx}`}
                                onClick={() => {
                                    updateValue(hit);
                                    // Needs setTimeout for the effect to apply correctly in Safari
                                    setTimeout(() => valueRef.current?.focus(), 100);
                                }}
                                isSelected={isActiveDescendant(idx)}
                            >
                                {props.resultRenderer(hit)}
                            </Result>
                        )}
                    </div>

                    <ResultMessages
                        hits={hits}
                        hasNoHits={hasNoHits}
                        hasMoreHits={hasMoreHits}
                        totalHits={totalHits}
                        emptyRenderer={props.emptyRenderer}
                        error={error}
                    />
                </div>
            </div>
        </div>
    );
};

export default Input;
