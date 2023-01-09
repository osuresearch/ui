import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';
import { Divider } from '../Divider';
import { Group } from '../Group';
import { IconButton } from '../IconButton';
import { Image } from '../Image';
import { Link } from '../Link';
import { Stack } from '../Stack';
import { Text } from '../Text';

export interface OhioStateFooterProps {
  unit?: string;
  address1?: string;
  address2?: string;
  address3?: string;

  contactWebsite?: string;
  contactPhone?: string;

  /** Digital Accessibility Coordinator contact email */
  accessibilityEmail: string;

  /** Digital Accessibility Coordinator contact phone, if applicable */
  accessibilityPhone?: string;

  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

/**
 * Our footer validates a site as officially from Ohio State and identifies the specific unit
 * managing the site so the user can connect with them appropriately.
 *
 * ## Changes from BUX
 * - Modified the accessibility language to be more generic to support
 * units that refer users to a local accessibility coordinator rather
 * than the Digital Accessibility Center.
 */
export function OhioStateFooter({
  contactPhone = '614-292-OHIO',
  contactWebsite = 'https://www.osu.edu',

  twitter,
  facebook,
  instagram,
  youtube,

  ...props
}: OhioStateFooterProps) {
  return (
    <Box as="footer" bgc="light" p="lg">
      <Group justify="apart" align="stretch" gap="md">
        <Stack justify="apart" gap="md">
          <a href="https://www.osu.edu">
            <Image
              maw={290}
              height={50}
              fit="contain"
              src={{
                // TODO: Embed locally or from another CDN
                light: 'https://bux.osu.edu/img/osu-logos/horiz/osu-horiz-gray.svg',
                dark: 'https://bux.osu.edu/img/osu-logos/horiz/osu-horiz-white.svg'
              }}
              alt="The Ohio State University home page"
            />
          </a>

          <Stack fs="sm" gap={0} maw={300}>
            <Text fw="bold">{props.unit}</Text>
            <Text>{props.address1}</Text>
            {props.address2 && <Text>{props.address2}</Text>}
            {props.address3 && <Text>{props.address3}</Text>}
          </Stack>

          <Divider gap={0} />

          <Stack fs="sm" gap="xs">
            {contactWebsite && <Link href={contactWebsite}>{contactWebsite}</Link>}
            {contactPhone && <Link href={`tel:${contactPhone}`}>{contactPhone}</Link>}
          </Stack>
        </Stack>
        <Stack fs="xs" align="end" justify="apart" maw={400}>
          <Group gap="xxs">
            {twitter && (
              <IconButton as="a" href={twitter} label="Twitter" name="twitter" size={20} p="sm" />
            )}
            {facebook && (
              <IconButton
                as="a"
                href={facebook}
                label="Facebook"
                name="facebook"
                size={20}
                p="sm"
              />
            )}
            {instagram && (
              <IconButton
                as="a"
                href={instagram}
                label="Instagram"
                name="instagram"
                size={20}
                p="sm"
              />
            )}
            {youtube && (
              <IconButton as="a" href={youtube} label="YouTube" name="youtube" size={20} p="sm" />
            )}
          </Group>

          <Text ta="right">
            If you have a disability and experience difficulty accessing this content, please
            contact the digital accessibility coordinator for assistance at{' '}
            <Link href={`mailto:${props.accessibilityEmail}`}>{props.accessibilityEmail}</Link>
            {props.accessibilityPhone && (
              <>
                {' '}
                or{' '}
                <Link href={`mailto:${props.accessibilityPhone}`}>{props.accessibilityPhone}</Link>
              </>
            )}
          </Text>

          <Stack gap={0} align="end">
            <Link href="https://go.osu.edu/privacy">Privacy Statement</Link>
            <Link href="https://go.osu.edu/nondiscrimination-notice">
              Non-discrimination Notice
            </Link>

            {/* TODO: Custom links, e.g. Cookie Settings, Login */}
          </Stack>

          <Text>&copy; {new Date().getFullYear()} The Ohio State University</Text>
        </Stack>
      </Group>
    </Box>
  );
}
