
### Examples

If your application requires a complex interactive table, use DataTables.

For basic non-interactive tables, just use a `<table>` with the table class:

```js
<table className="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

### Best Practices

* Avoid DataTables unless you have a hard requirement to be able to sort/filter a large dataset. If your users want to be able to sort, but worst case scenario the table has 4-5 items in it, tell them their opinion is wrong - but nicely :)
* Right align numbers, dates, and money
* For long tables, you may choose to zebra-stripe the table. Just add `stripe` as a class to the `<table>`.

