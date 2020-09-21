import React from 'react';
import { SearchFilters } from '../..';

export type KeyValuePairs = { [key: string]: string }

// All these "Yet Another" wrappers will eventually go away and be 
// replaced with the new ORIS/UI form components (hopefully)

export type YetAnotherCheckboxWrapperProps = {
    name: string
    checked: boolean
    onClick: (checked: boolean) => void
}

export const YetAnotherCheckboxWrapper: React.FC<YetAnotherCheckboxWrapperProps> = (props) => {
    const id = `filter-checkbox-${props.name}`;
    return (
        <div className="custom-control custom-checkbox">
            <input type="checkbox" 
                className="custom-control-input"
                id={id} 
                name={props.name}
                checked={props.checked}
                onClick={(e) => props.onClick(e.currentTarget.checked)}
            /> 
            <label className="custom-control-label" htmlFor={id}>
                {props.children}
            </label>
        </div>
    );
}

export type YetAnotherRadioSetWrapperProps = {
    name: string
    value: string
    options: KeyValuePairs
    onChange: (key: string, value: string) => void
}

export const YetAnotherRadioSetWrapper: React.FC<YetAnotherRadioSetWrapperProps> = (props) => {
    return (<>
        {Object.keys(props.options).map((key) => {
            const id = `${props.name}-${key}`;
            return <div className="custom-control custom-radio" key={key}>
                <input type="radio" 
                    className="custom-control-input"
                    id={id}
                    name={props.name}
                    checked={key === props.value}
                    onClick={(e) => {
                        props.onChange(key, props.options[key])
                    }}
                />
                <label className="custom-control-label" htmlFor={id}>
                    {props.options[key]}
                </label>
            </div>
        })}
    </>);
}

// export class SearchData {
//     terms: string 
//     filters: SearchFilters

//     constructor() {
//         this.terms = '';
//         this.filters = new SearchFilters();
//     }
// }

// SearchBind extends IFieldBind<SearchData>
