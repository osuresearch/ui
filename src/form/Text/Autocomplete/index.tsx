import { findIndex, min, throttle, uniqueId } from 'lodash';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '..';
import { SearchDriver, SearchProvider, useSearchProvider } from '../../../search';
import { JsonObject } from '../../../types';

import Diff from '../Diff';

export type AutocompleteProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Search provider to use for interacting with a search API.
     *
     * You MUST specify EITHER the `provider` or `driver` prop.
     */
    provider?: string

    /**
     * Search driver to use for interacting with a search API.
     *
     * You MUST specify EITHER the `provider` or `driver` prop.
     */
    driver?: SearchDriver
}

type ResultProps = {
    id: string,
    onClick: () => void,
    isSelected: boolean
}

const mergeRefs = (...refs: any) => {
    const filteredRefs = refs.filter(Boolean);
    if (!filteredRefs.length) return null;
    if (filteredRefs.length === 0) return filteredRefs[0];
    return (inst: any) => {
        for (const ref of filteredRefs) {
            if (typeof ref === 'function') {
                ref(inst);
            } else if (ref) {
                ref.current = inst;
            }
        }
    };
};

const Result: React.FC<ResultProps> = ({
    id,
    onClick,
    isSelected,
    children
}) => {
    return (
        <div
            role="option"
            className={`lookup-result ${isSelected && 'active-result'}`}
            id={id}
            onClick={onClick}
            aria-selected={isSelected}
        >
            {children}
        </div>
    );
}

function findOverlap(prefix: string, suffix: string): number {
    prefix = prefix.toLowerCase();
    suffix = suffix.toLowerCase();
    for (var s = suffix.length; s > 0; s--) {
        if (prefix.endsWith(suffix.substring(0, s))) {
            return s;
        }
    }

    return -1;
}

const AutocompleteImpl = React.forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
    const { driver, provider, ...explicitInputProps } = props;

    const { bind } = useContext(Context);
    const { terms, searching, error, response, setTerms } = useSearchProvider(provider as string);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeDescendant, setActiveDescendant] = useState<string | undefined>(undefined);
    const [offset, setOffset] = useState(0);

    const resultsRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const setTermsThrottled = useCallback(
        throttle((terms: string) => setTerms(terms), 500),
        [throttle]
    );

    // TODO: Flexible based on JSON Path.
    // Right now we assume it's always { hits: number, results: JsonObject[] }
    const typedResults = response ? response as { hits: number, results: JsonObject[] } : undefined;
    const hits: JsonObject[] = typedResults?.results || [];
    const hasHits = terms.length > 0 && hits.length > 0;

    useEffect(() => {
        setShowSuggestions(hasHits || error !== undefined);
    }, [error, hasHits]);

    const value = bind.value || props.defaultValue || props.value;

    const readOnly = bind.readOnly || props.readOnly;
    const required = bind.required || props.required;

    if (bind.diff) {
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    const focusInput = () => {
        // Needs setTimeout for the effect to apply correctly in Safari
        setTimeout(() => inputRef.current?.focus(), 100);
    }

    const updateTerms = (terms: string) => {
        // var o = offset;
        // if (o >= terms.length) {
        //     setOffset(0);
        // }

        // // Autocomplete from the current offset (previous autocomplete end)
        // console.log('TERMS', terms.substring(offset, terms.length).trim(), offset);

        // setTermsThrottled(terms.substring(offset, terms.length).trim());
        setTermsThrottled(terms);
    }

    const applySuggestion = (suggestion: string) => {
        var newValue = bind.value + suggestion;
        var prev = bind.value || '';

        // Replacement mode.
        newValue = suggestion;

        // Merge mode - "and foo b" -> "and Foo Bar"
        var o = findOverlap(prev, suggestion);
        if (o < 0) {
            // Fallback to append mode if there's no merge
            newValue = prev + suggestion;
        } else {
            newValue = prev.substring(0, prev.length - o) + suggestion;
        }

        if (inputRef.current)
        {
            // Trigger the onChange event on the underlying input.
            const lastValue = inputRef.current.value;
            inputRef.current.value = newValue;

            const event = new Event('input', { bubbles: true });

            const tracker = (inputRef.current as any)._valueTracker;
            if (tracker) {
              tracker.setValue(lastValue);
            }
            inputRef.current.dispatchEvent(event);
        }

        setOffset(newValue.length);
        setTerms('');
    }

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
        if (showSuggestions && e.key === "ArrowDown" && results) {
            // Prevent viewport from moving down
            e.preventDefault();

            if (typeof (activeDescendantIndex) !== "undefined" && typeof (results[activeDescendantIndex + 1]) !== "undefined") {
                // Move activeDescendant focus to next item
                setActiveDescendant(results[activeDescendantIndex + 1].id);
            } else {
                // Move activeDescendant focus to the first suggested value
                setActiveDescendant(results[0]?.id);
            }
        }

        // Up Arrow - If the listbox is displayed
        if (showSuggestions && e.key === "ArrowUp" && results) {
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
            if (showSuggestions) {
                // If the listbox is displayed, close it
                setShowSuggestions(false);
            }
        }

        // Enter - Select the activeDescendant if one is defined
        if (showSuggestions && e.key === "Enter") {
            (resultsRef.current?.querySelector(`#${activeDescendant}`) as HTMLDivElement)?.click();
            e.preventDefault();
        }
    }

    const handleInputBlur = (e: React.FocusEvent) => {
        /**
         * Hide the suggestions pane — only if the user
         * is not clicking on an result
         */
        if (e.relatedTarget !== resultsRef.current) {
            setShowSuggestions(false);
            setTerms('');
        }
    }

    const classNames = `
        form-control ${props.className ? props.className : ''}
        ${bind.error && 'is-invalid'}
        ${bind.success && 'is-valid'}
    `;

    let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
        ref: mergeRefs(inputRef, ref),
        ...explicitInputProps,
        type: "text",
        id: bind.id,
        name: bind.name || props.name,
        defaultValue: value,
        className: classNames,
        'aria-describedby': `${bind.id}-help`,
        onChange: (e) => {
            bind.value = e.currentTarget.value;

            if (props.onChange && !readOnly) {
                updateTerms(e.currentTarget.value);
                props.onChange(e);
            }
        },
        onBlur: (e) => {
            handleInputBlur(e);

            if (props.onBlur) {
                props.onBlur(e);
            }
        },
        onKeyDown: (e) => {
            handleInputKeyDown(e);
        },
        readOnly: readOnly,
        autoComplete: 'off',
        'aria-disabled': readOnly,
        'aria-required': required,
        'aria-invalid': bind.error ? true : false,
        'aria-haspopup': 'listbox',
        'aria-autocomplete': 'list',
        'aria-controls': `${bind.id}-lookup-results`,
        'aria-activedescendant': activeDescendant,
    }

    // Assign a value to the input if it is controlled
    if (bind.controlled) {
        inputProps.value = value
    }

    var minimalHitsOffset = (bind.value?.length || 0) - hits.reduce((agg, hit) => {
        const offset = findOverlap(bind.value || '', hit.suggestion as string);
        return Math.min(agg, offset);
    }, bind.value?.length || 0);

    return (
        <div className="input-group lookup-input">
            <input {...inputProps} />

            {searching &&
                <div className="sr-only" role="status">
                    Searching...
                </div>
            }

            <div className="lookup-results">
                <div className="lookup-results__offset" aria-hidden={true}>
                    {(value as string).substring(0, minimalHitsOffset)}
                </div>
                <div className="lookup-results__dropdown">
                    <div tabIndex={-1}
                        ref={resultsRef}
                        className={`dropdown-menu ${showSuggestions ? 'd-block' : 'd-none'}`}
                        // style={{ marginLeft: minimalHitsOffset * 0.5 + 'rem' }}
                    >
                        <div
                            aria-labelledby={bind.id}
                            role="listbox"
                            id={`${bind.id}-lookup-results`}
                        >
                            {hits.map((hit, idx) =>
                                <Result
                                    key={idx}
                                    id={`${bind.id}-result-${idx}`}
                                    onClick={() => {
                                        applySuggestion(hit.suggestion as string);
                                        focusInput();
                                    }}
                                    isSelected={isActiveDescendant(idx)}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: hit.highlight as string }} />
                                </Result>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
});

/**
 * Equivalent of `<input type='text'>` that provides suggestions
 * through a search provider as the user types.
 *
 * Accepts all
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * props.
 */
const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
    const [provider,] = useState(() => {
        // If we provide a driver directly, we need to generate a unique provider ID *once*
        return props.provider ?? 'local-provider-' + uniqueId();
    });

    // Make sure either a provider or driver was supplied
    if (props.driver !== undefined && props.provider !== undefined) {
        throw new Error('You cannot provide both `driver` and `provider` for a Text.Autocomplete. Specify only one.');
    }

    if (props.driver === undefined && props.provider === undefined) {
        throw new Error('You must specify either `driver` or `provider` for a Text.Autocomplete.');
    }

    // If we aren't using an external provider - instantiate a local
    // search provider with the supplied driver.
    if (props.driver !== undefined) {
        return (
            <SearchProvider id={provider} driver={props.driver}>
                <AutocompleteImpl {...props} provider={provider} />
            </SearchProvider>
        );
    }

    // If an external provider was specified, use that directly.
    return <AutocompleteImpl {...props} />;
});

export default Autocomplete;
