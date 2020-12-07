import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';

import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';
import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import Input, { Props as InputProps } from './Input';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error as ErrorComponent, ErrorProps,
    Success, SuccessProps,
} from '../../internal/FormCommon/Components';
import { SearchDriver, SearchProvider } from '../../search';

import './index.scss';

/**
 * Arbitrary string-keyed JSON object
 */
export type JsonObject = {
    [key: string]: unknown
}

type Props = FormFieldProps<JsonObject> & {
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

interface ILookupComposition extends ICommonComposition {
    /** Search input and selection */
    Input: React.FC<InputProps>
}

type LookupContext = IFormFieldContext<JsonObject> & {
    provider: string
}

export const Context = React.createContext<LookupContext>({
    bind: new NullFieldBind<JsonObject>(),
    provider: ''
});

/**
 * Lookup a value from a selection of options
 */
const Lookup: React.FC<Props> & ILookupComposition = ({
    children,
    ...props
}) => {
    const { bind } = useFieldBindOrProps(props);
    const [provider, ] = useState(() => {
        // If we provide a driver directly, we need to generate a unique provider ID *once*
        return props.provider ?? 'local-provider-' + uniqueId();
    });

    // Make sure either a provider or driver was supplied
    if (props.driver !== undefined && props.provider !== undefined) {
        throw new Error('You cannot provide both `driver` and `provider` for a Lookup. Specify only one.');
    }

    if (props.driver === undefined && props.provider === undefined) {
        throw new Error('You must specify either `driver` or `provider` for a Lookup.');
    }

    const contextWrappedDOM = (
        <Context.Provider value={{ bind, provider }}>
            <div className={`
                ui-form-element ${bind.required ? 'is-required' : ''}
                ${bind.error && ' is-invalid'}
                ${bind.success && 'is-valid'}
            `}>
                {children}
            </div>
        </Context.Provider>
    );

    // If we aren't using an external provider - instantiate a local
    // search provider with the supplied driver.
    if (props.driver !== undefined) {
        return (
            <SearchProvider id={provider} driver={props.driver}>
                {contextWrappedDOM}
            </SearchProvider>
        );
    }

    // If we ARE using an external provider - just return the context and DOM.
    return contextWrappedDOM;
}

Lookup.Input = Input;

// `as any` hacks are needed because we expand the context with data
// that's unexpected by withFormContext. It's safe to do here,
// we safely typed the context beforehand.
Lookup.Label = withFormContext<LabelProps>(Label, Context as any);
Lookup.Help = withFormContext<HelpProps>(Help, Context as any);
Lookup.Error = withFormContext<ErrorProps>(ErrorComponent, Context as any);
Lookup.Success = withFormContext<SuccessProps>(Success, Context as any);

export default Lookup;
