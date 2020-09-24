import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { SearchProps } from './Search';
import { EmailProps } from './Email';
import { RichProps } from './Rich';
import { AreaProps } from './Area';
import { ICommonComposition } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface ITextComposition extends ICommonComposition {
    /** Equivalent of `<input type='text'>` */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
    /**
     * Jams a standard ORIS/UI search result pair into
     * a single string value bind in the form `key|name`
     */
    Search: React.FC<SearchProps>;
    /**
     * Email input field with automatic validation for invalid
     * email addresses
     */
    Email: React.ForwardRefExoticComponent<EmailProps & React.RefAttributes<HTMLInputElement>>;
    /** Equivalent of `<textarea>` */
    Area: React.ForwardRefExoticComponent<AreaProps & React.RefAttributes<HTMLTextAreaElement>>;
    /** A rich text editor (RTE) based on CKEditor */
    Rich: React.FC<RichProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Text-like content input fields
 */
declare const Text: React.FC<Props> & ITextComposition;
export default Text;
//# sourceMappingURL=index.d.ts.map