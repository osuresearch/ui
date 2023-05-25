import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React from 'react';

import { UnstyledButton } from '../UnstyledButton';
import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Chip, ChipProps } from './Chip';

export default RUIComponentMeta<ChipProps>('Components', Chip).withStyleSystemProps();

const Template: Story<ChipProps> = (args) => <Chip {...args}>Beta</Chip>;

export const Overview = RUIComponentStory(Template);

const Colors: Story<ChipProps> = (args) => (
  <Stack>
    <Text as="div">Accents</Text>
    <Group gap="xxs" wrap>
      <Chip {...args} c="accent01">
      accent01
      </Chip>
      <Chip {...args} c="accent02">
      accent02
      </Chip>
      <Chip {...args} c="accent03">
        accent03
      </Chip>
      <Chip {...args} c="accent04">
        accent04
      </Chip>
      <Chip {...args} c="accent05">
        accent05
      </Chip>
      <Chip {...args} c="accent06">
        accent06
      </Chip>
      <Chip {...args} c="accent07">
        accent07
      </Chip>
      <Chip {...args} c="accent08">
        accent08
      </Chip>
      <Chip {...args} c="accent09">
        accent09
      </Chip>
    </Group>
    <Text as="div">Utilities</Text>
    <Group gap="xxs" wrap>
      <Chip {...args} c="primary">
        primary
      </Chip>
      <Chip {...args} c="secondary">
        secondary
      </Chip>
      <Chip {...args} c="tertiary">
        tertiary
      </Chip>

      <Chip {...args} c="info">
        info
      </Chip>
      <Chip {...args} c="success">
        success
      </Chip>
      <Chip {...args} c="caution">
        caution
      </Chip>
      <Chip {...args} c="critical">
        critical
      </Chip>
    </Group>
  </Stack>
);

export const Solid = RUIComponentStory(Colors, {
  variant: 'solid'
});

export const Outline = RUIComponentStory(Colors, {
  variant: 'outline'
});

export const WithIndicator = RUIComponentStory(Colors, {
  variant: 'indicator'
});

export const WithAvatar = RUIComponentStory<ChipProps>((args) => (
  <Chip as="a" href="https://github.com/McManning" target="_blank" {...args}>
    <Avatar
      alt="Avatar for Chase McManning"
      name="Chase McManning"
      opicUsername="mcmanning.1"
      my="xxs"
      size={24}
    />
    Chase McManning
  </Chip>
));

export const Clickable = RUIComponentStory<ChipProps>((args) => (
  <Chip as={UnstyledButton} {...args} variant="solid" onPress={() => alert('pressed')}>
    Clickable chip
  </Chip>
));

export const Removable = RUIComponentStory<ChipProps>(
  (args) => (
    <Chip variant="solid" {...args}>
      Removable chip
    </Chip>
  ),
  {
    isRemovable: true
  }
);

export const ClickableAndRemovable = RUIComponentStory<ChipProps>(
  (args) => (
    <Chip as={UnstyledButton} onPress={() => alert('pressed')} variant="solid" {...args}>
      Click me or remove me
    </Chip>
  ),
  {
    isRemovable: true
  }
);

export const Polymorphic = RUIComponentStory<ChipProps>((args) => (
  <Chip as="a" href="https://research.osu.edu" target="_blank" {...args}>
    research.osu.edu
  </Chip>
));
