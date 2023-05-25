import React, { forwardRef, useEffect, useState } from 'react';
import { mergeProps } from 'react-aria';

import { useTheme } from '../../hooks';
import { StyleSystemProps, ThemeProp } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Text } from '../Text';

export type ImageProps = StyleSystemProps & {
  /** Image source */
  src?: ThemeProp<string>;

  /**
   * Image alt text, used as title for placeholder if image was not loaded.
   *
   * If the image is only for decoration, use `alt=""`
   */
  alt: string;

  /** Image width */
  width?: number | string;

  /** Image height */
  height?: number | string;

  /** Image object-fit property */
  fit?: React.CSSProperties['objectFit'];

  /** Image caption */
  caption?: React.ReactNode;

  /** [Image element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) to spread into the `img` element */
  imageProps?: React.ComponentPropsWithoutRef<'img'>;

  /**
   * Content to render while the image is loading or has failed to load.
   */
  placeholder?: React.ReactNode;
};

/**
 * Image documentation
 *
 * Image supports the full list of
 *
 * ## Accessibility
 * - The `alt` property is required to enforce screen reader support, unless a developer explicitly declares an image as cosmetic via `alt=""`.
 * - Images are wrapped with `figure` and contain a `figcaption` when `caption` is provided.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      style,
      className,
      width = '100%',
      height = 'auto',
      fit = 'cover',
      src,
      alt,
      caption,
      imageProps = {},
      placeholder,
      ...props
    },
    ref
  ) => {
    const { resolve } = useTheme();
    const imgSrc = resolve(src);

    const [error, setError] = useState(!imgSrc);

    useEffect(() => {
      setError(false);
    }, [imgSrc]);

    return (
      <Box
        as={caption ? 'figure' : 'div'}
        {...props}
        className={cx('relative', className)}
        style={{ width, height, ...style }}
      >
        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          {...mergeProps(imageProps, {
            style: {
              objectFit: fit,
              width,
              height,
              display: error ? 'none' : undefined
            }
          })}
          onError={() => setError(true)}
        />

        {error && <>{placeholder ?? <Text>{alt}</Text>}</>}

        {caption && (
          <Text ta="center" as="figcaption" fs="sm" c="neutral-subtle">
            {caption}
          </Text>
        )}
      </Box>
    );
  }
);
