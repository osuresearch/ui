
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Provides a dropdown for the logged in user to update their profile or logout.
 *
 * Typically rendered within the `Navbar` of an application.
 */
const Profile = (props) => (
    <div className="profile dropdown">
        {/* TODO: This needs to be a button, not an href="#" element to appease the React gods. */}
        <a href="#" className="dropdown-toggle"
            id="profile-dropdown" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            {props.username}
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profile-dropdown">
            <a className="dropdown-item" href={props.editProfileUrl} target="_blank" rel="noopener noreferrer">
                My Profile
            </a>

            {props.children}

            <div className="dropdown-divider"></div>
            <a className="dropdown-item profile-logout" href={props.shibbolethLogoutUrl}>
                Logout
            </a>
        </div>
    </div>
);

Profile.propTypes = {
    /**
     * Name.# to display in the UI
     */
    username: PropTypes.string.isRequired,

    /**
     * URL for complete Shibboleth logout
     */
    shibbolethLogoutUrl: PropTypes.string.isRequired,

    /**
     * URL for the user to edit their research profile
     */
    editProfileUrl: PropTypes.string.isRequired,

    /**
     * Additional list items to add to the dropdown.
     *
     * Must be anchors or buttons with class "dropdown-item".
     * See: https://getbootstrap.com/docs/4.0/components/dropdowns/
     */
    children: PropTypes.node
};

Profile.defaultProps = {
    shibbolethLogoutUrl: '/Shibboleth.sso/Logout?return=https://webauth.service.ohio-state.edu/idp/profile/Logout',
    editProfileUrl: '/register'
};

export default Profile;
