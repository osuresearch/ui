import React, { forwardRef } from 'react';
import { cx } from '../../styles';
import { DefaultProps } from '../../types';
import { Box } from '../Box';
import { Button } from '../Button';
import { CallToAction } from '../CallToAction';
import { Icon } from '../Icon';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type CardProps = DefaultProps & {
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
 * ### Accessibility
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
      component="a"
      ref={ref}
      className={cx('block group max-w-[420px]', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Paper variant={variant === 'panel' ? 'panel' : 'default'} withBorder={withBorder}>
        {/* <a href="http://example.com" target="_blank" rel="noopener noreferrer" class="bux-card__link" aria-hidden="true" tabindex="-1"></a> */}
        {/* Bux overlays an anchor to the target, hidden from sr's. But it also supports CTA clicks / header clicks
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1; */}

        <div className="bg-scarlet h-4" />
        <img className="w-full" src={image} alt={alt} />

        <Stack p="xl">
          {taxonomy && (
            <Text className="uppercase" c="scarlet" fs="sm">
              {taxonomy}
            </Text>
          )}

          {linkedHeadline && (
            <CallToAction
              component="a"
              href={href}
              mt="md"
              className={cx({
                'font-bold': true,
                'text-h3': true,
                'font-serif': variant === 'storytelling'
              })}
            >
              {headline}
            </CallToAction>
          )}
          {!linkedHeadline && (
            <Text
              bold
              className={cx({
                'text-h3': true,
                'font-serif': variant === 'storytelling',
                'group-hover:underline': variant === 'storytelling'
              })}
            >
              {headline}
            </Text>
          )}

          <Text className="text-h4">{children}</Text>

          {!linkedHeadline && callToAction && (
            <CallToAction component="a" href={href} mt="md">
              {callToAction}
            </CallToAction>
          )}

          {minutes && (
            <Text c="dimmed">
              <Icon name="clock" /> {minutes}-minute read
            </Text>
          )}
        </Stack>
      </Paper>
    </Box>
  )
);
