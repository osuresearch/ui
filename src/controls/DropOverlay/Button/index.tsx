import React, { useContext } from 'react';
import { Context } from '..';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
}

const Button: React.FC<Props> = ({ className, theme = "outline-secondary", ...props }) => {
    const { id } = useContext(Context);

    const classNames = `btn btn-${theme} dropdown-toggle ${className ? className : ''}`

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
