import React from 'react';
import classNames from 'classnames';

export type Props = {
    children: React.ReactNode
    className?: string
}

/**
 * Docs about row!
 */
export const Row = ({ className, children }: Props) => {
    return (
        <div className={classNames(
            'row',
            className
        )}>{children}</div>
    )
}
