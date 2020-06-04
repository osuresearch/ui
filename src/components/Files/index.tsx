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

export interface Body {
    data: {
        attributes: {
            directory: {
                [key: string]: [{
                    id: string;
                    filename: string;
                    size?: string;
                    section?: string;
                    uploaded?: string;
                    link: string;
                }]
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
     * Attachments - file IDs when used as part of a form
     */
    attachments?: Array<string>;

    /** Disabled - Attachment inputs disabled */
    disabled?: boolean;

    /** Change Handler */
    onChange?(newValue: string): void;
}

const Files: React.FC<Props> = ({
    body,
    header,
    attachments,
    disabled,
    onChange,
}) => {
    const files = body.data.attributes.directory;
    const dmsLink = body.data.links?.dms;

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
                    {// If DMS link exists
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
                                {// If there are attachments, add a final Include column
                                    attachments &&
                                    <th scope='col'>Include</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                files[directory].map((file) => (
                                    <tr key={file.id}>
                                        {Object.keys(file)
                                            .filter((k) => !['id', 'link'].includes(k))
                                            .map((attr) => {
                                                switch (attr) {
                                                    case 'filename':
                                                        return (<th scope='row' key={file.id + attr}>
                                                            <a href={file.link} target='_blank' rel='noopener noreferrer' data-filetype={(file.filename.split('.').reverse()[0]).toLowerCase()}
                                                            >{file.filename}</a>
                                                        </th>);
                                                    case 'uploaded':
                                                        return (<td key={file.id + attr}>
                                                            {new Date(file[attr] as string).toLocaleString()}
                                                        </td>)
                                                    default:
                                                        return (<td key={file.id + attr}>{file[attr]}</td>);
                                                }
                                            })
                                        }
                                        {// Display checkmarks for attachments
                                            attachments &&
                                            <td className='text-center'>
                                                <input
                                                    type='checkbox'
                                                    className='m-0'
                                                    id={file.id}
                                                    onChange={onChange}
                                                    checked={attachments.includes(file.id)}
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