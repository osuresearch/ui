
import React from 'react';

/**
 * Ohio State brand navbar
 */
const OhioStateNavbar = () => (
    <nav className="osu-navbar" aria-label="Ohio State nav bar">
        <div className="osu-navbar-info">
            <a href="https://osu.edu" title="The Ohio State University">The Ohio State University</a>
        </div>
        <div className="osu-navbar-links">
            <ul>
                <li><a href="https://www.osu.edu/help.php" className="osu-navbar-help">Help</a></li>
                <li><a href="https://buckeyelink.osu.edu/" className="osu-navbar-buckeyelink">BuckeyeLink</a></li>
                <li><a href="https://www.osu.edu/map/" className="osu-navbar-map">Map</a></li>
                <li><a href="https://www.osu.edu/findpeople.php" className="osu-navbar-findpeople">Find People</a></li>
                <li><a href="https://email.osu.edu/" className="osu-navbar-webmail">Webmail</a></li>
                <li><a href="https://www.osu.edu/search/" className="osu-navbar-search">Search Ohio State</a></li>
            </ul>
        </div>
    </nav>
);

export default OhioStateNavbar;
