
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Content banner for a resource (project, award, protocol, etc).
 *
 * Supports dynamic resizing of the title font based on container
 * size and a horizontal list of additional metadata.
 */
class Banner extends React.Component {
    render() {
        const { children, theme, title } = this.props;

        let classNames = 'banner banner-' + theme;
        return <div className={classNames}>{title}</div>
    }
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['foo', 'bar']).isRequired,
};

Banner.defaultProps = {
    theme: 'foo'
};

export default Banner;
