import React, { useContext, useRef, useState } from 'react';
import { Context, JsonObject } from '..';
import { Nullable } from '../../../internal/FormCommon/types';
import { useSearch } from '../../../search';

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
}

/**
 * Lookup input
 */
const Input: React.FC<Props> = (props) => {
    const { bind, provider } = useContext(Context);
    const { terms, searching, error, results, setTerms } = useSearch(provider);

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

    // let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
    //     ref: ref,
    //     ...props,
    //     type: "text",
    //     id: bind.id,
    //     name: bind.name || props.name,
    //     defaultValue: value,
    //     className: classNames,
    //     'aria-describedby': `${bind.id}-help`,
    //     onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    //         bind.value = e.currentTarget.value;
    //         if (props.onChange) props.onChange(e);
    //     },
    //     readOnly: readOnly,
    //     "aria-disabled": readOnly,
    //     "aria-required": required,
    //     "aria-invalid": bind.error ? true : false
    // }

    // // Assign a value to the input if it is controlled
    // if (bind.controlled) {
    //     inputProps.value = value
    // }

    // TODO: Flexible based on JSON Path.
    // Right now we assume it's always { hits: number, results: any[] }
    const totalHits = results?.hits || 0;
    const hits: JsonObject[] = results?.results || [];

    const [value, setValue] = useState<Nullable<JsonObject>>(
        props.defaultValue ? props.defaultValue : null
    );

    const hasHits = terms.length > 0 && hits.length > 0;
    const hasNoHits = terms.length > 0 && !searching && totalHits < 1;
    const hasMoreHits = terms.length > 0 && !searching && totalHits > hits.length;
    const showResultsPane = !value && (hasHits || hasNoHits || error !== undefined);

    const updateValue = (newValue: Nullable<JsonObject>) => {
        setValue(newValue);
        setTerms('');
        
        // Notify the bind and trigger onChange of the parent Lookup.
        bind.value = newValue;
    }

    return (
        <div className="lookup-input">
            {/* Only show the search input if we have no selection */}
            {!value && 
            <input 
                type="text"
                id={bind.id} 
                name={bind.name}
                className={classNames}
                onChange={(e) => {
                    setTerms(e.target.value);
                }}
            />
            }

            {/* Show the search value with a button to clear */}
            {value &&
            <div className="lookup-value">
                <div className="lookup-value-content">
                    {props.resultRenderer(value)}
                </div>

                <button className="lookup-value-clear" onClick={() => updateValue(null)}>
                    &times;
                </button>
            </div>
            }

            <div className="lookup-results">    
                <div 
                    id="TODO" 
                    className="dropdown-menu" 
                    role="listbox"
                    style={{display: showResultsPane ? 'block' : 'none'}} 
                    tabIndex={-1}
                >
                    {error && 
                    <div className="dropdown-header lookup-error">
                        {error}
                    </div>
                    }
                
                    {hits.map((hit, idx) => 
                    <button type="button" key={idx} onClick={() => updateValue(hit)}>
                        {props.resultRenderer(hit)}
                    </button>
                    )}

                    {hasNoHits &&
                    <div className="dropdown-header">
                        There are no hits.
                        Try different search terms.
                    </div>
                    }

                    {hasMoreHits && 
                    <div className="dropdown-header">
                        There are <strong>{totalHits - hits.length}</strong> additional hits.
                        Refine your search terms.
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Input;
