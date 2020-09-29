
import { Success, SuccessProps } from './Success';
import { Error, ErrorProps } from './Error';
import { Label, LabelProps } from './Label';
import { Help, HelpProps } from './Help';

export {
    Success,
    Error,
    Label,
    Help,
}

export type {
    SuccessProps,
    ErrorProps,
    LabelProps,
    HelpProps,
}

/**
 * Base composition for compound form components
 */
export interface ICommonComposition {
    /**
    * Primary instructions for filling out a field
    * 
    * Supports all
    * [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
    * props.
    */
    Label: React.FC<LabelProps>

    /**
    * Additional (small) help text to go alongside the field
    * 
    * Supports all
    * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
    * props.
    */
    Help: React.FC<HelpProps>

    /**
    * Provides instructions on how to resolve the validation error.
    * 
    * Will display when error is set in the parent form component or 
    * the parent's `bind` prop is in an error state.
    * 
    * Supports all
    * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
    * props.
    */
    Error: React.FC<ErrorProps>

    /**
    * Feedback for when the form component meets the validation rules.
    * 
    * Will display when `success` is set in the parent form component
    * 
    * Supports all
    * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
    * props.
    */
    Success: React.FC<SuccessProps>
}
