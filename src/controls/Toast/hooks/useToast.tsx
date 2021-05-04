
import React, { useState, useEffect } from 'react';
import { Toast } from 'primereact/toast';

const toast = React.createRef<Toast>();
const ToastContext = React.createContext<React.RefObject<Toast>>(toast);

/**
 * Context provider for the toast at the app-level
 */
export const ToastProvider: React.FC = ({
    children
}) => {
    return (
        <ToastContext.Provider value={toast}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
};

/**
 * Provides the current ref of the toast component
 */
export function useToast() {
    const [currentToast, setCurrentToast] = useState<Toast | null>();

    useEffect(() => {
        setCurrentToast(toast.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toast]);

    return currentToast;
}
