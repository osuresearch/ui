import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { LazyLoaded, LazyLoadedProps } from './LazyLoaded';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Button } from '../Button';

export default {
  title: 'Layout / LazyLoaded',
  ...RUIComponentMeta(LazyLoaded)
};

export const Overview = RUIComponentStory<LazyLoadedProps>((args) => {
  const [loading, setLoading] = useState(true);

  return (
    <Stack>
      <LazyLoaded {...args} loading={loading} placeholder={
        <Text>Loading content...</Text>
      }>
        <Text>Content!</Text>
      </LazyLoaded>
      <Button onPress={() => setLoading(!loading)}>
        Toggle loading state
      </Button>
    </Stack>
  )
}, {

});
