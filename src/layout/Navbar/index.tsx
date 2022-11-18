
import React from 'react';
import { Link } from 'react-router-dom';

export type Props = {
    children: React.ReactNode

    /** Application title displayed to the end user */
    title: string
}

/**
 * Standard brand application header.
 *
 * Add nav links, searches, and Profile as children.
 * Requires react-router to be running.
 */
export const Navbar = ({ children, title }: Props) => (
    <nav
        className="navbar navbar-expand-lg bg-light"
        aria-label={`${title} navigation`}
    >
        <Link to="/" className="navbar-brand">
            <div className="navbar-org">Office of Research</div>
            {title}
        </Link>

        {children}
    </nav>
);
