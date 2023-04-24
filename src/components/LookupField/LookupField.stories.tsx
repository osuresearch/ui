import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Item } from '../Item';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { LookupField, LookupFieldProps, LookupOption } from './LookupField';
import { Code } from '../Code';

export default RUIComponentMeta<LookupFieldProps>('Forms', LookupField).withStyleSystemProps();

// swapi.py4e.com example result
const bobaFett = {
  "name": "Boba Fett",
  "height": "183",
  "mass": "78.2",
  "hair_color": "black",
  "skin_color": "fair",
  "eye_color": "brown",
  "birth_year": "31.5BBY",
  "gender": "male",
  "homeworld": "https://swapi.py4e.com/api/planets/10/",
  "films": [
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/5/"
  ],
  "species": [
    "https://swapi.py4e.com/api/species/1/"
  ],
  "vehicles": [],
  "starships": [
    "https://swapi.py4e.com/api/starships/21/"
  ],
  "created": "2014-12-15T12:49:32.457000Z",
  "edited": "2014-12-20T21:17:50.349000Z",
  "url": "https://swapi.py4e.com/api/people/22/"
}

export const Overview = RUIComponentStory<LookupFieldProps>((args) => (
  <LookupField {...args} getKey={(item) => item.name}
    load={async ({ signal, filterText }) => {
      const res = await fetch(
        `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      const json = await res.json();

      return {
        items: json.results
      };
    }}
  >
    {(item) => (
      <Item key={item.name} textValue={item.name}>
        {item.name}
        <Text as="div" fs="sm" c="dark">
          Hair color: {item.hair_color}, eye color: {item.eye_color}
        </Text>
      </Item>
    )}
  </LookupField>
), {
  label: 'Find a person',
  placeholder: 'Search by name',
  description: 'Something here'
}).withDescription(`

`);

export const UncontrolledValue = RUIComponentStory(Overview, {
  label: 'Find a person',
  placeholder: 'Search by name',
  defaultValue: bobaFett,
});

export const ControlledValue = RUIComponentStory<LookupFieldProps>(
  (args) => {
    const [value, setValue] = useState<LookupOption | undefined>(bobaFett);

    return (
      <>
        <LookupField {...args} getKey={(item) => item.name}
          load={async ({ signal, filterText }) => {
            const res = await fetch(
              `https://swapi.py4e.com/api/people/?search=${filterText}`,
              { signal }
            );
            const json = await res.json();

            return {
              items: json.results
            };
          }}
          value={value}
          onChange={setValue}
        >
          {(item) => (
            <Item key={item.name} textValue={item.name}>
              {item.name}
              <Text as="div" fs="sm" c="dark">
                Hair color: {item.hair_color}, eye color: {item.eye_color}
              </Text>
            </Item>
          )}
        </LookupField>
        <Text>
          Selected item
          <Code block>
            {JSON.stringify(value, undefined, 2)}
          </Code>
        </Text>
      </>
    );
  },
  {
    label: 'Email'
  }
);

