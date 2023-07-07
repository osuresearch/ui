import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
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
};

/**
 * Fallback (pixel.gif) for when someone does not have an OPIC.
 */
const FALLBACK_URL = 'https://orapps.osu.edu/assets/img/pixel.gif';

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
      opicUsername,
      src,
      size = 38,
      alt,
      ...props
    },
    ref
  ) => {
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
        ref={ref}
        as={as || 'div'}
        className={cx('not-prose block', 'relative', className)}
        title={alt}
        style={{
          width: size,
          height: size
        }}
        {...props}
      >
        <Box
          bgc="surface-subtle"
          className={cx(
            'absolute',
            'top-0',
            'rounded-full',
            'overflow-hidden',
            'text-center',
          )}
          style={{
            fontSize: size / 2.75 + 'px',
            lineHeight: size + 'px',
            width: size + 'px',
            height: size + 'px'
          }}
        >
          <Text fw="bold" c="neutral">
            {label}
          </Text>
        </Box>
        {src && (
          <Image
            width={size}
            height={size}
            className={cx(
              'rounded-full overflow-hidden',
            )}
            src={src}
            alt=""
          />
        )}
      </Box>
    );
  }
);
