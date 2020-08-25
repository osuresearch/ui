import React, { MouseEvent } from 'react';
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
    type?: 'button' | 'reset' | 'submit';
}
declare const Button: React.FC<Props>;
export default Button;
//# sourceMappingURL=index.d.ts.map