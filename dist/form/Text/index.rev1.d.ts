import React from 'react';
import { FieldBind, FormFieldProps } from '../../internal/FormCommon/types';
import { LabelProps } from './Label';
import { HelpProps } from './Help';
import { InputProps } from './Input';
declare type Props = FormFieldProps<string> & {
    /**
     * Number of lines for this field's input editor.
     * Will toggle between input and textarea accordingly.
     */
    lines?: number;
};
interface ITextContext {
    bind: FieldBind<string>;
    value?: string;
    lines: number;
}
interface ITextComposition {
    Label: React.FC<LabelProps>;
    Help: React.FC<HelpProps>;
    Input: React.FC<InputProps>;
}
export declare const TextContext: React.Context<ITextContext>;
declare const Text: React.FC<Props> & ITextComposition;
export default Text;
//# sourceMappingURL=index.rev1.d.ts.map