
// NOT A REAL COMPONENT
// THIS FILE IS PURELY FOR DOCUMENTATION PURPOSES
import React from 'react';

type Props = {
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
}

/** 
 * Skeleton is a placeholder to display instead of the actual content.
 * 
 * Skeleton is part of the PrimeReact package, which is included in ORIS/UI.
 * 
 */
class Skeleton extends React.Component<Props> {
    static componentPathLine = `import { Skeleton } from 'primereact/skeleton'`;

    static defaultProps = {
        shape: 'rectangle',
        width: '100%',
        height: '1rem',
        animation: 'wave'
    }

    render() {
        return null;
    }
}

export default Skeleton;