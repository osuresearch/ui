import React, { useContext } from 'react';
import { IFormFieldContext } from '../../../internal/FormCommon/types'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    /** 
     * Will automatically be provided by an HOC 
     * 
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
}

const Label: React.FC<LabelProps> = (props) => {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context!);

    const label = props.children || bind.instructions || '';
    const className = 'custom-control-label' + (props.className ? ' ' + props.className : '');

    // React will only allow either dangerouslySetInnerHTML or a child
    if (props.dangerouslySetInnerHTML) {
        return <label {...otherProps} htmlFor={bind.id} className={className} />;
    }

    return (
        <label
            {...otherProps}
            htmlFor={bind.id}
            className={className}
        >
            <span className="label-inner">
                {label}
            </span>
        </label>
    );
}

export default Label;
