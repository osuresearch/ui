
import React, { useLayoutEffect, useState, useRef, memo } from 'react';

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

// CKEditor 5 Toolbar configurations.
// We can't use the default because it includes plugins that we don't support (e.g. image uploads)
// The full list of available toolbar items comes from running `editor.ui.componentFactory.names()`
const DEFAULT_TOOLBAR_ITEMS = [
    "|", "heading", 
    "|", "fontfamily", "fontsize", "fontColor", "fontBackgroundColor",
    "|", "bold", "italic", "underline", "strikethrough",
    "|", "alignment", 
    "|", "numberedList", "bulletedList", 
    "|", "indent", "outdent", 
    "|", "link", "blockquote", /*"imageUpload",*/ "insertTable", "mediaEmbed", 
    /* "|", "undo", "redo" */
];

/**
 * Simple preconfigured Richtext editor
 */
const Richtext: React.FC<Props> = ({
    defaultValue = '',
    readOnly = false,
    onChange,
    className = ''
}) => {
    const [initialData, ] = useState(defaultValue);
    const [error, setError] = useState<string>();
    const editorRef = useRef<HTMLDivElement>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // @ts-ignore 
        const cke = window.DecoupledEditor;
        let editor: any = undefined; // No type info exists for CKE

        if (!cke) {
            // TODO: Error message improvements
            setError('window.DecoupledEditor is undefined. Are you missing a dependency?');
            return;
        }

        // https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
        const opts = {
            initialData,
            toolbar: {
                items: DEFAULT_TOOLBAR_ITEMS
            },
            // TODO: Disable the "Insert Image" plugin entirely, we're not supporting it.
            // All of the below didn't work so far. Only thing I found to work 
            // is to completely replace the full toolbar.
            // removePlugins: [ 'ckfinder', 'imageUpload', 'imageInsert' ],
            // imageEditing: {
            //     isEnabled: false
            // }
        };

        cke.create(editorRef.current, opts)
            .then((instance: any) => {
                editor = instance;
                editor.isReadOnly = readOnly;

                // Bind CKE's change event to our own onChange
                editor.model.document.on('change:data', () => {
                    if (onChange) {
                        onChange(editor.getData() as string);
                    }
                });

                // Setup toolbar DOM
                if (toolbarRef.current) {
                    toolbarRef.current.innerHTML = '';

                    if (!readOnly) {
                        toolbarRef.current.appendChild(
                            editor.ui.view.toolbar.element
                        );
                    }
                }
            })
            .catch((err: any) => {
                console.error('CKEditor Load Error', err);
                setError('Failed to load CKEditor. Check Console for additional information');
            });

        return () => {
            if (editor) {
                editor.destroy()
                    .catch((err: any) => {
                        console.error('CKEditor Unload Error', err);
                    });
            }
        };
    }, [initialData, readOnly, onChange]);

    // TODO: Toggling readOnly isn't super efficient here, since 
    // it'll recreate the editor from scratch. But I don't envision
    // many use cases where we'll be doing that.

    if (error) {
        return (
            <div className="richtext is-error">
                {error}
            </div>
        );
    }

    return (
        <div className={`richtext ${className}`}>
            <div className="richtext-toolbar" ref={toolbarRef}></div>
            <div className="richtext-editor-container">
                <div className="richtext-editor" ref={editorRef}></div>    
            </div>
        </div>
    );
}

export default memo(Richtext);
