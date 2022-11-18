
import classNames from 'classnames';
import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../../types';

export type Props = {
    children?: React.ReactNode

    /** Theme to use. Defaults to primary */
    theme?: Theme

    /** Use alternative outline theme */
    outline?: boolean 

    /** Additional class names to apply to the button */
    className?: string

    /** Should click events / link redirects be ignored */
    disabled?: boolean

    /** 
     * Button link target. Will render as a React Router <Link> if supplied. 
     * 
     * Buttons with a `to` will not execute `onClick`. 
     */
    to?: string

    /** Click event callback */
    onClick?(event: MouseEvent<HTMLButtonElement>): void

    /** Type */
    type?: 'button' | 'reset' | 'submit'

    /** Render a smaller version of this button */
    small?: boolean
}

export const Button = ({
    children,
    to,
    className,
    theme = Theme.Primary,
    outline = false,
    disabled = false,
    onClick = undefined,
    small = false,
    type = 'button'
}: Props) => {
    // Sanity check for developers - make sure they do not specify `to` and `onClick` at once
    if (to && onClick) {
        console.warn('[Button] `onClick` property will not execute if you specify `to`. These are mutually exclusive.');
    }

    const classes = classNames(
        'btn', 
        small && 'btn-sm', 
        outline && 'btn-outline-' + theme, 
        !outline && 'btn-' + theme,
        className,
    );

    if (to && !disabled) {
        return (
            <Link 
                role="button" 
                to={to} 
                className={classes}
            >{children}</Link>
        );
    }

    return (
        <button type={type} disabled={disabled}
            className={classes}
            onClick={!disabled ? onClick : undefined}>
            {children}
        </button>
    );
}
