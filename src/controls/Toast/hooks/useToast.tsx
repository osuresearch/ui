
import React, { useContext } from 'react';
import { Toast } from 'primereact/toast';

const ToastContext = React.createContext<React.RefObject<Toast> | null>(null);

interface IToast {
    toast: React.RefObject<Toast>;
}

/**
 * Context provider for the toast at the app-level
 */
export const ToastProvider: React.FC<IToast> = ({
    children,
    toast
}) => (
    <ToastContext.Provider value={toast}>
        <Toast ref={toast} />
        {children}
    </ToastContext.Provider>
);

/**
 * Provides the ref of the toast component in App.tsx
 * 
 * See https://primefaces.org/primereact/showcase/#/toast for implementation details for the Toast component
 */
export function useToast() {
    const toast = useContext(ToastContext);

    return toast;
}
