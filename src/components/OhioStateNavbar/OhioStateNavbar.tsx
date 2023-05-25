import React from 'react';

import { useScreenSize } from '../../hooks';
import { Box } from '../Box';
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
      className="hover:underline"
    >
      {!isMobile && title}
      {isMobile && children}
    </Text>
  );
}

function LogoLink({ variant }: { variant: OhioStateNavbarVariant }) {
  const color = variant === 'light' ? 'text-[#666666]' : 'text-white';

  return (
    <a
      href="https://www.osu.edu"
      target="_blank"
      className={`text-[19px] ${color} font-[700]`}
      rel="noreferrer"
    >
      OSU<span className={`text-[19px] ${color} font-[400]`}>.EDU</span>
    </a>
  );
}

/**
 * Identity banner for Ohio State applications
 *
 * <img class="diagram" src="./OhioStateNavbar.svg" alt="Component diagram" />
 */
export function OhioStateNavbar({ variant = 'light' }: OhioStateNavbarProps) {
  return (
    <Box
      role="navigation"
      aria-label="Ohio State navigation bar"
      bgc={variant === 'light' ? 'white' : 'black'}
      h={44}
      // TODO: Container max width?
      className="border-[var(--osu-scarlet)] border-b-4"
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
