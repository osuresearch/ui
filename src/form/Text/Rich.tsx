
import React, { useLayoutEffect, useState, useRef, memo, useContext } from 'react';
import { Context } from '.';

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
}

/** Full confiugration (that we're willing to support) */
const FULL_TOOLBAR_CONFIG = [
    { name: 'styles', items: ['Format'] },
    { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
    { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
    { name: 'links', items: ['Link', 'Unlink'] },
    { name: 'insert', items: ['Table', 'HorizontalRule'] }
];

/** Reduced configuration that's just very basic formatting, lists, and links */
const SIMPLE_TOOLBAR_CONFIG = [
    { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
    { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
    { name: 'links', items: ['Link', 'Unlink'] }
];

/**
 * Simple preconfigured Richtext editor
 */
const Rich: React.FC<RichProps> = ({
    onChange,
    defaultValue = '',
    simple = false,
    className = '',
    contentsCss = 'https://orapps.osu.edu/assets/css/ckeditor/contents.css'
}) => {
    const { bind } = useContext(Context);

    const [initialData,] = useState(defaultValue);
    const [error, setError] = useState<string>();
    const editorRef = useRef<HTMLTextAreaElement>(null);

    useLayoutEffect(() => {
        // @ts-ignore 
        const cke = window.CKEDITOR;
        let editor: any = undefined; // No type info exists for CKE

        if (!cke) {
            // TODO: Error message improvements
            setError('window.CKEDITOR is undefined. Are you missing an external script?');
            return;
        }

        let toolbar = simple ? SIMPLE_TOOLBAR_CONFIG : FULL_TOOLBAR_CONFIG;

        const opts = {
            toolbar,

            // TODO: Prop to provide extra plugins (e.g. Signet signature captures)
            extraPlugins: '',

            // Disable the body > blockquote > p ... path in the editor footer
            removePlugins: 'elementspath',

            contentsCss
        };

        editor = cke.replace(editorRef.current, opts);
        editor.setData(initialData);
        editor.on('change', () => {
            if (onChange) {
                onChange(editor.getData() as string);
            }
        });

        return () => {
            if (editor) {
                editor.destroy();
                editor = undefined;
            }
        };
    }, [initialData, simple, contentsCss, onChange]);

    if (error) {
        return (
            <div className="richtext is-error">
                {error}
            </div>
        );
    }

    // TODO: Toggling readOnly isn't super efficient here, since 
    // it'll recreate the editor from scratch. But I don't envision
    // many use cases where we'll be doing that.

    return (
        <div className={`richtext ${className} ${bind.readOnly ? 'is-readonly' : ''}`}>
            <textarea id={bind.id} className="richtext-editor" ref={editorRef} disabled={bind.readOnly}></textarea>
        </div>
    );
}

export default memo(Rich);
