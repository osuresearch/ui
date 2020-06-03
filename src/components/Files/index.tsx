import React from 'react';

import './index.scss';

/**
 *
 * Displays file links and metadata. Optionally handles 
 * attachments for forms.
 * 
 * Todo: Add error for when attachments do not exist 
 * (see FileSelector)
 *
 */

export interface Props {
    // Payload
    payload: object;
    // Card header - shows main "Files" header (with DMS link, if applicable)
    header?: boolean;
    // Attached files - file IDs when used as part of a form
    attached?: Array<object>;
    // Disabled - input disabled status when used as part of a form (i.e. read only)
    disabled?: boolean;
    // Change Handler for forms
    onChange?(newValue: string): void;
}

const Files: React.FC<Props> = ({
    payload,
    header,
    attached,
    disabled,
    onChange,
}) => {
    const files = payload.data.attributes.directory;
    const dmsLink = payload.data.links?.dms;

    /* Return an error message if the fetch throws an error */
    if (files === false) {
        return <div>Sorry, the files for this submission cannot be retrieved at this time.</div>;
    }

    /* Return a loader until getFiles has returned */
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
                    <h2 className='h5'>Files</h2>
                    {// If the state includes a DMS link
                        dmsLink &&
                        <span>
                            <a
                                href={dmsLink}
                                title='Open in Document Management Server'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span className='fa fa-external-link mr-1' aria-hidden='true'></span>Open in DMS
                            </a>
                        </span>
                    }
                </div>
            }
            {Object.keys(files).map((directory) => (
                // Only display directory if it contains files
                files[directory].length > 0 &&
                <div className='card' key={directory}>
                    <div className='card-header text-dark'><span className='fa fa-folder-open-o mr-2' aria-hidden='true'></span>{directory}
                        <span className='float-right badge badge-pill badge-dark'>{files[directory].length}</span>
                    </div>
                    <table className='table table-hover'>
                        <caption className='sr-only'>{directory + ' Files'}</caption>
                        <thead>
                            <tr>
                                {
                                    Object.keys(files[directory][0])
                                        .filter((h) => !['id', 'link'].includes(h))
                                        .map((heading) =>
                                            <th scope='col' key={heading}>{heading}</th>
                                        )
                                }
                                {// If there are to be attachments, add as final column
                                    attached &&
                                    <th scope='col'>Include</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                files[directory].map((file) => (
                                    <tr key={file.link} >
                                        <th scope='row'>
                                            <a href={file.link} target='_blank' rel='noopener noreferrer' data-file-type={(file.filename.split('.').reverse()[0]).toLowerCase()}>
                                                {file.filename}
                                            </a>
                                        </th>
                                        <td>{file.section}</td>
                                        {// Display checkmarks for attachments
                                            attached &&
                                            <td className='text-center'>
                                                <input
                                                    type='checkbox'
                                                    className='m-0'
                                                    id={file.id}
                                                    onChange={onChange}
                                                    checked={attached.includes(file.id.toString())}
                                                    disabled={disabled}
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