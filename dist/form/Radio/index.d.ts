import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ControlLabelProps, HelpProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface IRadioComposition {
    /**
     * #### `Radio.Label` (required)
     * Equivalent of `<label>`
     *
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
     */
    Label: React.FC<ControlLabelProps>;
    /** Help text for the `Radio` */
    Help: React.FC<HelpProps>;
    /**
     * #### `Radio.Input` (required)
     * Equivalent of `<input type='radio'>`
     *
     * * **Props**
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
 * `<Radio>` components **must** always be contained within
 * a `<FieldSet>`
 *
 * ### Subcomponents
 *
 * #### `<Radio.Input>` (required)
 * Equivalent of `<input type='radio'>`
 *
 * * **Props**
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 *
 *
 * #### `<Radio.Label>` (required)
 * Equivalent of `<label>`
 *
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 *
 * #### `<Radio.Help>`
 * Help text for the `<Radio>`
 *
 */
declare const Radio: React.FC<Props> & IRadioComposition;
export default Radio;
//# sourceMappingURL=index.d.ts.map