import React from 'react';
import { IFormFieldContext } from '../types';

/**
 * Automatically provide a typed context to a form component
 */
export function withFormContext<TProps>(Component: React.FC<TProps>, context: React.Context<IFormFieldContext<any>>) {
    const WrappedComponent: React.FC<TProps> = (props) => {
        return <Component {...props} context={context} />;
    }
    return WrappedComponent;
}