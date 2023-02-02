import React, { useState, useContext, useRef } from "react";
import bytes from 'bytes';

import { FileUpload as PRUpload } from "primereact/fileupload";

import { Context } from "..";
import { ExternalLink, Icon } from "../../..";
import Button from "../../../controls/Button";

import { getIcon } from "./functions";

import {
    OnCancelFileAction,
    OnDeleteFileAction,
    UploadProgress,
    UploadError,
    UploadedFile,
    UploadFileAction,
    DeleteFileAction,
    DeleteResult,
} from "../../../types";


/**
 * Default maximum file size for uploads, in bytes
 */
const DEFAULT_MAX_SIZE = 20 * 1024 * 1024;

export type InputProps = {
    /** Will inherit from parent Upload component */
    id?: string;

    /** Will inherit from parent Upload component */
    name?: string;

    /** Can the user select multiple files at once for upload. */
    multiple?: boolean;

    /**
     * Maximum file size allowed in bytes.
     *
     * If not specified, the maximum size defaults to 20 MB.
     */
    maxFileSize?: number;

    /**
     * Pattern to restrict mime types.
     *
     * Example: `['image/*', 'application/pdf']`
     *
     * If not specified, any file type will be allowed.
     */
    allowedTypes?: string[];

    /** Disables the upload and modify functionality. */
    disabled?: boolean;

    /** Style class of the element. */
    className?: string;

    /**
     * Previously uploaded files
     */
    value: UploadedFile[];

    onUpload: UploadFileAction;

    onDelete: DeleteFileAction;

    /**
     * Callback to invoke when the set of uploaded files have
     * been changed by either uploads completing or the user
     * has deleted one or more files.
     */
    onChange?: React.Dispatch<React.SetStateAction<UploadedFile[]>>;

    /**
     * Callback to invoke when the component loses focus.
     *
     * Required by RHF Controller
     */
    onBlur?: () => void;

    /**
     * Render prop for the file dropzone
     */
    dropzoneTemplate?: () => React.ReactNode;

    /**
     * Render prop for new files that are currently uploading.
     */
    fileTemplate?: (
        file: UploadProgress,
        onCancel?: OnCancelFileAction
    ) => React.ReactNode;

    /**
     * Render prop for files that have been rejected from uploading
     */
    errorTemplate?: (
        error: UploadError,
        onCancel?: OnCancelFileAction
    ) => React.ReactNode;

    /**
     * Render prop for files that have already been uploaded.
     */
    uploadedFileTemplate?: (
        file: UploadedFile,
        onDelete?: OnDeleteFileAction
    ) => React.ReactNode;
};

function DefaultUploadProgressTemplate(
    file: UploadProgress,
    onCancel?: OnCancelFileAction
) {
    return (
        <div className="form-upload__item form-upload__item--uploading">
            <div className="form-upload__item-line-left">
                {getIcon(file.file.name.split("."))}

                <div className="form-upload__file-title">
                    <div className="form-upload__file-name">{file.file.name}</div>
                    <div className="form-upload__file-size">
                        {bytes(file.file.size, { unitSeparator: ' ' })}
                    </div>
                </div>
            </div>

            <Button
                theme="link"
                className="form-upload__cancel"
                onClick={onCancel}
            >
                <Icon name="times">Cancel</Icon>
            </Button>
        </div>
    );
}

function DefaultUploadedFileTemplate(
    file: UploadedFile,
    onDelete?: OnDeleteFileAction
) {
    return (
        <div className="form-upload__item form-upload__item--uploaded">
            <div className="form-upload__item-line-left">
                {getIcon(file.name.split("."))}

                <div className="form-upload__file-title--two-lines">
                    <div className="form-upload__file-title__top-line">
                        <div className="form-upload__file-name">
                            {file.download ? (
                                <ExternalLink href={file.download}>
                                    {file.name}
                                </ExternalLink>
                            ) : (
                                file.name
                            )}
                        </div>

                        {file.size !== undefined &&
                            <div className="form-upload__file-size">
                                {bytes(file.size, { unitSeparator: ' ' })}
                            </div>
                        }
                    </div>
                    <div className="form-upload__file-notes">{file.summary}</div>
                </div>
            </div>

            {onDelete && (
                <Button theme="link" className="form-upload__delete" onClick={() => {
                    if (window.confirm('Are you sure you want to delete this file?')) {
                        onDelete();
                    }
                }}>
                    <Icon name="trash-o">Delete this file</Icon>
                </Button>
            )}
        </div>
    );
}

function DefaultErrorTemplate(error: UploadError, onCancel: OnCancelFileAction) {
    return (
        <div className="form-upload__item form-upload__item--error">
            <div className="form-upload__item-line-left">
                {getIcon(error.file.name.split("."))}

                <div className="form-upload__file-title--two-lines">
                    <div className="form-upload__file-title__top-line">
                        <div className="form-upload__file-name">{error.file.name}</div>
                        <div className="form-upload__file-size">
                            {bytes(error.file.size, { unitSeparator: ' ' })}
                        </div>
                    </div>
                    <div className="form-upload__file-error">{error.error}</div>
                </div>
            </div>

            <Button
                theme="link"
                className="form-upload__cancel"
                onClick={onCancel}
            >
                <Icon name="times">Cancel</Icon>
            </Button>
        </div>
    );
}


function DefaultDropzoneTemplate(props: InputProps, onDrop: boolean, setOnDrop: React.Dispatch<React.SetStateAction<boolean>>) {
    return (
        <div className="form-upload__dropzone"
            onDrop={() => setOnDrop(true)}>
            <Icon name="upload" />

            <span className="form-upload__instruction">or drag and drop {onDrop}</span>

            <span className="form-upload__size-limit">Maximum file size {props.maxFileSize ? bytes(props.maxFileSize, { unitSeparator: ' ' }) : '20 MB'}.</span>
        </div>
    );
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);
    const fileUploadRef = useRef<PRUpload>(null);

    // Previously uploaded files comes from a prop so that we can
    // convert this into a controlled component with value + onChange.
    const files = bind.value || props.value || [];

    // Uploads in progress and error state are tracked internally.
    // These are updated via the async callbacks passed down from
    // the onUpload/onDelete props
    const [uploading, setUploading] = useState<UploadProgress[]>([]);
    const [errors, setErrors] = useState<UploadError[]>([]);

    const [progress, setProgress] = useState<number>(0);

    const [onDrop, setOnDrop] = useState<boolean>(false);

    const chooseOptions = { label: "Click to upload", icon: "none" };

    // PrimeReact FileUpload template for each file in progress
    const itemTemplate = (
        file: object,
        options: PRUpload.ItemTemplateType
    ) => {
        const match = uploading?.find((f) => f.file === file);
        if (!match) {
            return; // TODO: Better handling for this edge case
        }

        if (props.fileTemplate) {
            return props.fileTemplate(match, () => match.cancel);
        } else {
            return DefaultUploadProgressTemplate(match, () => match.cancel);
        }
    };

    const existingItemTemplate = (file: UploadedFile) => {
        const onDelete = file.canDelete
            ? () => {
                // Optimistic removal
                if (props.onChange) {
                    props.onChange(files.filter((f) => f.id !== file.id));
                }

                if (props.onBlur) {
                    props.onBlur();
                }

                props
                    .onDelete(file)
                    .then((uploaded) => {
                        // noop, we optimistically removed the record already
                    })
                    .catch((error: DeleteResult) => {
                        // TODO: Better error handling here.
                        // Maybe add to the errors stack?
                        window.alert(error.error);
                    });
            }
            : undefined;

        if (props.uploadedFileTemplate) {
            return props.uploadedFileTemplate(file, onDelete);
        } else {
            return DefaultUploadedFileTemplate(file, onDelete);
        }
    };

    const uploadingItemTemplate = (file: UploadProgress) => {
        if (props.fileTemplate) {
            return props.fileTemplate(file, () => file.cancel);
        } else {
            return DefaultUploadProgressTemplate(file, () => file.cancel);
        }
    };

    const errorTemplate = (error: UploadError) => {
        const cancel = () => {
            setErrors(errors.filter(e => e !== error));
        }

        if (props.errorTemplate) {
            return props.errorTemplate(error, cancel);
        } else {
            return DefaultErrorTemplate(error, cancel);
        }
    };

    const dropzoneTemplate = () => {
        if (props.dropzoneTemplate) {
            return props.dropzoneTemplate();
        } else {
            return DefaultDropzoneTemplate(props, onDrop, setOnDrop);
        }
    };

    const classNames = `input-group form-upload
        ${props.className ? props.className : ""}
        ${bind.error && "is-invalid"}
        ${bind.success && "is-valid"}
    `;

    // TODO: Support RHF onBlur() callback

    const onProgress = (progress: UploadProgress) => {
        //console.log(progress);
        setUploading((prev) => {
            let total = 0;
            for (let file of prev) {
                if (file?.progress) {
                    total += file?.progress;
                }
            }
            setProgress(total / prev.length);

            let found = false;
            const updated = prev.map((f) => {
                // Swap in new instance in-place
                if (f.file == progress.file) {
                    found = true;
                    return progress;
                }
                return f;
            });

            if (!found) {
                updated.push(progress);
            }

            return updated;
        });
    };

    // Push new files to the external upload handler (onSelect prop)
    // asynchronously and handle all responses.
    const uploadHandler = (e: PRUpload.FilesParam) => {
        e.files.forEach((src) => {
            // Validate MIME type restrictions
            // TODO: MIME type wildcards aren't supported in .includes
            if (props.allowedTypes && !props.allowedTypes.includes(src.type)) {
                const error = {
                    file: src,
                    error: "Cannot upload this type of file",
                } as UploadError;

                setErrors((prev) => [...prev, error]);
                return;
            }

            // Validate file size restriction
            const maxSize = props.maxFileSize ?? DEFAULT_MAX_SIZE;
            if (src.size > maxSize) {
                const error = {
                    file: src,
                    error: `File size cannot exceed ${bytes(maxSize, { unitSeparator: ' ' })}`,
                } as UploadError;

                setErrors((prev) => [...prev, error]);
                return;
            }

            props
                .onUpload(src, onProgress)
                .then((uploaded) => {
                    if (props.onChange) {
                        // v1
                        props.onChange((prev) =>
                            prev ? [...prev, uploaded] : [uploaded]
                        );

                        // v2
                        // props.onChange([...files, uploaded]);

                        // TODO: Race condition here. If multiple files are being uploaded
                        // at once, v2 does not preserve the aggregation
                        // Can be resolved by passing in a callable (v1)
                        // but then RHF integration doesn't work - as onChange expects
                        // the value and not a callable.
                    }

                    if (props.onBlur) {
                        props.onBlur();
                    }
                })
                .catch((error) => {
                    setErrors((prev) => [...prev, error]);
                })
                .finally(() => {
                    setUploading((prev) => prev.filter((f) => f.file !== src));
                });
        });

        fileUploadRef.current?.clear();
    };

    return (
        <div className="form-upload__wrapper">
            {!props.disabled && <PRUpload
                ref={fileUploadRef}
                id={bind.id || props.id}
                name={bind.name || props.name}
                className={classNames}
                disabled={props.disabled}
                multiple={props.multiple}
                auto

                // TODO: This doesn't provide any validation error messages.
                // I don't see a way to hook into this nicely?
                // onValidationFail={(file) => alert('validation fail: ' + file.name)}

                chooseOptions={chooseOptions}
                emptyTemplate={dropzoneTemplate}
                itemTemplate={itemTemplate}
                customUpload
                uploadHandler={uploadHandler}
            />
            }

            <div className={"form-upload__right-col" + (props.disabled ? ' no-space' : '')}>
                {files.length > 0 && (
                    <div className="form-upload__block--uploaded">
                        <span className="form-upload__block-title">UPLOADED FILES</span>
                        {files?.map((f) => (
                            <div className="file-upload__item--uploaded" key={f.id}>
                                {existingItemTemplate(f)}
                            </div>
                        ))}
                    </div>
                )}

                {uploading.length > 0 && (
                    <div className="form-upload__block--uploading">
                        <div className="form-upload__uploading-block-title-wrap">
                            <span className="form-upload__block-title">UPLOADING FILES</span>
                            <span className="form-upload__uploading-percentage">
                                {Math.round(progress * 100)}%
                            </span>
                        </div>
                        <progress id="file" value={progress * 100} max="100">
                            {progress * 100}%
                        </progress>
                        {/* <ProgressBar now={progress * 100} label={`${progress * 100}%`} /> */}
                        {uploading?.map((f) => (
                            <div className="file-upload__item--uploading" key={f.file?.name}>
                                {uploadingItemTemplate(f)}
                            </div>
                        ))}
                    </div>
                )}

                {errors.length > 0 && (
                    <div className="form-upload__block--error">
                        <span className="form-upload__block-title">UPLOAD ERRORS</span>
                        {errors.map((e) => (
                            <div className="file-upload__item--error" key={e.file.name}>
                                {errorTemplate(e)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// TODO: Expose some forwardRef methods. E.g.
//  const ref = useRef<Upload.Input>(...);
//  ref.current?.upload(files);
//  ref.current?.delete(files);
