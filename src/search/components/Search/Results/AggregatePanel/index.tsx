
import React, { useState, useCallback, useImperativeHandle, useRef, useEffect } from 'react';
import useSearch from '../../../../hooks/useSearch';

import DisplayResults from './DisplayResults';
import Empty from '../../Empty';
import Error from '../../Error';

import './index.scss';

export interface PanelMethods {
    show: () => void;
    hide: () => void;
}

export type Props = {
    provider: string;
    results?: any[];
    /**
     * 	JSON value to extract for categorizing results into multiple buckets.
     * Dot-notation can be used to select a nested JSON path.
     */
    categorizeBy: string;
    categoryHeaderWrapper?: React.FC;
    placeholder?: React.FC;
    children: React.ReactElement;
}

const AggregatePanel = React.forwardRef<PanelMethods, Props>(({
    provider,
    results,
    categorizeBy,
    categoryHeaderWrapper,
    placeholder,
    children
}, ref) => {
    const { terms } = useSearch(provider);
    const [show, setShow] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);

    const panel = useRef<HTMLDivElement>(null);

    const handleHide = useCallback(() => {
        // Only hide the panel as long as no element within
        // the panel has focus for keyboard accessibility
        // Need a very short timeout since the hide method
        // will be attached to an onBlur
        setTimeout(() => {
            if (!(panel.current?.contains(document.activeElement))) {
                setShow(false);
            }
        }, 1);
    }, []);

    useEffect(() => {
        if (!hasFocus) {
            handleHide();
        }
    }, [handleHide, hasFocus]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        // Hide the panel if the escape key is pressed
        if (e.key === 'Escape') {
            setShow(false);
        }
    }

    useImperativeHandle(ref, () => ({
        show: () => setShow(true),
        hide: () => handleHide()
    }))

    const Placeholder = () => {
        if (placeholder && !terms) {
            const P = placeholder;
            return <P />;
        }

        return null;
    }

    return (
        <div
            id={provider + '-results'}
            className="dropdown-menu search-aggregate-panel"
            role="listbox"
            style={{ display: show ? 'block' : 'none' }}
            ref={panel}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <Placeholder />

            <DisplayResults
                terms={terms}
                results={results}
                categorizeBy={categorizeBy}
                categoryHeaderWrapper={categoryHeaderWrapper}
            >
                {children}
            </DisplayResults>

            <Empty>
                <div className="dropdown-header">
                    There are no matching results.
                </div>
            </Empty>

            <Error>
                <div className="dropdown-header">
                    <span className="lookup-error text-danger">
                        Something went wrong. Try reloading the page. If the problem persists,
                            contact <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>
                    </span>
                </div>
            </Error>
        </div>
    );
});

export default AggregatePanel;
