import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';
import { Text } from '../Text';


import { PaginationButton, PaginationButtonProps } from './PaginationButton';

export default RUIComponentMeta<PaginationButtonProps>('Buttons', PaginationButton).withStyleSystemProps();

export const Overview = RUIComponentStory<PaginationButtonProps>((args) => (
  <PaginationButton {...args} />
));

// export const WithParams = RUIComponentStory<PaginationButtonProps>((args) => (
//   <PaginationButton {...args} value={7} totalPages={105} />
// ));

// export const WithParamsExample = RUIComponentStory<PaginationButtonProps>((args) => (
//   <PaginationButton {...args} value={1} totalPages={10} />
// ));

export const ControlledValue = RUIComponentStory<PaginationButtonProps>(
  (args) => {
    const [value, setValue] = useState<number>(8);

    return (
      <>
        <PaginationButton value={value} onChange={setValue} {...args} />
        <Text>{`Current page is: ${value}`}</Text>
      </>
    );
  }
);