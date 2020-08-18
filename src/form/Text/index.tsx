import React, { createContext, useMemo, useState, useEffect, useCallback } from 'react';
import { FieldBind, NullFieldBind, SetFieldBindValue, IFieldBind, OnChangeFormField, FormFieldProps } from './etc';
import { Label, LabelProps } from './Label';
import { Help, HelpProps } from './Help';
import { Input, InputProps } from './Input';
import useFieldBind from './useFieldBind';
import useFieldBindOrProps from './useFieldBindOrProps';

type Props = FormFieldProps<string> & {
    /** 
     * Number of lines for this field's input editor.
     * Will toggle between input and textarea accordingly. 
     */
    lines?: number
}

interface ITextContext {
    bind: IFieldBind<string>;
    lines: number;
}

interface ITextComposition {
    Label: React.FC<LabelProps>;
    Help: React.FC<HelpProps>;
    Input: React.FC<InputProps>;
    // ValidFeedback: React.FC<ValidFeedbackProps>;
    // InvalidFeedback: React.FC<InvalidFeedbackProps>;
}

export const TextContext = createContext<ITextContext>({
    bind: new NullFieldBind<string>(),
    // setValue: () => 0,
    lines: 0
});

function createFieldBindFromProps<T>(props: any): FieldBind<T> {
    // We cast it off to a matching interface and
    // then map fields onto a concrete instance.
    const ifb = props as IFieldBind<T>;
    const bind = new FieldBind<T>();

    bind.error = ifb.error;
    bind.help = ifb.help;
    bind.instructions = ifb.instructions;
    bind.name = ifb.name;
    bind.id = ifb.id;
    bind.readOnly = ifb.readOnly;
    bind.value = ifb.value;

    return bind;
}

const Text: React.FC<Props> & ITextComposition = ({ 
    lines = 1, 
    children,
    ...props // everything else is of FieldBind<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <TextContext.Provider value={{ bind, lines }}>
            <div className="form-group">
                {children}
            </div>
        </TextContext.Provider>
    );
}

Text.Label = Label;
Text.Help = Help;
Text.Input = Input;

export default Text;
