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
                                    // A POST request will be made for file uploads, with the keys
                                    // `filedata` for the raw file upload and `metadata` for the
                                    // metadata attached to this instance.
                                    // DELETE and GET requests may also be made against this endpoint,
                                    // based on the `delete` and `download` settings.

            delete: false,          // Allow files to be deleted after upload. If true, a DELETE
                                    // will be sent to `endpoint` in the form of:
                                    // DELETE {endpoint}?filename={filename}&metadata={metadata}

            download: true,         // Allow files to be downloaded after upload. If true, a GET
                                    // will be sent to `endpoint` in the form of:
                                    // GET {endpoint}?filename={filename}&metadata={metadata}

            async: true,            // If true, files will be POSTed immediately once added
                                    // If false, files will be uploaded alongside the submitted form

            metadata: '',           // Additional metadata to send alongside file uploads, downloads,
                                    // and deletions. MUST be a string.

            files: [],              // Pre-existing files in the uploader. This is an array of objects,
                                    // where each object a required `filename` key, and optional keys:
                                    // `info` (string, default is an empty string),
                                    // and `deletable` (boolean, default is value of `delete`)
                                    // You may also optionally pass this in as an array of strings,
                                    // where each string is then an existing filename

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

                printEmpty: 'No files have been uploaded',

                dropzone: '<i class="fa fa-download"></i> Drop file here'
            }
        };
    }

    static get VERSION() {
        return '2.1.0';
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
            // Async behavior
            auto: this.o.async,
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

            // UX configurations
            itemTemplate: this.fileItemTemplate(),
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
     * Add existing files to the input as 'complete'
     *
     * @param {array} files strings of filenames or file objects
     */
    addExistingFiles(files) {
        this.$queue.removeClass('is-empty');

        files.forEach((file) => {
            const $template = $(this.fileItemTemplate());
            let canDelete = this.o.delete;
            let canDownload = this.o.download;
            let filename;

            // If it's a simple string, it's just a filename
            if (typeof file === 'string') {
                filename = file;
                $template.find('.filename').html(file);
            } else {
                filename = file.filename;
                $template.find('.filename').html(file.filename);
                $template.find('.fileinfo').html(file.info);

                if (typeof file.delete !== 'undefined') {
                    canDelete = file.delete;
                }

                if (typeof file.download !== 'undefined') {
                    canDownload = file.download;
                }
            }

            // Note it has to be 'complete' as well otherwise Uploadifive
            // will complain about the existing file record when uploading
            // new files.
            $template.addClass('complete is-existing');
            $template.find('.progress').remove();

            // Add control to delete the file, if possible
            if (canDelete) {
                $template.find('.close').on(
                    'click',
                    this.deleteExistingFile.bind(this)
                );
            } else {
                $template.find('.close').remove();
            }

            // If they can download the file, inject a download link
            if (canDownload) {
                $template
                    .find('.filename')
                    .attr(
                        'href',
                        this.o.endpoint +
                        '?filename=' + encodeURIComponent(filename) +
                        '&metadata=' + encodeURIComponent(this.o.metadata)
                    )
                    .attr('target', '_blank');
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
     */
    deleteExistingFile(e) {
        const $item = $(e.currentTarget).closest('.uploadifive-queue-item');
        $item.removeClass('is-existing');

        this.deleteCompletedFile(
            $item.find('.filename').text().trim()
        );

        // do the same thing that uploadifive does and fade the item
        $item.fadeOut(500, function () {
            $(this).remove();
        });

        // If the item was the last, go to a blankslate state
        if (this.isEmpty()) {
            this.blankslate();
        }

        return false;
    }

    /**
     * Delete a file that has already been uploaded.
     *
     * This applies to both pre-existing files in the uploader and files
     * that are AJAX uploaded through the uploader while running.
     *
     * @param {string} filename to be deleted
     */
    deleteCompletedFile(filename) {
        $.ajax({
            method: 'DELETE',
            url: this.o.endpoint,
            data: {
                filename,
                metadata: this.o.metadata
            }
        });

        // TODO: Error response handling
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
        const ufive = this.el.data('uploadifive');

        // We have to mix internally tracked files (new uploads) plus existing
        // added to the DOM - otherwise we can't get an accurate count.
        // (just searching for .uploadifive-queue-item is inaccurate due to
        // delays in how Uploadifive removes things from the DOM)
        return ufive.uploads.count + ufive.queue.count +
                this.$queue.find('.uploadifive-queue-item.is-existing').length < 1;
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
     * Trigger an upload of all queued files at once.
     *
     * TODO: Document how we listen for a completion
     */
    uploadQueuedFiles() {
        this.el.uploadifive('upload');
    }

    /**
     * Event handler for when Uploadifive finishes uploading a single file
     *
     * @param {object} file metadata
     */
    uploadifiveUploadComplete(file) {
        // If uploaded files are downloadable, make the filename a download link
        if (this.o.download) {
            file.queueItem
                .find('.filename').attr(
                    'href',
                    this.o.endpoint +
                    '?filename=' + encodeURIComponent(file.name) +
                    '&metadata=' + encodeURIComponent(this.o.metadata)
                )
                .attr('target', '_blank');
        }

        this.el.trigger('file-complete.uploader');
    }

    /**
     * Event handler for when Uploadifive's queue of files is complete
     */
    uploadifiveQueueComplete() {
        // TODO: Bug where this gets triggered even if we drag a non-file into the uploader.
        // E.g. we drag highlighted text into it, and this gets fired off for an empty queue.
        // Also gets fired off if a file is added, but has an error.

        this.el.trigger('queue-complete.uploader');
    }

    uploadifiveAddItem() {
        this.$queue.removeClass('is-empty');
    }

    /**
     * Event handler for when Uploadifive's queue is wiped
     * by an internal call to `clearQueue`
     */
    uploadifiveClearQueue() {
        if (this.isEmpty()) {
            this.blankslate();
        }
    }

    /**
     * Event handler for when a file is cancelled in Uploadifive
     */
    uploadifiveCancel(file) {
        if (file.complete) {
            this.deleteCompletedFile(file.name);
        }

        if (this.isEmpty()) {
            this.blankslate();
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
        this.el.addClass('is-error');
        this.$feedback.html(
            this.o.language.error.replace(/\$message/g, message)
        );
    }
}

Uploader.jQueryInterface();

export default Uploader;

