import React from 'react';

import { Box } from '../Box';
import { VisuallyHidden } from '../VisuallyHidden';
import { Link } from '../Link';
import { Group } from '../Group';
import { ExternalLink } from '../ExternalLink';
import { Text } from '../Text';
import { useScreenSize } from '~/hooks';

export type OhioStateNavbarProps = {
  variant?: 'light' | 'dark';
};

type LinkProps = {
  href: string 
  children: React.ReactNode
}

function NavbarLink({ href, children }: LinkProps) {
  return (
    <Text as="a" href={href} target="_blank" fs="sm" className="hover:rui-underline">
      {children}
    </Text>
  )
}

function LogoLink({ href, children }: LinkProps) {
  return (
    <Text as="a" href={href} target="_blank" fw="bold" style={{ color: '#666', fontWeight: 700, fontSize: 19 }}>
      {children}
    </Text>
  )
}

/**
 * Brannnd
 * 
 * 
 * ## Differences from BUX
 * - Not using their convoluted CSS. Just matching dimension guidelines specified below.
 * - Improved vertical alignment on text links
 * - Usage of the older style collapsing of text links to icons because it doesn't
 * make sense to have websites display three dots and then a hamburger right under it.
 */
export function OhioStateNavbar({ variant = 'light' }: OhioStateNavbarProps) {
  const { breakpoints }= useScreenSize();
  const isMobile = !breakpoints.lg;

  return (
    <Box 
      role="navigation" 
      aria-label="Ohio State navigation bar" 
      bgc="white"
      h={44}
      // TODO: Container max width? 
      className="rui-border-scarlet rui-border-b-4"
    >
      <VisuallyHidden>
        <Link href="#content">Skip to main content</Link>
      </VisuallyHidden>

      <Group h={40} justify="apart" px="md" align="center">
        <LogoLink href="https://www.osu.edu">OSU.EDU</LogoLink>
      
        {!isMobile &&
        <Group gap="sm">
          <NavbarLink href="http://buckeyelink.osu.edu/">BuckeyeLink</NavbarLink>
          <NavbarLink href="https://www.osu.edu/findpeople.php">Find People</NavbarLink>
          <NavbarLink href="https://email.osu.edu/">Webmail</NavbarLink>
          <NavbarLink href="http://osu.edu/search">Search Ohio State</NavbarLink>
        </Group>
        }

        {isMobile &&
        <Group gap="md">

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-label="BuckeyeLink" className="osu-navbar__global-nav_icon">
            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"></path>
          </svg>

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-label="Map" className="osu-navbar__global-nav_icon">
            <path d="M22 12c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm-22 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm11.657 6l4.949-10.607-10.606 4.95 4.242 1.414 1.415 4.243z"></path>
          </svg> */}

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-label="Find People" className="osu-navbar__global-nav_icon">
            <path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-label="Webmail" className="osu-navbar__global-nav_icon">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-label="Search" className="osu-navbar__global-nav_icon">
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"></path>
          </svg>
        </Group>
        }
      </Group>
    </Box>
  );
}
