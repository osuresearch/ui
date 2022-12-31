import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { LinkButton } from '../LinkButton';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Title } from '../Title';

export type CardProps = StyleSystemProps & {
  variant: 'default' | 'panel' | 'storytelling';

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
      className={cx('rui-block rui-group', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Paper variant={variant === 'panel' ? 'panel' : 'default'} withBorder={withBorder}>
        <div className="rui-bg-primary rui-h-4" />
        <img className="rui-w-full" src={image} alt={alt} />

        <Stack p="lg" gap="xs">
          {taxonomy && (
            <Text className="rui-uppercase" c="primary" fs="sm">
              {taxonomy}
            </Text>
          )}

          {linkedHeadline && (
            <LinkButton
              as="a"
              href={href}
              mt="sm"
              fw="bold"
              ff={variant === 'storytelling' ? 'serif' : 'sans'}
              className="rui-text-h3"
            >
              {headline}
            </LinkButton>
          )}
          {!linkedHeadline && (
            <Text
              fw="bold"
              ff={variant === 'storytelling' ? 'serif' : 'sans'}
              className={cx({
                'rui-text-h3': true,
                'group-hover:rui-underline': variant === 'storytelling'
              })}
            >
              {headline}
            </Text>
          )}

          <Text className="rui-text-h4">{children}</Text>

          {!linkedHeadline && callToAction && (
            <LinkButton as="a" href={href} mt="sm">
              {callToAction}
            </LinkButton>
          )}

          {minutes && (
            <Group c="dark" align="center" gap="xxs">
              <Icon name="clock" />
              {minutes}-minute read
            </Group>
          )}
        </Stack>
      </Paper>
    </Box>
  )
);
