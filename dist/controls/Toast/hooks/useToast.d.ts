import React from 'react';
import { Toast } from 'primereact/toast';
interface IToast {
    toast: React.RefObject<Toast>;
}
/**
 * Context provider for the toast at the app-level
 */
export declare const ToastProvider: React.FC<IToast>;
/**
 * Provides the ref of the toast component in App.tsx
 *
 * See https://primefaces.org/primereact/showcase/#/toast for implementation details for the Toast component
 */
export declare function useToast(): React.RefObject<Toast> | null;
export {};
//# sourceMappingURL=useToast.d.ts.map