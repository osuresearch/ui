import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Image, ImageProps } from './Image';

export default RUIComponentMeta<ImageProps>('Components', Image).withStyleSystemProps();

export const Overview = RUIComponentStory<ImageProps>((args) => <Image {...args} />, {
  src: 'https://picsum.photos/640/360',
  width: 640,
  height: 360,
  alt: 'Example image'
});

export const WithCaption = RUIComponentStory<ImageProps>(Overview, {
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
});

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
