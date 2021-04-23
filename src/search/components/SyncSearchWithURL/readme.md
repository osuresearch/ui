
### Query Format

This component will inject query parameters to the URL similar to the following:

```js static
https://my.app/
    ?f=W3sibmFtZSI6Ik9TVS[...]
    &s=3JhbCBJUkIifX1d[...]
    &q=foo+bar
    &l=20
    &o=40
```

Each query parameter encodes some information about the current state of the search:

* `f` - Search filters JSON encoded to base64
* `s` - Search sorting JSON encoded to base64
* `q` - Full text terms
* `l` - Page limit
* `o` - Page offset

Omitted terms will use the defaults defined by the application or backend search API.

