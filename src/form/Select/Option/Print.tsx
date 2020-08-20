import React from 'react';

/**
 * Render a print view of a Dropdown
 */
const Print: React.FC = ({ children }) => {
    return (
        <div className="text-print">
            {children}
        </div>
    )
}

export default Print;