
import React, { useContext, useState, useLayoutEffect } from 'react';
import { Context } from '..';

// @ts-ignore
import CKEditor from 'ckeditor4-react';

import Diff from '../Diff';

export interface RichProps {
    /** Initial content for the component as a raw HTML string. */
    defaultValue?: string;

    /** Name of the form control */
    name?: string;

    /** Display the simplified version of the editor */
    simple?: boolean;

    /**
     * Change callback containing updated document data.
     * 
     * This **must** be a memoized callback (e.g. wrapped with `useCallback`)
     */
    onChange?(newValue: string): void;

    /**
     * Callback on blur
     * 
     */
    onBlur?(): void;

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
    onBlur,
    name,
    defaultValue = '',
    simple = false,
    className = '',
    contentsCss = 'https://orapps.osu.edu/assets/css/ckeditor/contents.css'
}) => {
    const [label, setLabel] = useState<string>();
    const { bind } = useContext(Context);

    const value = bind.value || defaultValue;

    useLayoutEffect(() => {
        // @ts-ignore
        const labelText = document.querySelector(`label[for="${bind.id}"]`)?.innerText;

        if (labelText) {
            setLabel(labelText);
        } else if (bind.instructions) {
            setLabel(bind.instructions);
        } else {
            setLabel('Rich Text Editor')
        }
    }, [bind]);

    if (bind.diff) {
        // TODO - This really isn't going to work with HTML
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    // Wait to render the editor until a label is set
    if (!label) {
        return <></>
    }

    return (
        <div
            id={bind.id}
            className={`richtext ${className} ${bind.readOnly ? 'readonly' : ''}`}
        >
            <CKEditor
                data={value}
                name={name}
                config={{
                    toolbar: (simple ? SIMPLE_TOOLBAR_CONFIG : FULL_TOOLBAR_CONFIG),
                    // TODO: Prop to provide extra plugins (e.g. Signet signature captures)
                    extraPlugins: '',
                    // Disable the body > blockquote > p ... path in the editor footer
                    removePlugins: 'elementspath',
                    contentsCss,
                    title: label,
                    
                    format_tags: 'p;h1;h2;h3;pre',
                    // Custom DOM elements for header levels to prevent accessibility 
                    // issues while embedding in existing page headers (see issue#17)
                    format_h1: { element: 'div', attributes: { 'class': 'h1' } },
                    format_h2: { element: 'div', attributes: { 'class': 'h2' } },
                    format_h3: { element: 'div', attributes: { 'class': 'h3' } },
                    // Workaround for CKE4: classes don't remove themselves unless
                    // formats are explicit (see https://stackoverflow.com/a/65324448)
                    format_p: { element: 'p', attributes: { 'class' : ' '} },
                    format_pre: { element: 'pre', attributes: { 'class' : ' '} },
                }}
                readOnly={bind.readOnly}
                onChange={(e: any) => {
                    const newValue = e.editor.getData() as string;
                    bind.value = newValue;
                    if (onChange && !bind.readOnly) {
                        onChange(newValue);
                    }
                }}
                onBlur={onBlur}
            />
        </div>
    );
}

export default Rich;
