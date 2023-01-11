import React from 'react';

import { useScreenSize } from '~/hooks';

import { Box } from '../Box';
import { ExternalLink } from '../ExternalLink';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

export type OhioStateNavbarVariant = 'light' | 'dark';

export type OhioStateNavbarProps = {
  variant?: OhioStateNavbarVariant;
};

type LinkProps = {
  title: string;
  href: string;
  variant: OhioStateNavbarVariant;

  /** Icon content to display on mobile */
  children: React.ReactNode;
};

function NavbarLink({ title, variant, href, children }: LinkProps) {
  const { breakpoints } = useScreenSize();
  const isMobile = !breakpoints.lg;

  return (
    <Text
      as="a"
      href={href}
      target="_blank"
      fs="sm"
      c={variant === 'light' ? 'black' : 'white'}
      className="hover:rui-underline"
    >
      {!isMobile && title}
      {isMobile && children}
    </Text>
  );
}

function LogoLink({ variant }: { variant: OhioStateNavbarVariant }) {
  const color = variant === 'light' ? 'rui-text-[#666666]' : 'rui-text-white';

  return (
    <a
      href="https://www.osu.edu"
      target="_blank"
      className={`rui-text-[19px] ${color} rui-font-[700]`}
      rel="noreferrer"
    >
      OSU<span className={`rui-text-[19px] ${color} rui-font-[400]`}>.EDU</span>
    </a>
  );
}

/**
 * Brannnd
 *
 *
 * ## Differences from BUX
 * - Not using the new fat banner, doesn't work for web applications. It may be
 * introduced as a variant at a later time.
 * - Improved vertical alignment on text links
 * - Usage of the older style collapsing of text links to icons because it doesn't
 * make sense to have websites display three dots and then a hamburger right under it.
 */
export function OhioStateNavbar({ variant = 'light' }: OhioStateNavbarProps) {
  return (
    <Box
      role="navigation"
      aria-label="Ohio State navigation bar"
      bgc={variant === 'light' ? 'white' : 'black'}
      h={44}
      // TODO: Container max width?
      className="rui-border-scarlet rui-border-b-4"
    >
      <VisuallyHidden>
        <Link href="#content">Skip to main content</Link>
      </VisuallyHidden>

      <Group h={40} justify="apart" px="md" align="center">
        <LogoLink variant={variant} />

        <Group gap="sm">
          <NavbarLink variant={variant} title="BuckeyeLink" href="http://buckeyelink.osu.edu/">
            <Icon name="rui:osu-buckeyelink" />
          </NavbarLink>
          <NavbarLink
            variant={variant}
            title="Find People"
            href="https://www.osu.edu/findpeople.php"
          >
            <Icon name="rui:osu-findpeople" />
          </NavbarLink>
          <NavbarLink variant={variant} title="Webmail" href="https://email.osu.edu/">
            <Icon name="rui:osu-webmail" />
          </NavbarLink>
          <NavbarLink variant={variant} title="Search Ohio State" href="http://osu.edu/search">
            <Icon name="rui:osu-search" />
          </NavbarLink>
        </Group>
      </Group>
    </Box>
  );
}
