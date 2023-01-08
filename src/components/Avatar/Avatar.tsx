import React from 'react';

import { Color, StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { Image } from '../Image';
import { Text } from '../Text';

export type AvatarProps = StyleSystemProps & {
  /** Avatar width and height in pixels */
  size?: number;

  /**
   * Image source URL
   */
  src?: string;

  /**
   * Attempt to use OPIC to resolve the avatar.
   *
   * Only enable if the avatar is for someone at Ohio State.
   * Provide the user's name.# to retrieve their OPIC.
   */
  opicUsername?: string;

  /**
   * Image alt text
   */
  alt: string;

  /**
   * Users preferred name, starting with their first name.
   */
  name?: string;

  /**
   * Fallback text to display when the image cannot be loaded.
   *
   * If omitted, this will attempt to fallback to using the user's initials
   * as determined by combining the `name` and `opicUsername` props.
   */
  label?: string;

  /**
   * Pool of available background colors to pick from.
   *
   * The chosen color will be based on the `name` prop.
   */
  colors?: Color[];
};

/**
 * Fallback (pixel.gif) for when someone does not have an OPIC.
 */
const FALLBACK_URL = 'https://orapps.osu.edu/assets/img/pixel.gif';

const DEFAULT_COLORS: Color[] = [
  'blue',
  'orange',
  'green',
  'pink',
  'violet',
  'aqua',
  'teal',
  'gold'
];

/**
 * Avatar / profile picture automatically integrated with https://opic.osu.edu.
 *
 * ## Accessibility
 * - Image alt text is a required property. For purely cosmetic images, use `alt=""`.
 *
 * <!-- @ruiPolymorphic -->
 */
export const Avatar = polymorphicForwardRef<'div', AvatarProps>(
  (
    {
      as,
      className,
      label,
      name,
      colors = DEFAULT_COLORS,
      opicUsername,
      src,
      size = 38,
      alt,
      children,
      ...props
    },
    ref
  ) => {
    const index = ((name || 'a').charCodeAt(0) - 65) % colors.length;

    if (!src && opicUsername) {
      src = `https://opic.osu.edu/${opicUsername}?width=${size}&default=${FALLBACK_URL}`;
    }

    // Fallback label to initials
    if (!label && name) {
      label = name[0].toUpperCase();

      if (opicUsername) {
        label += opicUsername[0].toUpperCase();
      }
    }

    return (
      <Box
        as={as || 'div'}
        className={cx('rui-block', 'rui-relative', className)}
        style={{
          width: size,
          height: size
        }}
        {...props}
      >
        <Box
          bgc={colors[index]}
          className={cx(
            'rui-absolute',
            'rui-top-0',
            'rui-rounded-full',
            'rui-overflow-hidden',
            'rui-text-center',

            'rui-outline',
            'rui-outline-2',
            '-rui-outline-offset-1',
            'rui-outline-light-tint'
          )}
          style={{
            fontSize: size / 2.75 + 'px',
            lineHeight: size + 'px',
            width: size + 'px',
            height: size + 'px'
          }}
        >
          <Text
            fw="bold"
            c={(colors[index] + '-contrast') as Color}
            // style={{
            //   filter: 'brightness(30%)'
            // }}
          >
            {label}
          </Text>
        </Box>
        <Image
          width={size}
          height={size}
          className={cx(
            'rui-rounded-full rui-overflow-hidden',

            'rui-outline',
            'rui-outline-2',
            '-rui-outline-offset-1',
            'rui-outline-light-tint'
          )}
          src={src}
          alt={alt}
        />
      </Box>
    );
  }
);
