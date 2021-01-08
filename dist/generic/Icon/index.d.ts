import React from 'react';
export interface Props {
    /** Font Awesome 4.7 icon name */
    name: string;
    /** Should the icon have a spin animation */
    spin?: boolean;
    /** Will encapsulate the specified icon within a circle */
    circled?: boolean;
    /**
     * Screen reader labeling for the icon. If not provided,
     * the icon will be flagged as `aria-hidden`
     */
    label?: string;
}
/**
 * Font Awesome 4.7 icons with build-in accessibility
 */
declare const Icon: React.FC<Props>;
export default Icon;
//# sourceMappingURL=index.d.ts.map