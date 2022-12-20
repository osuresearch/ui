// Props that can be spread into the Upload.Input.
// Note that these can NOT conflict with React Hook Form register()
// fields. I want to be able to bind both at once (if possible...)

import { DeleteFileAction, UploadedFile, UploaderHookRetval, UploadError, UploadFileAction, UploadProgress } from '../types';

/**
 * Bind an Upload component to a REST backend.
 *
 * Backend requirements tl;dr:
 *  - POST: multipart upload, generate ID
 *  - GET: download by ID
 *  - DELETE: delete by ID.
 *
 * @param endpoint RESTful endpoint to handle file operations
 * @returns
 */
export default function useRESTFileUploader(endpoint: string): UploaderHookRetval {
    const uploadFn: UploadFileAction = (file, onProgress) => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        xhr.open('POST', endpoint, false);

        const progress: UploadProgress = {
            file,
            progress: 0,
            cancel: () => {
                // Bind to the XHR used for uploading and
                // cancel the request on call.
                xhr.abort();

                // Always reject the promise on cancellation
                reject({
                    file,
                    error: 'Cancelled'
                } as UploadError);
            }
        };

        xhr.upload.addEventListener('progress', (e) => {
            //console.log(e);
            if (e.lengthComputable) {
                progress.progress = Math.round((e.loaded * 100) / e.total);
                if (onProgress) {
                    onProgress(progress);
                }
            }
        });

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                progress.progress = 1.0;
                if (onProgress) {
                    onProgress(progress);
                }

                if (xhr.status >= 200 && xhr.status < 300) {
                    // We expect a JSON response in the form:
                    //  { data: UploadedFile[] }
                    try {
                        const entry = JSON.parse(xhr.responseText).data[0];
                        const result: UploadedFile = {
                            id: entry.id,
                            ...entry.attributes
                        };

                        resolve(result);
                    }
                    catch {
                        reject({
                            file,
                            error: 'Unexpected response from server'
                        } as UploadError);
                    }
                }
                else {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        reject({
                            file,
                            error: data.errors[0].title
                        } as UploadError);
                    }
                    catch {
                        reject({
                            file,
                            error: 'Unexpected response from server'
                        } as UploadError);
                    }
                }
            }
        }

        xhr.upload.onerror = () => {
            console.log('An error occurred');
        }

        // xhr.withCredentials = true;
        formData.append('filedata', file);
        xhr.send(formData);
    });

    const deleteFn: DeleteFileAction = (file) => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${endpoint}/${file.id}`, false);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        uploaded: file,
                        error: undefined,
                    });
                }
                else {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        reject({
                            uploaded: file,
                            error: data.errors[0].title
                        });
                    }
                    catch {
                        reject({
                            file,
                            error: 'Unexpected response from server'
                        });
                    }
                }
            }
        }

        xhr.send(null);
    });

    return {
        uploadFile: uploadFn,
        deleteFile: deleteFn,
        register: () => ({
            // Subset of retval setup for spreading
            // into Upload.Input component props.
            onUpload: uploadFn,
            onDelete: deleteFn,
        })
    }
}
