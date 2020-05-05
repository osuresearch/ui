
import React from 'react';

export interface Props {
    department?: string;
    website?: string;
    address?: string;
    contact?: string;
}

/**
 * Office of Research brand footer with help and support information
 */
const Footer: React.FC<Props> = ({
    department = 'Office of Research',
    website = 'https://research.osu.edu',
    address = '1960 Kenny Road | Columbus, OH 43210',
    contact = 'https://research.osu.edu/contact'
}) => (
    <footer>
        <ul>
            <li>
                <a href="http://www.osu.edu/" className="wordmark">
                    <img src="https://orapps.osu.edu/assets/img/osu-footer-wordmark.png"
                        alt="The Ohio State University"
                        title="The Ohio State University home page"/>
                </a>
            </li>
            <li>
                &copy; {(new Date()).getFullYear()},
                The Ohio State University
                - <a href={website} target="_blank" rel="noopener noreferrer">
                    {department}
                </a>
            </li>
            <li className="hidden-xs-down">
                {address} | <a href={contact} target="_blank" rel="noopener noreferrer">
                    Contact
                </a>
            </li>
            <li>
                If you have trouble accessing this page and need to request an alternate format,
                contact the <a href="https://orapps.osu.edu/webmaster" target="_blank" rel="noopener noreferrer">
                    webmaster
                </a>.
            </li>
        </ul>
    </footer>
);

export default Footer;
