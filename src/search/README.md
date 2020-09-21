
# Payload Syntax

Search filters comply with the standard expected by the ORIS\GraphQL `SearchFilters` scalar. The full payload looks like:

```json
{
    "AND": [
        { "term": { "COLUMN_NAME_0": "published" } }
        { "between": { "COLUMN_NAME_1": { "from": "2016-01-01", "to": "2020-01-01" } } }
        { "OR": [ 
            { "term": { "COLUMN_NAME_2": "foo" } },
            { "term": { "COLUMN_NAME_3": "foo" } },
            { "anyOf": { "COLUMN_NAME_4": ["foo", "bar"] } }
        ]}
    ]
}
```

Note that AND/OR filters may be recursively nested to any depth.

An additional `name` field may be added to every filter that should be ignored by the backend. 

No restrictions are made to what columns can be specified by the frontend. It is the backend's responsibility to restrict access appropriately.

Other backends are free to implement their own handling of search filters - using the above and the types in `index.ts` as reference.

# Using Filters

Looks something like:

```js
const filters = AND([
    term('column_0', 'foo'),
    anyOf('column_1', ['foo', 'bar']),
    between('column_4', '2018-01-01', '2020-01-01'),
    OR([
        term('column_2', 'fizz%'),
        term('column_3', 'buzz')
    ])
]);
```

Each method has an optional argument for a filter name. Required if context methods (`getFilter`, `deleteFilter`, etc) are to be used on a particular filter, and only works for top level filters (e.g. within the initial `AND` filter). It doesn't do any sort of smart "look for nested filter to remove" type of stuff.

The best practice is to call the context's `addFilter` with a named root filter and not to name anything else under it, like:

```js
addFilter(term('column_0', 'foo', 'Is Foo'));

getFilter('Is Foo');
deleteFilter('Is Foo');
...
```

For composites it's the same deal - do it at the top level only:

```js
addFilter(OR([
    term('column_2', 'fizz'),
    term('column_3', 'buzz')
], 'Fizz or Buzz'));

getFilter('Fizz or Buzz');
deleteFilter('Fizz or Buzz');
...
```

To remove entries from an AND/OR, make a new one with the subset that you want. The `addFilter` method will replace an existing filter with the same name.

```js
const filter = getFilter<AndFilters>('Foo');
const values = filter.AND.filter((v) => ...);

addFilter(AND(values, 'Foo'));
```

Assume `getFilter` returns an immutable value (and it may eventually). Don't ever try to modify something inside that filter object because it's not going to work the way you expect it to. 
