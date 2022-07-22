import React, { useState } from 'react';

type Props = {
    theme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    dismissible?: boolean;
    banner?: boolean;
}

const Alert: React.FC<Props> = ({
    theme,
    dismissible,
    banner,
    children
}) => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
        return null;
    }

    return (
        <div className={`alert alert-${theme} ${dismissible && 'alert-dismissible fade show'} ${banner && 'alert-banner'}`} role="alert">
            {children}

            {dismissible &&
                <button
                    type="button"
                    className="close"
                    onClick={() => setVisible(false)}
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            }
        </div>
    );
}

export default Alert;
