import React, { forwardRef } from 'react';

import { cx } from '../../theme/utils';
import { ColorProp, ThemeSize } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Text } from '../Text/Text';

export type AvatarProps = {
  /**
   * Users name, starting with their preferred first name.
   */
  name: string;

  /** User's name.# */
  username: string;

  /** Avatar width and height in pixels */
  size: number;

  /** Color used for letter and icon placeholders */
  c?: ColorProp;

  /** Image url. If not supplied, opic.osu.edu will be used */
  src?: string;

  /** Image alt text. Will default to `name` if not supplied */
  alt?: string;

  /** Custom placeholder */
  children?: React.ReactNode;
};

/**
 * Fallback (pixel.gif) for when someone does not have an OPIC.
 */
const FALLBACK_URL = 'https://orapps.osu.edu/assets/img/pixel.gif';

/**
 * Colors assigned to initials when someone does not have an OPIC or we disable OPIC
 */
const THEME_COLORS = ['#586a81', '#bb0000', '#6a6f24', '#846622', '#427067', '#442369', '#851e5e'];

/**
 * Avatar documentation
 */
export const _Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ name, username, src, size, alt, children }, ref) => {
    const index = (name.charCodeAt(0) - 65) % THEME_COLORS.length;

    if (!src) {
      src = `https://opic.osu.edu/${username}?width=${size}&default=${FALLBACK_URL}`;
    }

    if (!alt) {
      alt = name;
    }

    return (
      <div
        aria-hidden="true"
        className={cx({
          'rui-relative': true,
          'rui-rounded-full': true,
          'rui-overflow-hidden': true
        })}
        style={{
          backgroundColor: THEME_COLORS[index],
          width: size,
          height: size
        }}
      >
        <img alt={alt} src={src} />
        {/* <div
        className={cx({
          'absolute': true,
          'top-1': true,
          'left-1': true,
        })}
      >CM</div> */}

        <div
          className={cx({
            'rui-absolute': true,
            'rui-w-full': true,
            'rui-text-center': true
          })}
          style={{
            fontSize: size / 2.25 + 'px',
            lineHeight: size + 'px'
          }}
        >
          {name[0].toUpperCase()}
          {username[0].toUpperCase()}
        </div>
      </div>
    );
  }
);

/**
 * Avatar things
 */
export const Avatar = createPolymorphicComponent<'div', AvatarProps>(_Avatar);
