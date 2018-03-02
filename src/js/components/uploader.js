/**
 * File Upload Component
 *
 * Compatible with Bootstrap 4.0.0-beta
 */

import Component from '../component';

class Uploader extends Component {
    static get DEFAULTS() {
        return {
            endpoint: null,         // Target endpoint for file interactions.

                                    // A POST request will be made for file uploads, with the fields:
                                    //  `filedata` - string - raw file data (key set by `dataField`)
                                    //  `metadata` - string - additional uploader metadata (value set by `metadata`)
                                    // HTTP 200 response is expected for a successful upload.
                                    // The response body will be stringified and attached to the uploaded
                                    // file as metadata and available via the `file-complete` event

                                    // If `download` is true, a GET request will be made with the fields:
                                    //  `filename` - string - name of the originally uploaded file
                                    //  `metadata` - string - additional uploader metadata (value set by `metadata`)
                                    //  `file-metadata` - string - metadata attached to the specific file
                                    //      (either from the POST response body after an upload or specified
                                    //      in the `files` array for existing files)
                                    // HTTP 200 response is expected along with an appropriate `Content-Disposition`
                                    // header to ensure that a file download is triggered by the browser, and not
                                    // a page change.

                                    // If `delete` is true, a DELETE request will be made with the fields:
                                    //  `filename` - string - name of the originally uploaded file
                                    //  `metadata` - string - additional uploader metadata (value set by `metadata`)
                                    //  `file-metadata` - string - metadata attached to the specific file
                                    //      (either from the POST response body after an upload or specified
                                    //      in the `files` array for existing files)
                                    // HTTP 204 response is expected.

            delete: false,          // Allow files to be deleted after upload. See `endpoint` for behavior.

            download: true,         // Allow files to be downloaded after upload. See `endpoint` for behavior.

            async: true,            // If true, files will be POSTed immediately once added
                                    // If false, files will be uploaded alongside the submitted form

            metadata: '',           // Additional metadata to send alongside file uploads, downloads,
                                    // and deletions. MUST be a string.

            files: [],              // Pre-existing files in the uploader. This is an array of objects with the keys:
                                    //  `name` - string (required) - Filename to display
                                    //  `info` - string (default: '') - human-readable info to display under the filename
                                    //  `delete` - boolean (default: o.delete) - whether this file can be deleted from
                                    //      the server. This overrides the Uploader's o.delete option.
                                    //  `download` - boolean (default: o.download) - whether this file can be downloaded
                                    //      from the server. This overrides the Uploader's o.download option.
                                    //  `metadata` - string (default: '') - additional metadata to send to DELETE
                                    //      or GET requests. Should be the same structure as the endpoint's response
                                    //      when uploading new files
                                    // If you don't need all the extra features, you may instead just pass in an
                                    // array of strings, where each string is an existing filename.
                                    // E.g. `files: ['foo 1.pdf', 'foo 2.pdf', ...]`

            dataField: 'filedata',  // The POST field name that contains the uploaded file data
                                    // Defaults to `filedata`

            // Upload restrictions
            restrictions: {
                size: '20MB',       // Maximum file size per upload, in the form of ##KB/##MB/etc.
                count: 0,           // Maximum number of files that can be uploaded (0 for no limit)
                mime: null          // Whitelisted MIME types (null for no restrictions)
            },

            language: {
                error: 'Something went wrong. Try reloading the page. If the problem persists, ' +
                       'contact <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>',

                empty: '<i class="fa fa-download"></i> Drag a file here or click <strong>Select Files</strong>',

                // Print view version of the blankslate
                printEmpty: 'No files have been uploaded',

                dropzone: '<i class="fa fa-download"></i> Drop file here',

                delete: 'Are you sure you want to delete this file?'
            }
        };
    }

    static get VERSION() {
        return '3.2.0';
    }

    constructor(element, options) {
        super(element, options);

        this.dragTimer = null;

        // Sanity check - problems will occur when metadata is
        // attached to GET or DELETE requests.
        if (typeof this.o.metadata !== 'string') {
            $.error('Uploader metadata must be a string');
        }

        this.setupDOM();
        this.attachEventListeners();
    }

    setupDOM() {
        const id = this.el.attr('id');

        // Activate Uploadifive plugin on the element, piping some whitelisted
        // configurations to Uploadifive and pre-populating with files that are
        // already listed as being uploaded.
        this.el.uploadifive({
            // AJAX behavior
            auto: this.o.async,
            fileObjName: this.o.dataField,
            uploadScript: this.o.endpoint,
            formData: {
                metadata: this.o.metadata
            },

            // File restrictions
            fileSizeLimit: this.o.restrictions.size,
            queueSizeLimit: this.o.restrictions.count,
            uploadLimit: this.o.restrictions.count,
            fileType: this.o.restrictions.mime,

            // Local event handlers
            onAddQueueItem: this.uploadifiveAddItem.bind(this),
            onError: this.uploadifiveError.bind(this),
            onUploadComplete: this.uploadifiveUploadComplete.bind(this),
            onQueueComplete: this.uploadifiveQueueComplete.bind(this),
            onClearQueue: this.uploadifiveClearQueue.bind(this),
            onCancel: this.uploadifiveCancel.bind(this),

            // Overrides of default Uploadifive behavior
            overrideEvents: [
                'onCancel'
            ],

            // UX configurations
            itemTemplate: Uploader.fileItemTemplate,
            width: 'auto', // Because for some reason uploadifive wants to set inline CSS for its button.
            height: 'auto'
        });

        // Uploadifive wraps instead of injecting DOM, so we need to search
        // for the queue in the global DOM
        this.$queue = $(`#uploadifive-${id}-queue`);

        // Add a message block to the queue to be displayed on empty/error states
        this.$feedback = $('<div class="uploader-feedback"></div>');
        this.$queue.append(this.$feedback);

        // Add another message block for feedback when we're printing an empty queue
        // (different language, since it's a non-interactable)
        this.$queue.append(
            `<div class="uploader-print-feedback">
                ${this.o.language.printEmpty}
            </div>`
        );

        // Add a dropzone overlay for drag events
        this.$queue.append(
            `<div class="uploader-dropzone">
                <div>${this.o.language.dropzone}</div>
            </div>`
        );

        this.blankslate();

        // Check for existing files to add to the queue
        if (this.o.files.length) {
            // If it was provided through data- parameters, decode
            if (typeof this.o.files === 'string') {
                try {
                    this.o.files = JSON.parse(this.o.files);
                } catch (e) {
                    this.error('Existing files supplied in invalid format');
                }
            }

            this.addExistingFiles(this.o.files);
        }
    }

    attachEventListeners() {
        // Detect file drag events on our queue
        // Via: https://stackoverflow.com/a/8494918
        this.$queue.on('dragover dragstart dragenter', (e) => {
            const dt = e.originalEvent.dataTransfer;

            if (dt.types && (dt.types.indexOf ?
                dt.types.indexOf('Files') !== -1 : dt.types.contains('Files'))) {
                window.clearTimeout(this.dragTimer);
                this.$queue.addClass('is-dragging');
            }
        });

        this.$queue.on('dragleave drop dragexit dragend', () => {
            this.dragTimer = window.setTimeout(() => {
                this.$queue.removeClass('is-dragging');
            }, 25);
        });
    }

    /**
     * Add existing files to the input queue in an already complete state
     *
     * @param {array} files strings of filenames or file objects
     */
    addExistingFiles(files) {
        this.$queue.removeClass('is-empty');

        files.forEach(file => {
            const $template = $(Uploader.fileItemTemplate);
            let fileObject = file;

            // If it's a simple string, convert to an Uploadifive file object
            if (typeof file === 'string') {
                fileObject = {
                    name: file,
                    metadata: '',
                    info: ''
                };
            }

            // Add some extra properties that are required by Uploadifive
            fileObject.complete = true;
            fileObject.uploading = false;
            fileObject.queueItem = $template;

            // Other things Uploadifive adds that we probably won't:
            // size, type (image/png), lastModified (UTC), lastModifiedDate

            // Add some extra properties that are useful internally
            fileObject.canDelete = this.o.delete;
            if (typeof file.delete !== 'undefined') {
                fileObject.canDelete = file.delete;
            }

            fileObject.canDownload = this.o.download;
            if (typeof file.download !== 'undefined') {
                fileObject.canDownload = file.download;
            }

            $template.data('file', fileObject);

            $template.find('.filename').html(fileObject.name);
            $template.find('.fileinfo').html(fileObject.info || '');

            // Note it has to be 'complete' as well otherwise Uploadifive
            // will complain about the existing file record when uploading
            // new files.
            $template.addClass('complete is-existing');
            $template.find('.progress').remove();

            // Add control to delete the file, if possible
            if (fileObject.canDelete) {
                $template.find('.close').on(
                    'click',
                    this.deleteExistingFile.bind(this)
                );
            } else {
                $template.find('.close').remove();
            }

            // If they can download the file, inject a download link
            if (fileObject.canDownload) {
                $template
                    .find('.filename')
                    .attr(
                        'href',
                        this.o.endpoint +
                        '?filename=' + encodeURIComponent(fileObject.name) +
                        '&metadata=' + encodeURIComponent(this.o.metadata || '') +
                        '&file-metadata=' + encodeURIComponent(fileObject.metadata || '')
                    );
            }

            this.$queue.append($template);
        });
    }

    /**
     * Delete a file that was preloaded alongside the component
     *
     * These are treated a bit differently since they're not tracked by Uploadifive,
     * so we have to mimic some of its behavior to make them look similar
     *
     * @param {Event} e
     *
     * @return {boolean} false to prevent event bubbling
     */
    deleteExistingFile(e) {
        const $item = $(e.currentTarget).closest('.uploadifive-queue-item');
        const that = this;

        if (confirm(this.o.language.delete)) {
            this.deleteCompletedFile($item.data('file'));

            // Remove the item from being tracked as part of isEmpty()
            $item.removeClass('is-existing');

            // do the same thing that uploadifive does and fade the item out of the DOM
            $item.fadeOut(500, function () {
                $(this).remove();
            });
        }

        e.preventDefault();
        return false;
    }

    /**
     * Delete a file that has already been uploaded
     *
     * This applies to both pre-existing files in the uploader and files
     * that are AJAX uploaded through the uploader while running.
     *
     * @param {object} file Uploadifive file metadata
     */
    deleteCompletedFile(file) {
        $.ajax({
            method: 'DELETE',
            url: this.o.endpoint +
                '?filename=' + encodeURIComponent(file.name) +
                '&metadata=' + encodeURIComponent(this.o.metadata || '') +
                '&file-metadata=' + encodeURIComponent(file.metadata || '')
        })
        .done(() => {
            if (this.isEmpty()) {
                this.blankslate();
            }
        })
        .fail(() => {
            // If the developer gave the user the ability to delete a file,
            // then a deletion on the backend should never fail.
            // We call this an irrecoverable error.
            this.error('Server returned an error response');
        });
    }

    /**
     * Get DOM template for file item in the Uploadifive container
     *
     * @return HTML
     */
    static get fileItemTemplate() {
        // Note that 'close', 'filename', 'fileinfo', 'progress' are all required
        // class names, as they're used by the uploadifive plugin to hook events
        return `
            <div class="uploadifive-queue-item">
                <a class="close btn btn-sm btn-outline-danger" href="#">remove</a>
                <div><a class="filename"></a><span class="fileinfo"></span></div>
                <div class="progress">
                    <div class="progress-bar"></div>
                </div>
            </div>`;
    }

    /**
     * Check if this component has any files at all
     *
     * @return {boolean}
     */
    isEmpty() {
        return this.$queue.find('.uploadifive-queue-item:not(".is-removing")').length < 1;
    }

    /**
     * Check if this component has any uploads still waiting to be uploaded
     *
     * @return {boolean}
     */
    hasQueuedFiles() {
        return this.$queue.find(
            '.uploadifive-queue-item:not(".complete"):not(".error")'
        ).length > 0;
    }

    /**
     * Check if this component has any uploads in an error state
     *
     * @return {boolean}
     */
    hasErrors() {
        return this.$queue.find('.uploadifive-queue-item.error').length > 0;
    }

    /**
     * Trigger an upload of all queued files at once
     */
    uploadQueuedFiles() {
        this.el.uploadifive('upload');
    }

    /**
     * Event handler for when Uploadifive finishes uploading a single file
     *
     * This will take whatever response body came from the POST request and
     * apply it as metadata to the file (could be an ID, JSON blob, whatever).
     * This metadata will then be sent back up on every download
     * request/delete request/etc.
     *
     * @param {object} file             Uploadifive file metadata
     * @param {string} xhrResponseText  Response content from the POST
     */
    uploadifiveUploadComplete(file, xhrResponseText) {
        file.metadata = xhrResponseText;

        // If uploaded files are downloadable, make the filename a download link
        if (this.o.download) {
            file.queueItem
                .find('.filename').attr(
                    'href',
                    this.o.endpoint +
                    '?filename=' + encodeURIComponent(file.name) +
                    '&metadata=' + encodeURIComponent(this.o.metadata || '') +
                    '&file-metadata=' + encodeURIComponent(file.metadata || '')
                )
                .attr('target', '_BLANK');
        }

        // If deleting uploaded files is not enabled, disable delete action
        if (!this.o.delete) {
            file.queueItem.find('.close').remove();
        }

        // Notify listeners next tick instead of this call stack
        window.setTimeout(() => {
            this.el.trigger('file-complete.uploader');
        }, 1);
    }

    /**
     * Event handler for when Uploadifive's queue of files is complete
     */
    uploadifiveQueueComplete() {
        // TODO: Bug where this gets triggered even if we drag a non-file into the uploader.
        // E.g. we drag highlighted text into it, and this gets fired off for an empty queue.
        // Also gets fired off if a file is added, but has an error.

        // We avoid triggering this immediately to allow all DOM changes
        // to take effect prior to notifying listeners. Uploadifive cascades
        // file complete + queue complete events immediately.
        window.setTimeout(() => {
            this.el.trigger('queue-complete.uploader');
        }, 1);
    }

    /**
     * Event handler for when an item is added to Uploadifive
     */
    uploadifiveAddItem() {
        this.$queue.removeClass('is-empty');
    }

    /**
     * Event handler for when Uploadifive's queue is wiped
     * by an internal call to `clearQueue`
     */
    uploadifiveClearQueue() {
        this.blankslate();
    }

    /**
     * Override of Uploadifive's default cancel handler
     *
     * This replaces Uploadifive's removeQueueItem with our own implementation
     * in order to detect already uploaded files and give the user a confirmation
     * for intent to delete prior to sending a DELETE to the server.
     *
     * @param {object} file Uploadifive file metadata
     */
    uploadifiveCancel(file) {
        const ufive = this.el.data('uploadifive');
        const fadeTime = 500;
        const that = this;
        let message;

        if (file.queueItem) {
            // If it's a completed file, we'll be sending an AJAX DELETE
            // after the user has confirmed intent
            if (file.complete) {
                if (!confirm(this.o.language.delete)) {
                    return;
                }

                this.deleteCompletedFile(file);
                message = 'Deleted';
            } else {
                // It's an error or was mid-upload, just remove the queue entry
                message = 'Cancelled';
            }

            file.queueItem.find('.fileinfo').html(message);
            file.queueItem.find('.progress-bar').width(0);

            // Flag an is-removing state so this file doesn't get counted
            // despite it still being in the DOM for an extra 500ish ms
            file.queueItem.addClass('is-removing');

            file.queueItem.delay(0).fadeOut(fadeTime, function () {
                $(this).remove();

               // If there's nothing left in the queue, go back to a blankslate
                if (that.$queue.find('.uploadifive-queue-item').length < 1) {
                    that.blankslate();
                }
            });

            delete file.queueItem;
            ufive.queue.count--;
        }
    }

    /**
     * Event handler for errors in Uploadifive
     */
    // eslint-disable-next-line class-methods-use-this, no-unused-vars
    uploadifiveError(errorType, file) {
        // console.log('uploadifive:error', errorType, file);
        /* Error codes:
            404_FILE_NOT_FOUND
            403_FORBIDDEN
            Unknown Error
            xhr.responseText
            FORBIDDEN_FILE_TYPE
            FILE_SIZE_LIMIT_EXCEEDED
            QUEUE_LIMIT_EXCEEDED 'The maximum number of queue items has been reached
                                  Please select fewer files.'
            UPLOAD_LIMIT_EXCEEDED 'The maximum upload limit has been reached.'

        */

        // TODO: Uploadifive does not correctly handle network offline errors.
    }

    /**
     * Activate blankslate state for when the queue is empty
     */
    blankslate() {
        this.$queue.addClass('is-empty');
        this.$feedback.html(this.o.language.empty);
    }

    /**
     * Activate an error state on irrecoverable errors
     */
    error(message) {
        this.$queue.addClass('is-error');
        this.$feedback.html(
            this.o.language.error.replace(/\$message/g, message)
        );

        // Irrecoverably destroy the upload capabilities
        this.el.siblings('input[type="file"]').remove();
        this.el.parent().addClass('is-error');
    }
}

Uploader.jQueryInterface();

export default Uploader;

