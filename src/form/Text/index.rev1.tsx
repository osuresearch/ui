import React, { createContext, useMemo, useState, useEffect, useCallback } from 'react';
import { FieldBind, NullFieldBind, SetFieldBindValue, IFieldBind, OnChangeFormField, FormFieldProps } from './etc';
import { Label, LabelProps } from './Label';
import { Help, HelpProps } from './Help';
import { Input, InputProps } from './Input';

type Props = FormFieldProps<string> & {
    /** 
     * Number of lines for this field's input editor.
     * Will toggle between input and textarea accordingly. 
     */
    lines?: number
}

interface ITextContext {
    bind: FieldBind<string>;
    // setValue: SetFieldBindValue<string>;
    value?: string; // read-only copy of bind.value
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
    bind, 
    children, 
    onChange,
    ...props // everything else is of FieldBind<string>
}) => {
    const [value, setValue] = useState(() => bind?.value ?? props.value);

    // If a bind isn't provided, we need to construct one directly from props. 
    // BUT - if props ever change that bind should also change... So we're looking
    // at a big ass useEffect...

    const [realBind, setRealBind] = useState<IFieldBind<string>>(() => {
        if (bind) {
            console.log('init realbind from bind', bind);
            return bind;
        }

        console.log('init realbind from props', props);
        return createFieldBindFromProps(props);
    });

    // Register our state setter as a bind change handler to trigger a 
    // refresh of this component/context upon value change 
    useEffect(() => {
        console.debug('bind onchange', realBind);

        // Register change listeners
        realBind.onChange.add(setValue);
        if (onChange) realBind.onChange.add(onChange);

        // Unregister change listeners
        return () => {
            realBind.onChange.remove(setValue);
            if (onChange) realBind.onChange.remove(onChange);
        }
    }, [realBind, onChange]);

    // If the bind object reference changes, apply the new bind.
    // Or - if any of the props change, update the props copy bind.
    useEffect(() => {
        if (bind) {
            console.debug('bind change, setting state', bind);
            setRealBind(bind);
        } else {
            // It was removed, fallback to a props copy
            console.debug('falling back to props', props);
            setRealBind(createFieldBindFromProps(props));
        }
    }, [bind, props.value, props.error, props.help, props.instructions]); // ... and so on... unfortunately.

    return (
        <TextContext.Provider value={{ bind: realBind, value, lines }}>
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
