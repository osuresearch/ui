import React from 'react';

import { Box, BoxProps, Link, LinkBaseProps, Stack, Typography, styled } from '@mui/material';

import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

export type OhioStateNavbarVariant = 'light' | 'dark';

export interface OhioStateNavbarProps {
  variant?: OhioStateNavbarVariant;
}

interface NavbarLinkProps {
  title: string;
  href: string;
  variant: OhioStateNavbarVariant;

  /** Icon content to display on mobile */
  children: React.ReactNode;
}

type LinkProps = LinkBaseProps & {
  variant: OhioStateNavbarVariant;
};

interface RootProps extends BoxProps {
  variant?: OhioStateNavbarVariant;
}

const Root = styled(Box)<RootProps>(({ variant, theme }) => ({
  height: 44,
  background: variant === 'light' ? '#fff' : '#141517',
  borderBottom: `4px solid ${theme.palette.primary.main}`,
}));

const LogoLink = styled(Link)<LinkProps>(({ variant, theme }) => ({
  'color': variant === 'light' ? '#666' : '#fff',
  'fontWeight': 700,
  'fontSize': 19,
  'textDecoration': 'none',
  'whiteSpace': 'nowrap',
  '&:hover': {
    background: 'none',
    color: variant === 'light' ? '#666' : '#fff',
  },
}));

const NavLink = styled(Link)<LinkProps>(({ variant, theme }) => ({
  'color': variant === 'light' ? '#141517' : '#fff',
  'fontWeight': 300,
  'fontSize': 14,
  'textDecoration': 'none',
  '&:hover': {
    color: variant === 'light' ? '#141517' : '#fff',
    background: 'none',
    textDecoration: 'underline',
  },
}));

function NavbarLink({ title, variant, href, children }: NavbarLinkProps) {
  // const { breakpoints } = useScreenSize();
  const isMobile = false; //  !breakpoints.lg;

  return (
    <NavLink href={href} target="_blank" variant={variant}>
      {!isMobile && title}
      {isMobile && children}
    </NavLink>
  );
}

/**
 * Identity banner for Ohio State applications
 */
export function OhioStateNavbar({ variant = 'light' }: OhioStateNavbarProps) {
  return (
    <Root variant={variant} role="navigation" aria-label="Ohio State navigation bar">
      <VisuallyHidden>
        <Link href="#content">Skip to main content</Link>
      </VisuallyHidden>

      <Stack
        direction="row"
        px={2}
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <LogoLink href="https://www.osu.edu" target="_blank" rel="noreferrer" variant={variant}>
          OSU
          <Typography component="span" fontSize={19} fontWeight={400}>
            .EDU
          </Typography>
        </LogoLink>

        <Stack direction="row" gap={2}>
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
        </Stack>
      </Stack>
    </Root>
  );
}
