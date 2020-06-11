
### Examples

```js
import { SourceMock } from './mock';
import { HTML } from './mock/irb-amendment';

const comments = [];

<DocumentReview
    src={HTML}
    comments={comments}
    onAddComment={(c) => console.debug('Add Comment', c)}
    onUpdateComment={(c) => console.debug('Update Comment', c)}
    onRemoveComment={(c) => console.debug('Remove Comment', c)}
    defaultAuthor="(me)"
    canEditAnyComment={true}
/>
```


### Document Requirements

The document **MUST** be an independent (that is, no external dependencies) HTML document with **minimal** inline CSS rules.

**Avoid** any `overflow: hidden` or `overflow-x: hidden` rules in your document CSS. Otherwise, the comment blocks may not be visible.

Add a `data-comments-section="Unique Section Name"` to each element on your document that you want to be commentable. The comments section will appear vertically aligned with the element you add it to.

Each section name **must** be unique within your document, as the section will be used to associate comments from the API to the right grouping on the document.

Keep elements with `data-comments-section` **as unnested as possible** within the document. If you need to nest for organization purposes, ensure that the element is a block that spans the full width of the document and there is not a nesting of multiple margins / paddings down the DOM tree to your element.

If you can't figure out how to do that - add another element with the `data-comments-section` attribute visually near your commentable element, but not in the same nested DOM tree.

The best case scenario is the following structure:

```html
...
<body>
    <div data-comments-section="Foo Section">
        Your dom elements here
    </div>
    <div data-comments-section="Bar Section">
        Your bar form fields here
    </div>
</body>
...
```


### API Requirements

The component expects to consume a collection of `Comment` JSON:API resources with the following structure at a minimum:

```json
{
    "data": {
        "type": "Comment",
        "id": "1",
        "attributes": {
            "section": "Section Foo",
            "author": "Chase McManning",
            "date": "2019-11-03T19:28:36+0000",
            "message": "Comment about Foo"
        },
        "links": {
            "self": "/path/to/comment/1"
        }
    },
    "links": {
        "self": "/path/to/comments"
    }
}
```

A `POST` will be made to the top level `links.self` endpoint to create a new comment with the above set of attributes.

>TODO: PATCH/DELETE support. Assumes a permission model would be in place.
