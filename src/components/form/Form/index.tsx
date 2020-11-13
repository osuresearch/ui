import React from 'react';

type Props = React.FormHTMLAttributes<HTMLFormElement> & {};

/**
 * (Somewhat) self-explanatory form container
 * 
 * [Native `<form>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes) and 
 * [React event handlers](https://reactjs.org/docs/events.html#supported-events) are supported
 * 
 */
const Form: React.FC<Props> = ({ ...props }) => {
    return (
        <form {...props}>
            {props.children}
        </form>
    )
}

export default Form;