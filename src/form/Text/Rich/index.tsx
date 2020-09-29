
import React, { useContext } from 'react';
import { Context } from '..';

// @ts-ignore
import CKEditor from 'ckeditor4-react';

import Diff from '../Diff';

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

    /** Label text - the text of the `<Text.Label>` must be passed in for proper accessibility */
    labelText: string;
}

/** Full configuration (that we're willing to support) */
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
 * A rich text editor (RTE) based on CKEditor
 * 
 */
const Rich: React.FC<RichProps> = ({
    onChange,
    defaultValue = '',
    simple = false,
    className = '',
    contentsCss = 'https://orapps.osu.edu/assets/css/ckeditor/contents.css',
    labelText
}) => {
    const { bind } = useContext(Context);

    const value = bind.value || defaultValue;

    if (bind.diff) {
        // TODO - This really isn't going to work with HTML
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    return (
        <div className={`richtext ${className} ${bind.readOnly ? 'readonly' : ''}`}>
            <CKEditor
                data={value}
                config={{
                    toolbar: (simple ? SIMPLE_TOOLBAR_CONFIG : FULL_TOOLBAR_CONFIG),
                    // TODO: Prop to provide extra plugins (e.g. Signet signature captures)
                    extraPlugins: '',
                    // Disable the body > blockquote > p ... path in the editor footer
                    removePlugins: 'elementspath',
                    contentsCss,
                    title: labelText
                }}
                readOnly={bind.readOnly}
                onChange={(e: any) => {
                    const newValue = e.editor.getData() as string;
                    bind.value = newValue;
                    if (onChange) {
                        onChange(newValue);
                    }
                }}
            />
        </div>
    );
}

export default Rich;
