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
        dropdown
        field="name" 
        onChange={(e) => setSelectedCountry(e.value)} 
    />
</AutoComplete>
```

#### Multiple
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
        multiple
        field="name" 
        onChange={(e) => setSelectedCountry(e.value)} 
    />
</AutoComplete>
```