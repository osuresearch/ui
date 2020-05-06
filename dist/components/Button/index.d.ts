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
declare const Button: React.FC<Props>;
export default Button;
//# sourceMappingURL=index.d.ts.map