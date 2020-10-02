### Examples

```jsx
import React, { useState } from 'react';

const [selectedCity, setSelectedCity] = useState();

const cities = require('./cities').default;

<Dropdown id="select-city">
    <Dropdown.Label>Select a City</Dropdown.Label>

    <Dropdown.Input 
        value={selectedCity}
        options={cities}
        onChange={(e) => setSelectedCity(e.value)}
        optionLabel="name"
    />
</Dropdown>
```

#### Editable

```jsx
import React, { useState } from 'react';

const [selectedCity, setSelectedCity] = useState();

const cities = require('./cities').default;

<Dropdown id="select-city-2">
    <Dropdown.Label>Select a City</Dropdown.Label>

    <Dropdown.Input 
        value={selectedCity}
        options={cities}
        onChange={(e) => setSelectedCity(e.value)}
        optionLabel="name"
        editable
    />
</Dropdown>
```

#### Advanced with Templating, Filtering and Clear Icon

Label of an option is used as the display text of an item by default, for custom content support define an `itemTemplate` function that gets the option instance as a parameter and returns the content.

Options can be filtered using an input field in the overlay by enabling the `filter` property. By default filtering is done against label of the items and `filterBy` property is available to choose one or more properties of the options. In addition `filterMatchMode` can be utilized to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".

```jsx
import React, { useState } from 'react';
import { Icon } from '@oris/ui';

const [selectedCountry, setSelectedCountry] = useState();

const countries = require('./countries').default;

const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <Icon name='suitcase' /> {option.name}
                </div>
            );
        }

        return (
            <span>
                Empty
            </span>
        );
    }

const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <Icon name='suitcase' /> {option.name}
            </div>
        );
    }

<Dropdown id="select-country">
    <Dropdown.Label>Select a Country</Dropdown.Label>

    <Dropdown.Input 
        value={selectedCountry}
        options={countries}
        onChange={(e) => setSelectedCountry(e.value)}
        optionLabel="name"
        filter
        showClear
        filterBy="name"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
    />
</Dropdown>
```