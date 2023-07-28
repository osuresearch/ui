import React from 'react';

import { Box, Divider, IconButton, Link, Paper, Stack, Typography } from '@mui/material';

import { Icon } from '../Icon';

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
 * ADA Coordinator contact information is a required prop.
 *
 * Social links may be omitted for business applications.
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
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="stretch">
        {/* Left side  */}
        <Stack gap={1}>
          {/* Brand */}
          <a href="https://www.osu.edu">
            <Box
              component="img"
              sx={{
                height: 50,
                width: '100%',
                maxWidth: 290,
                objectFit: 'contain',
              }}
              // src={{
              //   // TODO: Embed locally or from another CDN
              //   light: 'https://bux.osu.edu/img/osu-logos/horiz/osu-horiz-gray.svg',
              //   dark: 'https://bux.osu.edu/img/osu-logos/horiz/osu-horiz-white.svg',
              // }}
              src="https://bux.osu.edu/img/osu-logos/horiz/osu-horiz-gray.svg"
              alt="The Ohio State University home page"
            />
          </a>

          {/* Address */}
          <Stack maxWidth={300} fontSize={14}>
            <strong>{props.unit}</strong>
            <span>{props.address1}</span>
            {props.address2 && <span>{props.address2}</span>}
            {props.address3 && <span>{props.address3}</span>}
          </Stack>

          <Divider />

          {/* Contact */}
          <Stack fontSize={14}>
            {contactWebsite && <Link href={contactWebsite}>{contactWebsite}</Link>}
            {contactPhone && <Link href={`tel:${contactPhone}`}>{contactPhone}</Link>}
          </Stack>
        </Stack>

        {/* Right side  */}
        <Stack justifyContent="space-between" alignItems="end" maxWidth={400}>
          {/* Socials */}
          <Stack direction="row" gap="xxs">
            {twitter && (
              <IconButton component="a" href={twitter} aria-label="Twitter">
                <Icon name="twitter" />
              </IconButton>
            )}
            {facebook && (
              <IconButton component="a" href={facebook} aria-label="Facebook">
                <Icon name="facebook" />
              </IconButton>
            )}
            {instagram && (
              <IconButton component="a" href={instagram} aria-label="Instagrame">
                <Icon name="instagram" />
              </IconButton>
            )}
            {youtube && (
              <IconButton component="a" href={youtube} aria-label="YouTube">
                <Icon name="youtube" />
              </IconButton>
            )}
          </Stack>

          {/* ADA Notice */}
          <Typography textAlign="right" fontSize={12} lineHeight={1.5}>
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
          </Typography>

          {/* Links */}
          <Stack alignItems="end" fontSize={12}>
            <Link href="https://go.osu.edu/privacy">Privacy Statement</Link>
            <Link href="https://go.osu.edu/nondiscrimination-notice">
              Non-discrimination Notice
            </Link>

            {/* TODO: Custom links, e.g. Cookie Settings, Login */}
          </Stack>

          {/* Copyright */}
          <Typography fontSize={12}>
            &copy; {new Date().getFullYear()} The Ohio State University
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
