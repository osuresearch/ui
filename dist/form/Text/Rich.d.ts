import React from 'react';
export interface RichProps {
    /** Initial content for the component as a raw HTML string. */
    defaultValue?: string;
    /** Display the simplified version of the editor */
    simple?: boolean;
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
    /** External CSS file to apply style to the editor content. It should reflect the
     *  CSS used in the target pages where the content is to be displayed.
     *
     * For more information, see [CKEditor 4 contentsCss](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html#cfg-contentsCss)
     */
    contentsCss?: string;
    /** name attribute */
    name?: string;
    /** required attribute */
    required?: boolean;
}
declare const _default: React.NamedExoticComponent<RichProps>;
export default _default;
//# sourceMappingURL=Rich.d.ts.map