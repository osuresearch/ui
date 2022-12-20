import { useMemo, useState } from 'react';
import { DeleteFileAction, UploaderHookRetval, UploadError, UploadFileAction, UploadProgress } from '../types';

/**
 * Fake uploader that doesn't do anything and "accepts" uploads.
 */
export default function useMockFileUploader(): UploaderHookRetval {
    const uploadFn: UploadFileAction = (file, onProgress) => new Promise((resolve, reject) => {
        let tick: number | undefined;
        let resolver: number | undefined;

        const progress: UploadProgress = {
            file,
            progress: 0,
            cancel: () => {
                // Bind to the XHR used for uploading and
                // cancel the request on call.

                window.clearInterval(tick);
                window.clearInterval(resolver);

                // Always reject the promise on cancellation
                reject({
                    file,
                    error: 'Cancelled'
                } as UploadError);
            }
        };

        // Fire off initial progress state
        onProgress(progress);

        // Demo of updating progress over time
        tick = window.setInterval(() => {
            progress.progress = Math.min(1.0, progress.progress as number + 0.025);
            onProgress(progress);
        }, 50);

        resolver = window.setTimeout(() => {
            window.clearInterval(tick);

            progress.progress = 1.0;
            onProgress(progress);
            resolve({
                id: file.name,
                name: file.name,
                size: file.size,
                download: `https://example.com/download/${file.name}`,
                canDelete: true,
                summary: 'Mock summary data',
            })
        }, 1000);
    });

    const deleteFn: DeleteFileAction = (file) => new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve({
                uploaded: file,
                error: undefined,
            })
        }, 1000);
    });

    return {
        uploadFile: uploadFn,
        deleteFile: deleteFn,
        register: () => ({
            // Subset of retval setup for spreading
            // into Upload.Input component props.
            onUpload: uploadFn,
            onDelete: deleteFn
        }),
    }
}

