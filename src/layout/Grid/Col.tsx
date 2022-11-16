import React from 'react';

export type Props = {
    children: React.ReactNode

    /** Extra extra large span */
    xxl?: number

    /** Extra large span */
    xl?: number

    /** Large span */
    lg?: number 

    /** Medium span */
    md?: number 

    /** Small span */
    sm?: number 

    /** Extra small span */
    xs?: number
}

/**
 * Docs about col
 */
export const Col = ({ children, xxl, xl, lg, md, sm, xs }: Props) => {
    return (
        <div className={
            `col 
            ${xxl && 'col-xxl-' + xxl}
            ${xl && 'col-xl-' + xl}
            ${lg && 'col-lg-' + lg}
            ${md && 'col-md-' + md}
            ${sm && 'col-sm-' + sm}
            ${xs && 'col-xs-' + xs}
        `}>
            {children}
        </div>
    )
}
