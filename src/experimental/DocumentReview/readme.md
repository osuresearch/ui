
### Examples

```js
import { SourceMock, generateMockComments } from './mock';
import { HTML } from './mock/irb-amendment';

const comments = [];

// This is only for demoing a mock with random comments.
const onManagerReady = (manager) => {
    const density = 100;
    generateMockComments(manager, density);
}

<DocumentReview
    src={HTML}
    comments={comments}
    onAddComment={(c) => console.debug('Add Comment', c)}
    onUpdateComment={(c) => console.debug('Update Comment', c)}
    onRemoveComment={(c) => console.debug('Remove Comment', c)}
    onReady={onManagerReady}
    defaultAuthor="(me)"
    canEditAnyComment={true}
/>
```


### Document Requirements

The document must be an independent (that is, no external dependencies) HTML document with minimal inline CSS rules. The document DOM will be rendered in a fixed width container that mimics A4 paper (210mm wide) with a 20mm margin. 

#### Document Sections

A document section is an HTMLElement with the `data-comment-section="Human Readable Section Name"` attribute. Document sections will also be aggregated to generate the table of contents.

If you want to visually nest a section under another section, add `data-comment-section-level="1"` to the same HTMLElement you added the `data-comment-section`. Accepted nesting levels are 0 (default), 1, and 2. 

Nesting is just a visual modification to the table of contents, it serves no other purpose. Comments will be associated with the first `data-comment-section` ancestor encountered. 

#### Block Comments

To allow someone to add review comments to a block element, add `data-comment-block="true"` to that element. 

Additional rules:

* There must be a Document Section ancestor element
* The HTMLElement must have a unique `id` attribute across the entire document

#### Inline Comments

To allow someone to add review comments to a fragment of text within an HTMLElement, add `data-comment-inline="true"` to the HTMLElement containing text.

Additional rules:

* There must be a Document Section ancestor element
* The HTMLElement must have a unique `id` attribute across the entire document
* Currently supports text-only. No additional DOM (such as `<br>`, `<i>`, etc) is allowed within the HTMLElement. 


### Mutating a Document Containing Comments

A document **may** be changed and still maintain correct review comment associations. As long as the following rules are applied:

* The string in `data-comment-section` cannot be changed
* HTMLElements with `data-comment-block` or `data-comment-inline` cannot have their `id` attribute changed or be moved to a different `data-comment-section`
* HTMLElements with `data-comment-inline` cannot have innerHTML content changed in any way. This will break references to text ranges.

Changes that are safe to make are:

* Removing an entire `data-comment-section` - A console warning will be issued for comments that are loaded without a matching section and they will be ignored entirely in the output.
* Changing the innerHTML content of a `data-comment-block` HTMLElement
* Adding new sections and elements that can be commented on 
* Changing around any DOM that does not break the previous rules

### Example Document

A document that can be reviewed may look like the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .my-css {
            ...
        }
    </style>
</head>
<body>
    <div data-comments-section="Foo Section">
        Your dom elements here

        <div id="block-1" data-comment-block="true">
            You can make a comment on this block element
        </div>
        <div id="inline-1" data-comment-inline="true">
            You can highlight any of the text in this element and 
            ake a comment associated just with that text range.
        </div>
            
        <div 
            data-comments-section="Foo Subsection 1" 
            data-comment-section-level="1"
        >
            <div id="block-2" data-comment-block="true">
                You can make a comment on this block element
            </div>
        </div>
        <div 
            data-comments-section="Foo Subsection 2" 
            data-comment-section-level="1"
        >
            <div id="block-3" data-comment-block="true">
                You can make a comment on this block element
            </div>
        </div>
    </div>
    <div data-comments-section="Bar Section">
        Your bar form fields here

        <div id="block-4" data-comment-block="true">
            You can make a comment on this block element
        </div>
    </div>
</body>
</html>
```
