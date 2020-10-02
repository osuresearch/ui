AutoComplete is used as a controlled component with `value` and `onChange` properties. In addition, the component requires an array of `suggestions` and a `completeMethod` to query the results.

[AutoComplete documentation sourced from PrimeReact website](https://www.primefaces.org/primereact/showcase/#/autocomplete)

### Examples

#### Basic
```jsx
import React, { useState } from 'react';

const [selectedCountry, setSelectedCountry] = useState();
const countries = require('./countries').default;

const [filteredCountries, setFilteredCountries] = useState();

const searchCountry = (event) => {
        setTimeout(() => {
            let newFilteredCountries;
            if (!event.query.trim().length) {
                newFilteredCountries = countries;
            }
            else {
                newFilteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(newFilteredCountries);
        }, 250);
    }

<AutoComplete id="countries">
    <AutoComplete.Label>Countries</AutoComplete.Label>

    <AutoComplete.Input
        value={selectedCountry} 
        suggestions={filteredCountries} 
        completeMethod={searchCountry} 
        field="name" 
        onChange={(e) => setSelectedCountry(e.value)} 
    />
</AutoComplete>
```

#### Dropdown

Enabling `dropdown` property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes "blank" or "current" as possible values. "blank" is the default mode to send a query with an empty string whereas "current" setting sends a query with the current value of the input.

```jsx
import React, { useState } from 'react';

const [selectedCountry, setSelectedCountry] = useState();
const countries = require('./countries').default;

const [filteredCountries, setFilteredCountries] = useState();

const searchCountry = (event) => {
        setTimeout(() => {
            let newFilteredCountries;
            if (!event.query.trim().length) {
                newFilteredCountries = countries;
            }
            else {
                newFilteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(newFilteredCountries);
        }, 250);
    }

<AutoComplete id="countries1">
    <AutoComplete.Label>Countries</AutoComplete.Label>

    <AutoComplete.Input
        value={selectedCountry} 
        suggestions={filteredCountries} 
        completeMethod={searchCountry} 
        dropdown
        field="name" 
        onChange={(e) => setSelectedCountry(e.value)} 
    />
</AutoComplete>
```

#### Multiple

Multiple mode is enabled using `multiple` property used to select more than one value from the autocomplete. In this case, value reference should be an array.

```jsx
import React, { useState } from 'react';

const [selectedCountry, setSelectedCountry] = useState();
const countries = require('./countries').default;

const [filteredCountries, setFilteredCountries] = useState();

const searchCountry = (event) => {
        setTimeout(() => {
            let newFilteredCountries;
            if (!event.query.trim().length) {
                newFilteredCountries = countries;
            }
            else {
                newFilteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(newFilteredCountries);
        }, 250);
    }

<AutoComplete id="countries2">
    <AutoComplete.Label>Countries</AutoComplete.Label>

    <AutoComplete.Input
        value={selectedCountry} 
        suggestions={filteredCountries} 
        completeMethod={searchCountry} 
        multiple
        field="name" 
        onChange={(e) => setSelectedCountry(e.value)} 
    />
</AutoComplete>
```

#### Objects

AutoComplete can work with objects using the `field` property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. All of the examples above are using an imported Country object that has name and code fields such as `{name: "United States", code: "USA"}`.

#### Templating

Custom content can be displayed using `itemTemplate` property that references a function or JSXElement or string which gets the suggestion option and returns an element. Similarly `selectedItemTemplate` property is available to customize the chips in multiple mode using the same approach.

```jsx
import React, { useState } from 'react';
import { Icon } from '@oris/ui';

const [selectedCountry, setSelectedCountry] = useState();
const countries = require('./countries').default;

const [filteredCountries, setFilteredCountries] = useState();

const searchCountry = (event) => {
        setTimeout(() => {
            let newFilteredCountries;
            if (!event.query.trim().length) {
                newFilteredCountries = countries;
            }
            else {
                newFilteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(newFilteredCountries);
        }, 250);
    }

const itemTemplate = (item) => {
    return (
        <><Icon name='plus-circle' /> {item.name}</>
    )
}

<AutoComplete id="countries-template">
    <AutoComplete.Label>Countries</AutoComplete.Label>

    <AutoComplete.Input
        value={selectedCountry} 
        suggestions={filteredCountries} 
        completeMethod={searchCountry}
        field="name" 
        onChange={(e) => setSelectedCountry(e.value)} 
        itemTemplate={itemTemplate}
    />
</AutoComplete>
```

### Subcomponents