import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { LabelProps } from './Label';
import { HelpProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface IRadioComposition {
    /** Labeling for the radio */
    Label: React.FC<LabelProps>;
    /** Help text for the `Radio` */
    Help: React.FC<HelpProps>;
    /**
     * Styled equivalent of `<input type="radio"/>`
     *
     * Additional accepted props:
     *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
     *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
     *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Radio input and label
 *
 * `<Radio>` components **must** always be contained within a `<FieldSet>`
 */
declare const Radio: React.FC<Props> & IRadioComposition;
export default Radio;
//# sourceMappingURL=index.d.ts.map