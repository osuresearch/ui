
import React from 'react';

export type Props = {
    /**
     * It's kids!
     */
    children: React.ReactNode

    /**
     * Something about this
     */
    theme?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
}

/**
 * Docs here about the badge
 */
export const Badge = ({
    children, 
    theme = 'secondary' 
}: Props) => <span className={`badge text-bg-${theme}`}>
    {children}
</span>
