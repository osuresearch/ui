import React from 'react';
export interface Props {
    /** ID attribute for the underlying editor */
    id?: string;
    /** Initial content for the component as a raw HTML string. */
    defaultValue?: string;
    /** Should the contents of the editor only be rendered as read-only */
    readOnly?: boolean;
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
}
/**
 * Simple preconfigured Richtext editor
 *
 * @deprecated Use `<Text.Rich>` from `@oris/ui` Form Components. Will be removed in a future version of `@oris/ui`
 *
 */
declare function Richtext({ id, onChange, defaultValue, readOnly, simple, className, contentsCss }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Richtext>;
export default _default;
//# sourceMappingURL=index.d.ts.map