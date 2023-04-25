
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

/**
 * Masthead for a resource details page (project, award, protocol, etc)
 *
 * Supports dynamic resizing of the title font based on container
 * size and a horizontal list of additional metadata.
 */
class Masthead extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.onBodyResize = this.onBodyResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener(
            'resize',
            debounce(this.onBodyResize, this.props.debounce)
        );

        this.onBodyResize();
    }

    componentWillUnmount() {
        window.removeEventListener(
            'resize',
            debounce(this.onBodyResize, this.props.debounce)
        );
    }

    onBodyResize() {
        const { titleMaxHeight, titleMaxSize, titleMinSize } = this.props;

        if (!this.ref.current) {
            return;
        }

        // Unfortunately this is a bin packing problem.
        // Brute force is about as good as we'll get here.
        let size = titleMinSize;
        do {
            this.ref.current.style.fontSize = size + 'px';
            size++;
        } while (
            this.ref.current.scrollHeight < titleMaxHeight &&
            size < titleMaxSize
        );
    }

    render() {
        const { theme, title, subtitle, aside, asideSubtitle, children } = this.props;

        return (
            <div className="masthead">
                <div className={`row no-gutters masthead-${theme}`}>
                    <div className={aside ? 'col-9' : 'col-12'}>
                        {subtitle &&
                            <div className="masthead-subtitle">
                                {subtitle}
                            </div>
                        }

                        <h1 className="masthead-title" ref={this.ref}>
                            {title}
                        </h1>
                    </div>

                    {aside &&
                        <div className="col-3">
                            <h2 className="masthead-aside">
                                {aside}
                            </h2>

                            {asideSubtitle &&
                                <h5 className="masthead-aside-subtitle">
                                    {asideSubtitle}
                                </h5>
                            }
                        </div>
                    }
                </div>

                {children &&
                    <div className="row no-gutters">
                        <div className="col-12 masthead-list">
                            {children}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

Masthead.propTypes = {
    /**
     * Theme for the masthead background gradient.
     *
     * Current list of themes represent PI Portal resources
     * and may change in the future to more generic theme names.
     */
    theme: PropTypes.oneOf([
        'project',
        'proposal',
        'org',
        'person',
        'protocol',
        'award'
    ]).isRequired,

    /**
     * Primary title to display in the masthead.
     * Font size will dynamically adjust to fit a container.
     */
    title: PropTypes.string.isRequired,

    /** Subtitle to appear above the title */
    subtitle: PropTypes.string,

    /**
     * Content to display to the right of the title.
     * Must be short, such as a monetary value
     */
    aside: PropTypes.string,

    /** Subtitle to display under the aside content */
    asideSubtitle: PropTypes.string,

    /** Debounce time (milliseconds) for window resize events */
    debounce: PropTypes.number.isRequired,

    /** Suggested maximum scroll height of the title content */
    titleMaxHeight: PropTypes.number.isRequired,

    /** Minimum font size (in pixels) that the title can compress to */
    titleMinSize: PropTypes.number.isRequired,

    /** Maximum font size (in pixels) that the title can expand to */
    titleMaxSize: PropTypes.number.isRequired
};

Masthead.defaultProps = {
    theme: 'project',
    debounce: 100,
    titleMaxHeight: 100,
    titleMinSize: 14,
    titleMaxSize: 30,
};

export default Masthead;
