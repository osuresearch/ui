import React from 'react';

export type Props = {
    children: React.ReactNode
}

/**
 * Docs about row!
 */
export const Row = ({ children }: Props) => {
    return (
        <div className="row">
            {children}
        </div>
    )
}
