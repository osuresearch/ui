import React from 'react';
import { ExternalLink } from '../../atoms/ExternalLink';

export interface Props {
    department?: string;
    website?: string;
    address?: string;
    contact?: string;
    accessibilityContact?: string;
}

/**
 * Office of Research brand footer with help and support information
 */
export const Footer = ({
    department = 'Office of Research',
    website = 'https://research.osu.edu',
    address = '1960 Kenny Road | Columbus, OH 43210',
    contact = 'https://research.osu.edu/contact',
    accessibilityContact = 'oraccessibility@osu.edu'
}: Props) => (
    <footer className="footer">
        <div className="footer__left">
            <a href="http://www.osu.edu/" className="footer__logo">
                <img src="https://orapps.osu.edu/assets/img/TheOhioStateUniversity-Horiz-RGBHEX.png"
                    alt="The Ohio State University"
                    title="The Ohio State University home page"
                />
            </a>
            <div className="footer__unit">
                {department}
            </div>
            <div className="footer__address">
                208 Bricker Hall
            </div>
            <div className="footer__address">
                190 North Oval Mall
            </div>
            <div className="footer__address">
                Columbus, OH 43210
            </div>
        </div>
        <div className="footer__right">
            <div className="footer__accessibility">
                If you have a disability and experience difficulty accessing this content,
                please contact the Digital Accessibility Center for assistance
                at <a href={'mailto:' + accessibilityContact}>{accessibilityContact}</a>.
            </div>
            <div className="footer__links">
                <ExternalLink href="https://go.osu.edu/privacy">Privacy Statement</ExternalLink>
                <ExternalLink href="https://go.osu.edu/nondiscrimination-notice">Non-discrimination Notice</ExternalLink>
                {/* <ExternalLink href="#">Login</ExternalLink> */}
            </div>
            <div className="footer__copyright">
                &copy; {(new Date()).getFullYear()} The Ohio State University
            </div>
        </div>
    </footer>
);

