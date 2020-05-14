import React from 'react';
export interface Props {
    /** Initial content for the component. */
    defaultValue?: string;
    /** Should the contents of the editor only be rendered as read-only */
    readOnly?: boolean;
    /**
     * Change callback containing updated document data.
     *
     * This **must** be a memoized callback (e.g. wrapped with `useCallback`)
     */
    onChange?(newValue: string): void;
    /**
     * Additional class names to apply to the component
     */
    className?: string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
//# sourceMappingURL=index.d.ts.map