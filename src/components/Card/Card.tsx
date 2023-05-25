import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { TextLink } from '../TextLink';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type CardProps = StyleSystemProps & {
  variant?: 'default' | 'panel' | 'storytelling';

  /** Taxonomy text above the title */
  taxonomy?: string;

  /** Card headline */
  headline: string;

  /** Optional image URL for the header */
  image?: string;

  /** Alt text for the image */
  alt?: string;

  /**
   * Card target
   */
  href: string;

  /**
   * Optional number of minutes of read time for the content
   */
  minutes?: number;

  /**
   * Call to action button text
   */
  callToAction?: string;

  withBorder?: boolean;

  linkedHeadline?: boolean;

  /**
   * Additional content within the card
   */
  children?: React.ReactNode;
};

/**
 * A card is a container intended for grouping and organizing related content.
 *
 * ### When to use a Card
 *
 * Use cards when you want to display a snapshot of information intended to
 * encourage users to interact with or click to view more details or actions.
 * According to the Nielsen Norman group, cards have four key properties:
 *
 * - Cards are used for grouping information and content.
 * - Cards present a summary and link to additional details.
 * - Cards resemble physical cards.
 * - Cards allow for a flexible layout.
 *
 * ## Accessibility
 *
 * Determine whether or not your image is decorative or informative.
 * If informative, provide alternative text that conveys its purpose or meaning
 * in the `alt` prop.
 */
export const Card = forwardRef<HTMLAnchorElement, CardProps>(
  (
    {
      variant = 'default',
      className,
      style,
      taxonomy,
      headline,
      image,
      alt,
      href,
      minutes,
      callToAction,
      withBorder = false,
      linkedHeadline = false,
      children,
      ...props
    },
    ref
  ) => (
    <Box
      as="a"
      ref={ref}
      style={{ maxWidth: 420, ...style }}
      className={cx('block group', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Paper bgc={variant === 'panel' ? 'surface-subtle' : undefined} withBorder={withBorder}>
        <div className="bg-primary h-4" />
        <img className="w-full" src={image} alt={alt} />

        <Stack p="lg" gap="xs">
          {taxonomy && (
            <Text className="uppercase" c="primary" fs="sm">
              {taxonomy}
            </Text>
          )}

          {linkedHeadline && (
            <TextLink
              href={href}
              mt="sm"
              fw="bold"
              ff={variant === 'storytelling' ? 'serif' : 'sans'}
              className="text-h3"
            >
              {headline}
            </TextLink>
          )}
          {!linkedHeadline && (
            <Text
              fw="bold"
              ff={variant === 'storytelling' ? 'serif' : 'sans'}
              className={cx({
                'text-h3': true,
                'group-hover:underline': variant === 'storytelling'
              })}
            >
              {headline}
            </Text>
          )}

          <Text className="text-h4">{children}</Text>

          {!linkedHeadline && callToAction && (
            <TextLink href={href} mt="sm">
              {callToAction}
            </TextLink>
          )}

          {minutes && (
            <Group c="neutral-subtle" align="center" gap="xxs">
              <Icon name="clock" />
              {minutes}-minute read
            </Group>
          )}
        </Stack>
      </Paper>
    </Box>
  )
);
