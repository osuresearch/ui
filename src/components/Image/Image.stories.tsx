import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Box } from '../Box';
import { Center } from '../Center';
import { Icon } from '../Icon';
import { Image, ImageProps } from './Image';

export default {
  title: 'Components / Image',
  ...RUIComponentMeta(Image).withStyleSystemProps()
};

export const Overview = RUIComponentStory<ImageProps>((args) => <Image {...args} />, {
  src: 'https://picsum.photos/640/360',
  width: 640,
  height: 360,
  alt: 'Example image'
});

export const AsCaptionedFigure = RUIComponentStory<ImageProps>(Overview, {
  src: 'https://picsum.photos/360/360',
  width: 360,
  height: 360,
  alt: 'Example captioned image',
  caption: 'Caption for the above image'
});

export const WithError = RUIComponentStory<ImageProps>(Overview, {
  src: 'https://invalid.url',
  width: 360,
  height: 360,
  alt: 'Example image that failed to load'
}).withDescription(`
  The \`alt\` text will be displayed when the image fails to load.
`);

export const WithErrorPlaceholder = RUIComponentStory<ImageProps>(Overview, {
  src: 'https://invalid.url',
  width: 360,
  height: 360,
  alt: 'Example image that failed to load',
  placeholder: (
    <Box bgc="surface-subtle" h={360}>
      <Center>
        <Icon block c="neutral-subtle" name="image" size={200} />
      </Center>
    </Box>
  )
}).withDescription(`
You can use the \`placeholder\` prop to define replacement content when
an image fails to load. This will be rendered in place of the \`alt\` text.
`);

export const WithFitContain = RUIComponentStory<ImageProps>(Overview, {
  src: 'https://picsum.photos/1024/360',
  width: 360,
  height: 360,
  alt: 'Example superwide image',
  fit: 'contain'
}).withDescription(`
Some parts of an image will be cut out if proportions do not match the
given width and height. If you want to fit the image into the container with original
proportions, set \`fit="contain"\`.
`);
