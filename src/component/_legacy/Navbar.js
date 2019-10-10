
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Standard brand application header.
 *
 * Add nav links, searches, and Profile as children.
 * Requires react-router to be running.
 */
const Navbar = (props) => (
    <nav className="navbar navbar-main">
        <Link exact="true" to="/" className="navbar-brand">
            <div className="navbar-org">Office of Research</div>
            {props.title}
        </Link>

        {props.children}
    </nav>
);

Navbar.propTypes = {
    /**
     * Application title displayed to the end user
     */
    title: PropTypes.string.isRequired,

    /**
     * Components to render within the navbar (buttons, searches, Profile)
     */
    children: PropTypes.node.isRequired
};

export default Navbar;
