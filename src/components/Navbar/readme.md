
### Examples

>Note: `MemoryRouter` is used to demo components that require React Router. Your application would instead be using a proper routing solution and **not** `MemoryRouter`.

```js
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

<MemoryRouter>
    <Navbar title="My Cool App">
        <NavLink to="/foo">Foo</NavLink>
        <NavLink to="/bar">Bar</NavLink>
    </Navbar>
</MemoryRouter>
```

An example of combining `AppSearch` and `Profile` within your primary navigation:


```js
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AppSearch, Profile } from '@oris/ui';

<MemoryRouter>
    <Navbar title="My Cool App">
        <NavLink to="/foo">Foo</NavLink>
        <NavLink to="/bar">Bar</NavLink>

        <AppSearch
            endpoint="https://orapps.osu.edu/api/v1/person"
            categorizer="attributes.college.name"
        />

        <Profile username="buckeye.1" />
    </Navbar>
</MemoryRouter>
```
