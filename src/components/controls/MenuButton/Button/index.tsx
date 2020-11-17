import React, { useContext } from 'react';
import { Context } from '..';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Button: React.FC<Props> = (props) => {
    const { id } = useContext(Context);

    const classNames = `btn btn-${props.theme ? props.theme : 'outline-secondary'} dropdown-toggle ${props.className ? props.className : ''}`

    return (
        <button
            {...props}
            className={classNames}
            type="button"
            id={id}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            {props.children}
        </button>
    )
}

export default Button;
