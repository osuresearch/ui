import React, { useState, useEffect } from 'react';

// @ts-ignore
import bytes from 'bytes';

// @ts-ignore
import startCase from 'lodash/startCase';

export interface Record {
    id: string;
    name: string;
    modifiedDate: string;
    size: number;
    section: string | null;
    link: string;
    [key: string]: string | number | null;
}

interface Directory {
    name: string;
    files: Array<Record>;
    [key: string]: string | Array<Record>;
}

export interface Directories {
    [key: string]: Directory;
}

export interface Props {
    /** Directories */
    directories: Directories;

    /** 
     * DMS Management Link - direct link to the 
     * parent folder in the DMS
     */
    dmsLink?: string;

    /** 
     * Card header - shows main "Files" header (with DMS link, if applicable)
     */
    showHeader?: boolean;

    /**
     * Selected Files
     */
    selectedFiles?: Array<Record>;

    /**
     * Selection handler
     */
    onSelect?(selectedFiles: Array<Record>): void;

    /* SelectedFiles form - read only */
    readOnly?: boolean;
}

function formatAttribute(file: Record, attribute: string) {
    switch (attribute) {
        case 'name':
            // Filenames are wrapped in links to download file
            return (
                <th scope='row' key={file.id + attribute}>
                    <a href={file.link} target='_blank' rel='noopener noreferrer' data-filetype={(file.name.split('.').reverse()[0]).toLowerCase()}
                    >{file.name}</a>
                </th>);
        case 'modifiedDate':
            // Convert modifiedDate string to local date string
            return (
                <td key={file.id + attribute}>
                    {new Date(file[attribute] as string).toLocaleDateString()}
                </td>);
        case 'size':
            return (
                <td key={file.id + attribute}>
                    {bytes(file[attribute], { unitSeparator: ' ' })}
                </td>
            )
        case 'section':
            return (
                <td key={file.id + attribute}>
                    {file[attribute]}
                </td>
            );
        default:
            return '';
    }
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
    directories,
    dmsLink,
    showHeader,
    selectedFiles,
    onSelect,
    readOnly
}) => {
    // Form handling
    const [selected, setSelected] = useState<Array<Record> | undefined>(selectedFiles);

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

    /* Return a loader until directories/files are available */
    // To-do - replace this functionality with skeleton loader
    if (!directories) {
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

            {/** Header */}
            {showHeader &&
                <div className='card-header main-header'>
                    <h2>Files</h2>
                    {dmsLink && // If DMS link exists
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

            {/** Body */}
            {
                Object.keys(directories).map((directory) => (
                    directories[directory].files.length > 0 &&

                    <div className='card' key={directories[directory].name}>
                        {/** Directory Heading */}
                        <div className='card-header text-dark'>
                            <span className='fa fa-folder-open-o mr-2' aria-hidden='true'></span>

                            <span>{directories[directory].name}</span>

                            <span className='float-right badge badge-pill badge-dark'>
                                {directories[directory].files.length}

                                <span className='sr-only'> files in this folder</span>
                            </span>
                        </div>

                        {/** Table of Files in Directory */}
                        <table className=
                            {
                                'table table-hover cols-' +
                                /* number of columns */
                                (directories[directory].files.length.toString())
                            }
                        >
                            <caption className='sr-only'>
                                {`${directories[directory].name} Files`}
                            </caption>

                            <thead>
                                <tr>
                                    {/** Use file object keys as the table's headings */}
                                    {Object.keys(directories[directory].files[0])

                                        // Filter out ID & link keys
                                        .filter((h) => !['id', 'link'].includes(h))

                                        // Map the keys to THs and split instances of camelCase to startCase
                                        .map(heading => (
                                            <th
                                                scope='col'
                                                key={`${directories[directory].name}-${heading}`}
                                            >
                                                {startCase(heading)}
                                            </th>
                                        ))}

                                    {/** Add heading for when this component is used in a form */}
                                    {selectedFiles &&
                                        <th scope='col'>Include</th>
                                    }
                                </tr>
                            </thead>

                            <tbody>
                                {/** Map each file to a row */}
                                {directories[directory].files.map(file => (
                                    <tr key={file.id}>
                                        {/** Map file attributes to columns */}

                                        {Object.keys(file)

                                            // Filter out id and link
                                            .filter(k => !['id', 'link'].includes(k))

                                            // Map/format the rest
                                            .map(attr => formatAttribute(file, attr))
                                        }

                                        {/** Display checkmarks when this component is used as a form element */}
                                        {selectedFiles &&
                                            <td className='custom-control custom-checkbox'>
                                                <input
                                                    type='checkbox'
                                                    className='m-0 custom-control-input'
                                                    id={`select-file-${file.id}`}
                                                    data-id={file.id}
                                                    data-name={file.name}
                                                    data-section={file?.section}
                                                    data-modified-date={file?.modifiedDate}
                                                    data-size={file?.size}
                                                    data-link={file.link}
                                                    onChange={handleSelectionChange}
                                                    checked={isChecked(file.id)}
                                                    readOnly={readOnly}
                                                    disabled={readOnly}
                                                />
                                                <label
                                                    className='custom-control-label'
                                                    htmlFor={`select-file-${file.id}`}
                                                >
                                                    <span className='sr-only'>
                                                        {`Include this file`}
                                                    </span>
                                                </label>
                                            </td>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            }
        </div>
    );
};

export default Files;