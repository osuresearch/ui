
import React from 'react';

// @ts-ignore
import { Link } from 'react-router-dom'; 

export interface Props {
    /** Application title displayed to the end user */
    title: string;
}

/**
 * Standard brand application header.
 *
 * Add nav links, searches, and Profile as children.
 * Requires react-router to be running.
 */
const Navbar: React.FC<Props> = ({ children, title }) => (
    <nav className="navbar navbar-main">
        <Link exact="true" to="/" className="navbar-brand">
            <div className="navbar-org">Office of Research</div>
            {title}
        </Link>

        {children}
    </nav>
);

export default Navbar;
