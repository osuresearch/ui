

### Font Stack

Our base font stack is `'ProximaNova', sans-serif` at a baseline of `16px`.

For headers, our stack is `'Capita', 'Times New Roman', serif`.

Supported weights are `200, 300, 400, 500, 700`

### Headings

```js
<h1>h1. Heading</h1>
<h2>h2. Heading</h2>
<h3>h3. Heading</h3>
<h4>h4. Heading</h4>
<h5>h5. Heading</h5>
```

### Inline Text Styles

```js
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```

### Links

```js
<a href="/path/to/url">Some link</a>
```

For accessibility, use a `.btn-link` button for links with no target (e.g. `href="#"`):

```js
<button className="btn-link">Some link</button>
```

For external links, use the `<ExternalLink />` component to ensure accessibility and security standards are met:

```js
import { ExternalLink } from '@oris/ui';

<ExternalLink href="https://research.osu.edu">Office of Research</ExternalLink>
```


### Best Practices

* Always define your font sizes using `em` or `rem` for [consistent experiences](https://www.w3.org/QA/Tips/font-size)
* Avoid more than 3 or 4 font sizes per page
