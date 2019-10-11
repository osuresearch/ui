
### Examples

If your application requires a complex interactive table, use DataTables. You will need to add the following additional vendor script from assets:

```html
<script src="/assets/js/vendor/datatables-1.10.10.min.js"></script>
```

Since DataTables is a jQuery component, you will need to wrap it and hook the rendered `<table>` once your component mounts:

```js
class MyDataTable extends React.Component {
    constructor() {
        this.ref = React.createRef();
    }

    componentDidMount() {
        $(this.ref.current).DataTable({
            // Your DataTables configurations here...
        });
    }

    render() {
        return (
            <table ref={this.ref} cellspacing="0" width="100%" className="stripe">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td><span class="pull-right">2011/04/25</span></td>
                        <td class="money">$320,800</td>
                    </tr>
                    <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td><span class="pull-right">2011/07/25</span></td>
                        <td class="money">$170,750</td>
                    </tr>
                    <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td><span class="pull-right">2009/01/12</span></td>
                        <td class="money">$86,000</td>
                    </tr>
                    <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td><span class="pull-right">2012/03/29</span></td>
                        <td class="money">$433,060</td>
                    </tr>
                    <tr>
                        <td>Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td><span class="pull-right">2008/11/28</span></td>
                        <td class="money">$162,700</td>
                    </tr>
                    <tr>
                        <td>Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td><span class="pull-right">2012/12/02</span></td>
                        <td class="money">$372,000</td>
                    </tr>
                    <tr>
                        <td>Herrod Chandler</td>
                        <td>Sales Assistant</td>
                        <td>San Francisco</td>
                        <td><span class="pull-right">2012/08/06</span></td>
                        <td class="money">$137,500</td>
                    </tr>
                    <tr>
                        <td>Rhona Davidson</td>
                        <td>Integration Specialist</td>
                        <td>Tokyo</td>
                        <td><span class="pull-right">2010/10/14</span></td>
                        <td class="money">$327,900</td>
                    </tr>
                    <tr>
                        <td>Charde Marshall</td>
                        <td>Regional Director</td>
                        <td>San Francisco</td>
                        <td><span class="pull-right">2008/10/16</span></td>
                        <td class="money">$470,600</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

<MyDataTable />
```

We can't provide an extensive list of DataTables features, so spend some days on datatables.net/manual


For basic non-interactive tables, just use a `<table>`:

```js
<table class="table table-striped">
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
* Always ensure the `<table>` has attributes `cellspacing="0" width="100%"` otherwise DataTables may not render as expected
* For long tables, you may choose to zebra-stripe the table. Just add `stripe` as a class to the `<table>`.

