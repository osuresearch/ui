import React, { useState, useEffect } from 'react';

interface File {
    id: string;
    filename: string;
    section?: string;
    uploaded?: string;
    size?: string;
    link: string;
}

interface Body {
    data: {
        attributes: {
            directory: {
                [key: string]: Array<File>
            }
        },
        links?: {
            dms?: string;
        }
    }
}

export interface Props {
    /** Response body */
    body: Body;

    /** 
     * Card header - shows main "Files" header (with DMS link, if applicable)
     */
    header?: boolean;

    /**
     * Selected Files
     */
    selectedFiles?: Array<File>;

    /** Form ID */
    formId?: string;

    /**
     * Selection handler
     */
    onSelect?(newArray: Array<object>): void;

    /* SelectedFiles form - read only */
    readOnly?: boolean;
}


/**
 *
 * This component displays files and directories from
 * a Document Management System (DMS) parent directory
 * (or other similar endpoint).
 * 
 * Optionally, it can be used as a file selector for forms.
 * 
 * To-do: Display selected files that were removed from DMS
 *
 */

const Files: React.FC<Props> = ({
    body,
    header,
    selectedFiles,
    formId,
    onSelect,
    readOnly
}) => {
    const files = body.data.attributes.directory;
    const dmsLink = body.data.links?.dms;

    // Form handling
    const [selected, setSelected] = useState<Array<File> | undefined>(selectedFiles);

    const isChecked = (fileid: string) => {
        if (selected && selected?.findIndex(file => file.id === fileid) !== -1) return true;
        return false;
    }

    const handleSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = JSON.parse(JSON.stringify(e.target.dataset));
        const selectedIndex = selected?.findIndex(attachment => attachment.id === file.id);

        if (selectedIndex === -1 /* not found */) {
            // Add it to selected
            setSelected((prevSelected: any  /** forgive me... */) => {
                return [...prevSelected, file]
            });
        } else {
            // Remove it from selected
            setSelected(selected?.filter((ele, i) => i !== selectedIndex));
        }
    }

    useEffect(() => {
        if (typeof (onSelect) !== 'undefined' && typeof (selected) !== 'undefined')
            onSelect(selected);
    }, [onSelect, selected]);

    useEffect(() => {
        // Account for possible delay in the creation of the selectedFiles array
        if (selected?.length === 0) setSelected(selectedFiles);
    }, [selectedFiles, selected]);

    /* Return a loader until files are available */
    // To-do - replace this functionality with skeleton loader
    if (!files) {
        return (
            <div className='app-loader'>
                <i className='fa fa-spinner fa-spin'></i>
                <p className='app-loader-help'>
                    Loading, please wait...
                </p>
            </div>
        );
    }

    /* Return the files in tables */
    return (
        <div className='files'>
            {// If header prop is true, then display main header
                header &&
                <div className='card-header main-header'>
                    <h2>Files</h2>
                    {// If DMS link exists
                        dmsLink &&
                        <span>
                            <a
                                href={dmsLink}
                                title='Open in Document Management System'
                                target='_blank'
                                rel='noopener noreferrer'
                            >Open in DMS</a>
                        </span>
                    }
                </div>
            }
            {Object.keys(files).map((directory) => (
                // Only display directory if it contains files
                files[directory].length > 0 &&
                <div className='card' key={directory}>
                    <div className='card-header text-dark'>
                        <span className='fa fa-folder-open-o mr-2' aria-hidden='true'></span>
                        <span>{directory}</span>
                        <span className='float-right badge badge-pill badge-dark'>{files[directory].length}<span className='sr-only'> files in this folder</span></span>
                    </div>
                    <table className={'table table-hover cols-' + (Object.keys(files[directory][0]).length).toString()}>
                        <caption className='sr-only'>{directory + ' Files'}</caption>
                        <thead>
                            <tr>
                                {Object.keys(files[directory][0])
                                    /** Use file object keys as table headings */
                                    // Filter out ID and Link keys
                                    .filter((h) => !['id', 'link'].includes(h))
                                    .map((heading) =>
                                        <th scope='col' key={heading}>{heading}</th>
                                    )
                                }
                                {// If there are selected files, add a final Include column heading
                                    selectedFiles &&
                                    <th scope='col'>Include</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                files[directory].map((file) => (
                                    <tr key={file.id}>
                                        {Object.keys(file)
                                            /** Map file properties to th/td */
                                            // Filter out ID and Link
                                            .filter((k) => !['id', 'link'].includes(k))
                                            .map((attr) => {
                                                switch (attr) {
                                                    case 'filename':
                                                        // Filenames are wrapped in links to download file
                                                        return (
                                                            <th scope='row' key={file.id + attr}>
                                                                <a href={file.link} target='_blank' rel='noopener noreferrer' data-filetype={(file.filename.split('.').reverse()[0]).toLowerCase()}
                                                                >{file.filename}</a>
                                                            </th>);
                                                    case 'uploaded':
                                                        // Convert uploaded string to local date string
                                                        return (
                                                            <td key={file.id + attr}>
                                                                {new Date(file[attr] as string).toLocaleDateString()}
                                                            </td>);
                                                    case 'size':
                                                    case 'section':
                                                        return (
                                                            <td key={file.id + attr}>
                                                                {file[attr]}
                                                            </td>
                                                        );
                                                    default:
                                                        return '';
                                                }
                                            })
                                        }
                                        {// Display checkmarks for selected files
                                            selectedFiles &&
                                            <td>
                                                <input
                                                    type='checkbox'
                                                    className='m-0'
                                                    form={formId}
                                                    data-id={file.id}
                                                    data-filename={file.filename}
                                                    data-section={file?.section}
                                                    data-uploaded={file?.uploaded}
                                                    data-size={file?.size}
                                                    data-link={file.link}
                                                    onChange={handleSelectionChange}
                                                    checked={isChecked(file.id)}
                                                    readOnly={readOnly}
                                                    disabled={readOnly}
                                                />
                                            </td>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )
            )}
        </div>
    );
};

export default Files;