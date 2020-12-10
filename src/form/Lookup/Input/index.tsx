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

    // value?: Nullable<JsonObject>

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
 */
const Input: React.FC<Props> = (props) => {
    const { bind, provider } = useContext(Context);
    const { terms, searching, error, results, setTerms } = useSearchProvider(provider);

    console.debug('RHF stuff', props.onChange, props.onBlur, props.value);

    // const value = bind.value || props.defaultValue || props.value;

    // const readOnly = bind.readOnly || props.readOnly;
    // const required = bind.required || props.required;

    // // TODO: Diff support

    // // if (readOnly) {
    // //     return <Print value={typeof (value) === 'string' ? value : ''} />
    // // }

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

    const [value, setValue] = useState<Nullable<JsonObject>>(() =>
        props.defaultValue ? props.defaultValue : null
    );

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

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        const results = resultsRef.current?.querySelectorAll('.lookup-result');
        const activeDescendantIndex = results && activeDescendant ? findIndex(results, { id: activeDescendant }) : undefined;

        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
            setActiveDescendant(undefined);
        }

        // Down Arrow - If the grid is displayed, moves focus to the first suggested value.
        if (showResultsPane && e.key === "ArrowDown") {
            // Prevent viewport from moving down
            e.preventDefault();

            if (results) {
                if (typeof (activeDescendantIndex) !== 'undefined') {
                    if (typeof (results[activeDescendantIndex + 1]) !== "undefined") {
                        setActiveDescendant(results[activeDescendantIndex + 1].id);
                    } else {
                        setActiveDescendant(results[0].id);
                    }
                } else {
                    setActiveDescendant(results[0].id);
                }
            }
        }

        // Up Arrow - If the grid is displayed, moves focus to the last suggested value.
        if (showResultsPane && e.key === "ArrowUp") {
            // Prevent viewport from moving up
            e.preventDefault();

            if (results) {
                if (typeof (activeDescendantIndex) !== 'undefined') {
                    if (typeof (results[activeDescendantIndex - 1]) !== "undefined") {
                        setActiveDescendant(results[activeDescendantIndex - 1].id);
                    } else {
                        setActiveDescendant(results[results.length - 1].id);
                    }
                } else {
                    setActiveDescendant(results[results.length - 1].id);
                }
            }
        }

        // Escape - If the grid is displayed, closes it. If the grid is not displayed, clears the textbox.
        if (e.key === "Escape") {
            if (showResultsPane) {
                setShowResultsPane(false);
            } else {
                if (inputRef.current) {
                    inputRef.current.value = '';
                    setTerms('');
                }
            }
        }

        // Enter - Select the activeDescendant if one is defined
        if (showResultsPane && e.key === "Enter") {
            (resultsRef.current?.querySelector(`#${activeDescendant}`) as HTMLDivElement)?.click();
        }
    }

    const [activeDescendant, setActiveDescendant] = useState<string | undefined>(undefined);

    const isActiveDescendant = (idx: number) => {
        return activeDescendant === `${bind.id}-result-${idx}`;
    }

    useEffect(() => {
        if (value) {
            setTimeout(() => valueRef.current?.focus(), 100);
        } else {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [value]);

    // If this is a controlled component, we use props.value.
    // Otherwise we use the uncontrolled local value state.
    const renderedValue = props.value || value;
    return (
        <div className="input-group lookup-input">
            {/* Only show the search input if we have no selection */}
            {!value &&
                <InputGroup
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
                updateValue={updateValue}
            >
                {renderedValue && props.resultRenderer(renderedValue)}
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
                                id={`${bind.id}-result-${idx}`}
                                onClick={() => updateValue(hit)}
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
                        error={error}
                    />
                </div>
            </div>
        </div>
    );
};

export default Input;
