import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';
import { Text } from '../Text';
import { Lookup, LookupProps } from './Lookup';
import { Item } from '../Item';
import { useAsyncList } from 'react-stately';

export default RUIComponentMeta<LookupProps>('Internal', Lookup);

export const Overview = RUIComponentStory<LookupProps>((args) => {
  const list = useAsyncList<any>({
    getKey: (item) => item.name,
    load: async ({ signal, filterText }) => {
      const res = await fetch(
        `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      const json = await res.json();

      return {
        items: json.results
      };
    }
  });

  return (
    <Lookup {...args} list={list}>
      {(item) => (
        <Item key={item.name} textValue={item.name}>
          {item.name}
          <Text as="div" fs="sm" c="dark">
            Hair color: {item.hair_color}, eye color: {item.eye_color}
          </Text>
        </Item>
      )}
    </Lookup>
  );
}, {
  label: 'Search',
  placeholder: 'Search by name or email',
  onSelectionChange: (item) => alert(JSON.stringify(item)),
}).withDescription(`
  Lookup uses an React Stately's [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html)
  under the hood to manage options.

  You can provide async callbacks for loading, pagination, sorting, and filtering.

  The default list items only render selection styles, allowing full customization
  for the display of each result.
`);
