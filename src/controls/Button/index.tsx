
import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

export interface Props {
    /** Bootstrap theme name (e.g. `danger`, `success`) */
    theme?: string;

    /** Additional class names to apply to the button */
    className?: string;

    /** Should click events / link redirects be ignored */
    disabled?: boolean;

    /** 
     * Button link target. Will render as a React Router <Link> if supplied. 
     * 
     * Buttons with a `to` will not execute `onClick`. 
     */
    to?: string;

    /** Click event callback */
    onClick?(event: MouseEvent<HTMLButtonElement>): void;

    /** Type */
    type?: 'button' | 'reset' | 'submit'
}

const Button: React.FC<Props> = ({
    children,
    to,
    theme = 'primary',
    className = '',
    disabled = false,
    onClick = undefined,
    type = 'button'
}) => {
    // Sanity check for developers - make sure they do not specify `to` and `onClick` at once
    if (to && onClick) {
        console.warn('[Button] `onClick` property will not execute if you specify `to`. These are mutually exclusive.');
    }

    if (to && !disabled) {
        return (
            <Link role="button" to={to} className={`btn btn-${theme} ${className}`}>{children}</Link>
        );
    }

    return (
        <button type={type} disabled={disabled}
            className={`btn btn-${theme} ${className}`}
            onClick={!disabled ? onClick : undefined}>
            {children}
        </button>
    );
};

export default Button;
