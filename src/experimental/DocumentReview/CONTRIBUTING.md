
# Contributing Guide for DocumentReview

This is a complex component that needs its own guide on architecture.

This is a non-React component - wrapped by a **simple** React component that passes down state information to the non-React side of things. 

The majority of the work done in this component is done within an IFrame document that does not have React or **any** JavaScript sans what's built into the browser. 

## ReviewManager

This is the main entry point / management component for everything. 

## CommentElement

This is the DOM container of each sidebar comment. Each reply is also a nested `CommentElement`. Replies cannot have replies - we only allow one level of nesting to avoid substantially complex data management (and rendering) situations. 

## ContextConnectorElement

This is the SVG edge that visually links a comment to its context within a document.

This element is an absolutely positioned child of the `CommentElement` - which allows us to align SVG lines between elements of the document without having to inject additional DOM into the reviewable document. 

## CSSElement

This injects custom CSS into the document once it's been loaded. 

## CommentContext

This is metadata about the relationship between a Comment and the document context. The same context is shared between a comment and all replies to that comment.

## SidebarElement

This is the container for all of the comments. 

## TableOfContentsElement

Container for the TOC. This is fed the list of sections from the ReviewManager - and each is an anchor to that position of the document. 


# Things to Watch Out For

Do not access the globals `document` or `window`. These point to the wrong frame (parent frame, not the IFrame that components act within). Thus calls like `document.getElementById(...)` will never work. 

Each custom Element gets a `Document` instance that points to the IFrame's Document.

---

**Always** check MDN for browser support of features. The polyfills that apply to a React app automatically are **not** applied to code executed within this IFrame. 

---

**Always watch performance** - Documents can be large with many comments. A brute force algorithm won't always cut it.

One real example of this - whenever the user is typing the size of comment blocks may change - thus causing all the comments to have to "reflow" on the sidebar to fit the resized comment. A brute force algorithm would just call `reflow()` every time the text changes - but once you have more than a trivial number of comments this becomes noticeable lag every letter the user inputs. Instead - it checks the `clientHeight` of the active comment with the previous `clientHeight` last reflow and will only reflow if the height is larger than the last.

---

**Do not make external requests** - Browser security around IFrames hitting resources outside of the current domain is shaky. Just don't do it. 