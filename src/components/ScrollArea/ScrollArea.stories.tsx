import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Stack } from '../Stack';
import { Text } from '../Text';
import { ScrollArea as Component, ScrollAreaProps } from './ScrollArea';
import { Button } from '../Button';

export default {
  title: 'Layout / ScrollArea',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

const Content = (
  <Stack>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, sem et iaculis
      tincidunt, erat dui rhoncus turpis, id pellentesque augue mi a nisi. Sed vitae risus vel nisl
      finibus varius sed at turpis. Maecenas vulputate eu nisi sit amet blandit. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nec molestie
      metus. Nunc id interdum diam, ut maximus ipsum. Proin vehicula semper risus, nec pulvinar odio
      consectetur at. Curabitur nec quam mauris. Nullam nisi nisi, aliquet nec nibh a, faucibus
      vehicula lacus. Aliquam ullamcorper congue blandit. In pharetra elementum elit id gravida.
      Donec sit amet justo ullamcorper, porttitor quam at, viverra magna.
    </Text>
    <Text>
      Maecenas nec convallis ligula. Aliquam laoreet tellus a lorem dignissim, in euismod diam
      suscipit. Nam ac placerat dolor. Nulla facilisi. Cras semper ipsum ac erat ullamcorper, non
      vulputate tortor mollis. Suspendisse mattis eleifend tincidunt. Sed non tristique nisi,
      pharetra condimentum velit. Morbi consectetur, urna vitae accumsan dictum, orci quam
      consectetur tortor, id dignissim dui odio at nulla. Quisque laoreet metus lectus, vitae
      bibendum magna dapibus eu. Donec vitae magna ac velit efficitur rutrum sollicitudin in arcu.
      Nam semper vehicula scelerisque. Aliquam fringilla, nibh at scelerisque rutrum, elit metus
      placerat tellus, at ultricies sem nisi at ex. Aliquam accumsan accumsan bibendum. Nullam
      gravida felis a sem tempor cursus. Praesent maximus cursus tellus, a sodales ante.
    </Text>
    <Text>
      Donec sit amet congue dolor. Integer ut neque libero. Ut ultrices interdum erat, ac pulvinar
      arcu dictum vel. Nullam vel elit pharetra, sodales felis eget, gravida turpis. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut consequat
      gravida placerat. Sed bibendum in nisi quis posuere. Maecenas vitae eros ipsum. In iaculis at
      mi a dignissim. Fusce et ultrices nulla. Pellentesque risus diam, faucibus id venenatis in,
      sagittis vitae erat. Donec convallis malesuada tellus ut faucibus. In maximus iaculis
      vulputate. Ut ac rhoncus lectus. Donec a volutpat lectus. Mauris semper lacus id elit mattis
      consectetur.
    </Text>
    <Text>
      In aliquet ante a interdum tempor. Ut ultrices tristique mauris sit amet scelerisque. In hac
      habitasse platea dictumst. Ut pretium massa id arcu imperdiet, a ultricies nunc condimentum.
      Proin mattis lobortis quam, et pellentesque sapien porttitor a. Duis semper leo nec maximus
      dictum. Duis consequat sapien vel est rhoncus tincidunt. Maecenas pretium enim at nulla
      ultricies aliquam nec a dui. Suspendisse potenti. In faucibus sem at laoreet auctor. Mauris
      facilisis est lacus, vel malesuada ligula dapibus at. Etiam massa tellus, dictum eget enim
      quis, egestas pretium velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Nunc eu justo eu tortor viverra pharetra a porta nulla. Sed a viverra sem.
    </Text>
    <Text>
      Aliquam erat volutpat. Aenean viverra dui in felis gravida, sit amet efficitur erat ultricies.
      Fusce dignissim semper sem, vel faucibus elit. Duis ut commodo mauris. Morbi felis lectus,
      ullamcorper non eros id, ultricies cursus quam. Morbi ac sapien at sem aliquet tincidunt.
      Aliquam ipsum orci, ullamcorper vitae est ut, ornare elementum nulla. Phasellus eu lacinia
      enim, sit amet egestas sem. Nullam rutrum magna et nibh imperdiet, sit amet lobortis nunc
      porttitor. Aliquam aliquam at leo sit amet vestibulum.
    </Text>
  </Stack>
);

export const Vertical = RUIComponentStory<ScrollAreaProps>(
  (args) => (
    <div>
      <Component {...args}>{Content}</Component>
      other content here
    </div>
  ),
  {
    mah: 500
  }
).withDescription(`
  Use the \`mah\` prop to define a maximum height for the scroll viewport.
`);

export const Horizontal = RUIComponentStory<ScrollAreaProps>(
  (args) => (
    <Component {...args}>
      <div style={{ whiteSpace: 'nowrap' }}>{Content}</div>
    </Component>
  )
);

export const HorizontalAndVertical = RUIComponentStory<ScrollAreaProps>(
  (args) => (
    <Component {...args}>
      <div style={{ minWidth: 800 }}>{Content}</div>
    </Component>
  ),
  {
    mah: 500
  }
);

export const ContentAdaptive = RUIComponentStory<ScrollAreaProps>((args) => {
  const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, sem et iaculis tincidunt, erat dui rhoncus turpis, id pellentesque augue mi a nisi. Sed vitae risus vel nisl finibus varius sed at turpis. Maecenas vulputate eu nisi sit amet blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

  const [content, setContent] = useState<string[]>([lipsum]);

  return (
    <Stack>
    <Component {...args}>
      <Stack>
      {content.map((text, i) => <Text as="p" key={i}>{text}</Text>)}
      </Stack>
    </Component>
    <Button onPress={() => setContent([...content, lipsum])}>
      Add lines
    </Button>
    </Stack>
  );
}, {
  mah: 300
});
