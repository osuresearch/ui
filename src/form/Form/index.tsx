import React from 'react';

import Group from './Group';

type Props = React.FormHTMLAttributes<HTMLFormElement> & {};

interface IFormComposition {
    Group: React.FC
}

const Form: React.FC<Props> & IFormComposition = (props) => {
    return (
        <form {...props}>
            {props.children}
        </form>
    )
}

Form.Group = Group;

export default Form;