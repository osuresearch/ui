import React from 'react';
import FormContext from '../../internal/FormCommon/FormContext';

import Group from './Group';

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    isDiff: boolean,
    isPrint: boolean
};

interface IFormComposition {
    Group: React.FC
}

const Form: React.FC<Props> & IFormComposition = ({
    isDiff = false,
    isPrint = false,
    ...props
}) => {
    return (
        <form {...props}>
            <FormContext.Provider value={{ isDiff, isPrint }}>
                {props.children}
            </FormContext.Provider>
        </form>
    )
}

Form.Group = Group;

export default Form;