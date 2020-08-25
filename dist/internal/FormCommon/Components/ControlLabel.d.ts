import React from 'react';
import { IFormFieldContext } from '../types';
export declare type ControlLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    context: React.Context<IFormFieldContext<any>>;
};
/**
 * Label for custom controls, i.e. checkboxes and radios.
 * Other fields should use the `Label` component
 *
 */
export declare function ControlLabel(props: ControlLabelProps): JSX.Element;
//# sourceMappingURL=ControlLabel.d.ts.map