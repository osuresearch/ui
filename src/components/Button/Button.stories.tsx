import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export default RUIComponentMeta<ButtonProps>('Buttons', Button).withStyleSystemProps();

export const Overview = RUIComponentStory<ButtonProps>((args) => <Button {...args}>Button</Button>);

export const Primary = RUIComponentStory(Overview, {
  variant: 'primary'
}).withDescription(`
  Use a primary button to highlight the strongest call to action on a page.
  Primary buttons should only appear once per container and not every
  screen requires a primary button.
`);

export const Subtle = RUIComponentStory(Overview, {
  variant: 'subtle'
}).withDescription(`
  Use subtle buttons along with primary buttons for secondary actions,
  such as "Cancel".
`);

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

export const WithIcon = RUIComponentStory(Overview, {
  variant: 'subtle',
  leftSlot: <Icon name="heart" size={20} c="accent05" />
}).withDescription('Use icons when you want to convey meaning quicker');

// export const WithAccent = RUIComponentStory<ButtonProps>(
//   (args) => (
//     <Group wrap>
//       {[...Array(9)].map(
//         (_, i) => <Paper p="md" key={i} bgc={`accent0${i+1}` as Color} c={`accent0${i+1}-inverse` as Color}>
//           <Button {...args}>Accent {i + 1}</Button>
//         </Paper>
//       )}
//     </Group>
//   ),
//   {
//     variant: 'subtle'
//   }
// ).withDescription(`
//   The \`accented\` button variant can be used against accented backgrounds.

//   You should not use an accented button against the primary color.
// `);
