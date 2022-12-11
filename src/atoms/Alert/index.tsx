import classNames from 'classnames';
import React, { useState } from 'react';
import { Icon } from '../Icon';

export type Props = {
    theme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    dismissible?: boolean;
    banner?: boolean;
    /**
     * ARIA role of the Alert
     * 
     * The `status` role is used to convey 
     * advisory information to the user 
     * that is not important enough to 
     * justify the immediacy of an alert. 
     * The message will be communicated to 
     * assistive technology users but it 
     * will not interupt other messages. 
     * Most Alert instances will use this 
     * role.
     * 
     * The `alert` role is used to convey 
     * messages that may be immediately 
     * important to users. This message 
     * will immediately be communicated to 
     * assistive technology users upon 
     * component mount, thus it should be used 
     * very sparingly.
     * 
     * The `presentation` role is used 
     * when the component should take on 
     * the visual styling of an Alert 
     * without presenting the message 
     * directly to assistive technology 
     * users. It will still be in the DOM 
     * for those users to access, but it 
     * will behave like any other block 
     * element.
     * 
     */
    role?: 'alert' | 'status' | 'presentation';

    /**
     * Optional icon name
     */
    icon?: string

    children: React.ReactNode
}

export const Alert = ({
    theme = 'info',
    dismissible,
    banner,
    role = 'status',
    icon,
    children
}: Props) => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
        return null;
    }

    return (
        <div className={classNames(
            'alert',
            'alert-' + theme,
            dismissible && 'alert-dismissible fade show',
            banner && 'alert-banner'
        )} role={role}>
            {icon && 
                <div className="alert__icon">
                    <Icon circled name={icon} />
                </div>
            }
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
