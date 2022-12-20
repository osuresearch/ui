
/**
 * Generic interface for a TypeScript enum
 */
export interface Enum {
    [id: number]: string | number
}

export type OnUploadProgressAction = (file: UploadProgress) => void

export type OnDownloadFileAction = () => void

export type OnCancelFileAction = () => void

export type OnDeleteFileAction = () => void

export type UploadFileAction = (file: File, onProgress: OnUploadProgressAction) => Promise<UploadedFile>;

export type DeleteFileAction = (file: UploadedFile) => Promise<DeleteResult>;

/**
 * A file that was previously uploaded and exists
 * in the cloud somewhere.
 */
export type UploadedFile = {
    /** Unique file identifier */
    id: string

    name: string

    /** File size in bytes, if known */
    size?: number

    summary?: string

    /** URL to download the file, if available */
    download?: string

    /** Whether or not this file can be deleted. If omitted, assume false. */
    canDelete?: boolean
}

/**
 * An error that occurred while trying to upload
 * a new file through Upload.Input
 */
export type UploadError = {
    /** File that failed to upload */
    file: File

    /** Error information (file too large, server error, etc) */
    error: string
}

/**
 * Progress information for a file currently being uploaded.
 */
export type UploadProgress = {
    /** Source file that is being uploaded */
    file: File

    /**
     * Percentage of upload progress, within `[0.0, 1.0]`.
     *
     * Note that some backend integrations may not support
     * discrete progress values, so this may be null for an
     * indeterminate state.
     */
    progress?: number

    cancel?: () => void
}

export type DeleteResult = {
    /** The file that was to be deleted */
    uploaded: UploadedFile

    /**
     * The error message if the deletion was not successful.
     * Should be undefined for successful deletions.
     */
    error?: string
}

/**
 * Props on the `Upload.Input` that get passed
 * off to integration hooks
 */
export type BindableUploadInputProps = {
    // /**
    //  * Previously uploaded files
    //  */
    // value: UploadedFile[]

    // /**
    //  * Files that have failed to upload
    //  */
    // errors: UploadError[]

    // /**
    //  * Files that are currently in the process of uploading
    //  */
    // uploading: UploadProgress[]

    // /**
    //  * Callback to invoke when the user selects one or more
    //  * files to upload.
    //  *
    //  * This is typically specified by one of the provided
    //  * integration hooks (useRESTFileUploader, useGraphQLFileUploader, etc)
    //  */
    // onSelect: (files: File[]) => void

    // /**
    //  * Callback to invoke when the user attempts to delete a
    //  * previously uploaded file. If omitted, files cannot be
    //  * deleted, regardless of the value of `UploadedFile.canDelete`.
    //  *
    //  * This is typically specified by one of the provided
    //  * integration hooks (useRESTFileUploader, useGraphQLFileUploader, etc)
    //  */
    // onDelete?: (file: UploadedFile) => void

    // /**
    //  * Callback to invoke when the user attempts to cancel
    //  * an upload in progress. If omitted, uploads in progress
    //  * cannot be cancelled by the user.
    //  *
    //  * Cancelled files may or may not have started uploading.
    //  */
    // onCancel?: (file: UploadProgress) => void

    // /**
    //  * Callback to invoke when the set of uploaded files have
    //  * been changed by either uploads completing or the user
    //  * has deleted one or more files.
    //  */
    // onChange?: React.Dispatch<React.SetStateAction<UploadedFile[]>>

    onUpload: UploadFileAction
    onDelete: DeleteFileAction
}

export type UploaderBind = (name: string) => BindableUploadInputProps

export type UploaderHookRetval = {
    register: () => BindableUploadInputProps
    uploadFile: UploadFileAction
    deleteFile: DeleteFileAction
}

/**
 * Return value for any of the `use{api}FileUpload` hooks.
 */
export type UploaderHookRetvalLEGACY = {
    /**
     * Bind an `Upload.Input` to this hook.
     *
     * Arguments should be spread into `Upload.Input`
     * to define required event props.
     *
     * @param name The Upload component's name attribute
     */
    uploader: UploaderBind

    /**
     * All files that have have successfully been uploaded.
     *
     * New files will be added through calls to `upload` or
     * by manually inserting more via `addUploadedFiles`.
     */
    files: UploadedFile[]

    /**
     * All files that have failed to upload.
     *
     * This list may be cleared via `reset()`.
     */
    errors: UploadError[]

    /**
     * All files that are currently uploading via `upload()`
     */
    uploading: UploadProgress[]

    /**
     * Add existing `UploadedFile` instances to the list
     * of tracked uploads.
     */
    addUploadedFiles: (files: UploadedFile[]) => void

    /**
     * Upload a file.
     *
     * The file will be added to the `uploading` set if
     * upload has begun, or added to `errors` if one or more
     * validation errors did not pass for the file.
     */
    upload: UploadFileAction

    /**
     * Clear `errors`.
     */
    reset: () => void

    /**
     * Cancel an upload in progress.
     */
    cancel?: (file: UploadProgress) => void

    /**
     * Delete a previously uploaded file.
     *
     * Raises a promise rejection if the file could not be deleted,
     * either due to access rights or another server side error.
     */
    delete?: DeleteFileAction
}

/**
 * Arbitrary string-keyed JSON object
 */
export type JsonObject = {
    [key: string]: unknown
}
