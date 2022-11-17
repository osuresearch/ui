import React from 'react';
import classNames from 'classnames';

export type Props = {
    children: React.ReactNode

    className?: string

    /** Default size for auto-layout */
    size?: number

    /** Extra extra large span */
    xxl?: number | 'auto'

    /** Extra large span */
    xl?: number | 'auto'

    /** Large span */
    lg?: number | 'auto'

    /** Medium span */
    md?: number | 'auto'

    /** Small span */
    sm?: number | 'auto'

    /** Extra small span */
    xs?: number | 'auto'
}

/**
 * Docs about col
 */
export const Col = ({ children, className = '', size, xxl, xl, lg, md, sm, xs }: Props) => {
    return (
        <div className={classNames(
            (size ? ('col-' + size) : 'col'),
            xxl && 'col-xxl-' + xxl,
            xl && 'col-xl-' + xl,
            lg && 'col-lg-' + lg,
            md && 'col-md-' + md,
            sm && 'col-sm-' + sm,
            xs && 'col-xs-' + xs,
            className
        )}>{children}</div>
    )
}
