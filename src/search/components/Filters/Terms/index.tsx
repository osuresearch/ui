import { uniqueId } from 'lodash';
import throttle from 'lodash/throttle';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Context } from '..';
import { Icon } from '../../../..';

import './index.scss';

// HTML attributes allowed from `input` - excluding those we override internally.
// This will allow the developer to add any ARIA related attributes safely.
type SafeInputHTMLAttributes = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'id' | 'className' | 'title' | 'value' | 'onChange' | 'onKeyUp'
>;

export type Props = SafeInputHTMLAttributes & {
    /**
     * If false (default), the user needs to click an adjacent "Search" button to apply the search terms.
     * If true, the search terms are updated as the user types.
     *
     * Depending on your use case, you may want one behaviour over the other.
     * For example, when live terms may negatively impact the performance of your app.
     */
    live?: boolean

    /**
     * Throttle rate (in milliseconds) to update search terms when the user types.
     *
     * Defaults to `750`
     */
    throttleRate?: number

    /**
     * Unique element ID. If not provided one will be automatically generated for accessibility.
     */
    id?: string

    /**
     * Additional classes to add to the wrapping div element.
     */
    className?: string
};

// Should probably take input props so we can add things like aria-owns, aria-haspopup, etc
// for specific use cases. Also a required ID for labeling?

/**
 * Full-text search terms input
 *
 * Accepts
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * props EXCEPT: `type | title | value | onChange | onKeyUp`
 */
const Terms: React.FC<Props> = ({
    live = false,
    throttleRate = 750,
    className = '',
    id,
    ...props
}) => {
    const { terms, searching, setTerms } = useContext(Context);
    const [value, setValue] = useState('');
    const [elementId, ] = useState(id ?? uniqueId('terms-'));

    // Update self when an external entity modifies search terms
    useEffect(() => setValue(terms), [terms]);

    const setTermsThrottled = useCallback(
        throttle(terms => setTerms(terms), throttleRate),
        [throttle, throttleRate]
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setValue(value);

        if (live) {
            setTermsThrottled(value);
        }
    }

    return (
        <div className={'input-group terms ' + (live ? 'is-live ' : ' ') + className}>
            <label htmlFor={elementId} className="sr-only">
                Search Terms
            </label>

            <span className="input-group-prefix">
                {searching && <Icon name="spinner" spin />}
                {!searching && <Icon name="search" />}
            </span>

            <input
                {...props}
                type="text"
                id={elementId}
                className="form-control"
                title="Search by keywords"
                value={value}
                onChange={onChange}
                onKeyUp={(e) => e.key === 'Enter' && setTerms(value)}
            />

            {!live &&
            <div className="input-group-append">
                <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setTerms(value)}
                >
                    Search
                </button>
            </div>
            }

            {live && terms.length > 0 &&
            <button
                className="btn btn-link terms-clear"
                type="button"
                title="Clear search terms"
                onClick={() => setTerms('')}
            >
                <Icon name="close"></Icon>
            </button>
            }
        </div>
    );
}

export default Terms;
