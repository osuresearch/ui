import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../internal/FormCommon/Components';
import { UploadedFile } from '../../types';

type Props = FormFieldProps<UploadedFile[]> & {

}

interface IUploadComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}

export const Context = React.createContext<IFormFieldContext<UploadedFile[]>>({
    bind: new NullFieldBind<UploadedFile[]>()
});

/**
 * Upload one or more files alongside a form
 */
const Upload: React.FC<Props> & IUploadComposition = ({
    children,
    ...props
}) => {
    const { bind } = useFieldBindOrProps(props);

    let className = `
        ui-form-element
        ${bind.className ? bind.className : ''}
        ${bind.required ? 'is-required' : ''}
        ${bind.error ? 'is-invalid' : ''}
        ${bind.success ? 'is-valid' : ''}
    `;
    // Remove new lines and trim
    className = className.replace(/\n/g, ' ').trim();

    return (
        <Context.Provider value={{ bind }}>
            <div className={className}>
                {children}
            </div>
        </Context.Provider>
    );
}

Upload.Input = Input;
Upload.Label = withFormContext<LabelProps>(Label, Context);
Upload.Help = withFormContext<HelpProps>(Help, Context);
Upload.Error = withFormContext<ErrorProps>(Error, Context);
Upload.Success = withFormContext<SuccessProps>(Success, Context);

export default Upload;
