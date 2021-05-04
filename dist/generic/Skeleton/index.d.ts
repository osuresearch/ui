import React from 'react';
declare type Props = {
    /** Shape of the element, options are "rectangle" and "circle". */
    shape?: string;
    /** Size of the Circle or Square. */
    size?: string;
    /** Width of the element. */
    width?: string;
    /** Height of the element. */
    height?: string;
    /** Border radius of the element, defaults to zero. */
    borderRadius?: string;
    /** Type of the animation, valid options are "wave" and "none". */
    animation?: string;
};
/**
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * Skeleton is part of the PrimeReact package, which is included in ORIS/UI.
 *
 */
declare class Skeleton extends React.Component<Props> {
    static componentPathLine: string;
    static defaultProps: {
        shape: string;
        width: string;
        height: string;
        animation: string;
    };
    render(): null;
}
export default Skeleton;
//# sourceMappingURL=index.d.ts.map