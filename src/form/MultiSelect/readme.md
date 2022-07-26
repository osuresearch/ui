### Getting Started

MultiSelect is used as a controlled component with `value` and `onChange` properties along with the options collection. There are two alternatives of how to define the options property; One way is providing a collection of `SelectItem` instances having label-value pairs whereas other way is providing an array of arbitrary objects along with the `optionLabel` and `optionValue` properties to specify the label/value field pair. In addition, options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.

#### Options as SelectItems

```jsx static
const citySelectItems = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
];


<MultiSelect.Input 
    value={cities} 
    options={citySelectItems} 
    onChange={(e) => setCities(e.value)} 
/>
```

#### Options as any type

```jsx static
const cityList = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

<MultiSelect.Input 
    optionLabel="name" 
    value={cities}
    options={cityList}
    onChange={(e) => setCities(e.value)}
/>

<MultiSelect.Input 
    optionLabel="name" 
    optionValue="code" 
    value={cities} 
    options={cityList} 
    onChange={(e) => setCities(e.value)} 
/>
```

When `optionValue` is not defined, value of an option refers to the option object itself.

### Examples

```jsx
import React, { useState } from 'react';

const [selectedCities, setSelectedCities] = useState();

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

<MultiSelect id="select-multiple-cities">
    <MultiSelect.Label>Select Cities</MultiSelect.Label>

    <MultiSelect.Input
        value={selectedCities}
        options={cities}
        onChange={(e) => setSelectedCities(e.value)}
        optionLabel="name"
    />

    <MultiSelect.Help>
        Select one or more cities
    </MultiSelect.Help>
</MultiSelect>
```

#### Chips
```jsx
import React, { useState } from 'react';

const [selectedCities, setSelectedCities] = useState();

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

<MultiSelect id="select-multiple-cities-chips">
    <MultiSelect.Label>Select Cities</MultiSelect.Label>

    <MultiSelect.Input
        value={selectedCities}
        options={cities}
        onChange={(e) => setSelectedCities(e.value)}
        optionLabel="name"
        display="chip"
    />

    <MultiSelect.Help>
        Select one or more cities
    </MultiSelect.Help>
</MultiSelect>
```

#### Advanced with Templating and Filtering

Label of an option is used as the display text of an item by default, for custom content support define an `itemTemplate` function that gets the option as a parameter and returns the content.

In addition `selectedItemTemplate` can be used to customize the selected values display instead of the default comma separated list.

Options can be filtered using an input field in the overlay by enabling the `filter` property. By default filtering is done against label of the items and `filterBy` property is available to choose one or more properties of the options. In addition `filterMatchMode` can be utilized to define the filtering algorithm, valid options are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".

```jsx
import React, { useState } from 'react';
import { Icon } from '@ORIS/ui';

const [selectedCountries, setSelectedCountries] = useState();

const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
];

const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <Icon name='taxi' /> {option.name}
            </div>
        );
    }

const selectedCountriesTemplate = (option) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <Icon name='taxi' /> {option.name}
                </div>
            );
        }

        return "Select Countries";
    }

<MultiSelect id="select-multiple-countries">
    <MultiSelect.Label>Select Countries</MultiSelect.Label>

    <MultiSelect.Input
        value={selectedCountries}
        options={countries}
        onChange={(e) => setSelectedCountries(e.value)}
        optionLabel="name"
        filter
        itemTemplate={countryTemplate}
        selectedItemTemplate={selectedCountriesTemplate}

    />
</MultiSelect>
```

#### Read only
```jsx
import React, { useState } from 'react';

const [selectedCities, setSelectedCities] = useState([{ name: 'Istanbul', code: 'IST' }, { name: 'Paris', code: 'PRS' }]);

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

<MultiSelect 
    id="select-multiple-cities-readonly"
    readOnly={true}
>
    <MultiSelect.Label>Select Cities</MultiSelect.Label>

    <MultiSelect.Input
        value={selectedCities}
        options={cities}
        onChange={(e) => setSelectedCities(e.value)}
        optionLabel="name"
    />

    <MultiSelect.Help>
        Select one or more cities
    </MultiSelect.Help>
</MultiSelect>
```