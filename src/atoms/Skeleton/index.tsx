
// NOT A REAL COMPONENT
// THIS FILE IS PURELY FOR DOCUMENTATION PURPOSES
import React from 'react';
import { SkeletonProps, Skeleton as PRSkeleton, SkeletonShapeType } from 'primereact/skeleton';

export type Props = {
    /** Shape of the element, options are "rectangle" and "circle". */
    shape?: SkeletonShapeType;

    /** Size of the Circle or Square. */
    size?: string;

    /** Width of the element. */
    width?: string;

    /** Height of the element. */
    height?: string;
}

/** 
 * Skeleton is a placeholder to display instead of the actual content.
 */
export const Skeleton = ({
    shape = 'rectangle',
    width = '100%',
    height = '1rem',
    ...rest
}: Props) => {
    return <PRSkeleton 
        shape={shape} 
        width={width} 
        height={height} 
        animation={'wave'}
        {...rest} 
    />
}
