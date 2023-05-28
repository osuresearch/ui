import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Text } from '../Text';
import { PaginationButtons, PaginationButtonsProps } from './PaginationButtons';

export default {
  title: 'Buttons / PaginationButtons',
  ...RUIComponentMeta(PaginationButtons).withStyleSystemProps()
};

export const Overview = RUIComponentStory<PaginationButtonsProps>((args) => {
  const [value, setValue] = useState<number>(1);

  return (
    <>
      <PaginationButtons {...args} value={value} totalPages={9} onChange={setValue} />
      <Text>{`Current page: ${value}`}</Text>
    </>
  );
});

export const WithMorePages = RUIComponentStory<PaginationButtonsProps>(
  (args) => {
    const [value, setValue] = useState<number>(1);

    return (
      <>
        <PaginationButtons {...args} value={value} totalPages={20} onChange={setValue} />
        <Text>{`Current page: ${value}`}</Text>
      </>
    );
  }
);

export const WithUnknownTotalPages = RUIComponentStory<PaginationButtonsProps>(
  (args) => {
    const [value, setValue] = useState<number>(1);

    return (
      <>
        <PaginationButtons {...args} value={value} onChange={setValue} />
        <Text>{`Current page: ${value}`}</Text>
      </>
    );
  }
);
