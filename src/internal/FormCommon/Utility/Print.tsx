import React from 'react';

import '../style.scss';

/**
 * Render a print view of a Dropdown
 */
export const Print: React.FC = ({ children }) => {
    return (
        <div className="text-print">
            {children}
        </div>
    )
}