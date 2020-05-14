
import React, { MouseEvent } from 'react';

export interface Props {
    /** Bootstrap theme name (e.g. `danger`, `success`) */
    theme?: string;

    /** Additional class names to apply to the button */
    className?: string;

    /** Should click events be ignored */
    disabled?: boolean;

    /** Click event callback */
    onClick?(event: MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<Props> = ({
    children, 
    theme = 'secondary',
    className = '',
    disabled = false,
    onClick = undefined,
}) => <button type="button" disabled={disabled}
        className={`btn btn-${theme} ${className}`} 
        onClick={!disabled ? onClick : undefined}>
            {children}
    </button>;

export default Button;
