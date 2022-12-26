import { Badge, BadgeProps } from '@osuresearch/ui';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<BadgeProps>('Components', Badge)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('beta');

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Beta</Badge>;

export const Overview = RUIComponentStory(Template);

const Colors: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} c="primary">
      primary
    </Badge>
    <Badge {...args} c="secondary">
      secondary
    </Badge>
    <Badge {...args} c="tertiary">
      tertiary
    </Badge>

    <br />

    <Badge {...args} c="light">
      light
    </Badge>
    <Badge {...args} c="dimmed">
      dimmed
    </Badge>
    <Badge {...args} c="dark">
      dark
    </Badge>

    <br />

    <Badge {...args} c="info">
      info
    </Badge>
    <Badge {...args} c="success">
      success
    </Badge>
    <Badge {...args} c="warning">
      warning
    </Badge>
    <Badge {...args} c="error">
      error
    </Badge>
  </>
);

export const Solid = RUIComponentStory(Colors, {
  variant: 'solid'
});

// export const Outline = RUIComponentStory(Colors, {
//   variant: 'outline'
// });

export const WithIndicator = RUIComponentStory(Colors, {
  variant: 'indicator'
});