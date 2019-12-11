import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Wrapper to simplify Bootstrap Modal injection
 *
 * This implementation is to help avoid developers writing their own
 * React Portals for rendering modals. It does nothing for rendering
 * the interior of the modal, simply the outer div and state management.
 *
 * Bootstrap's modal jQuery options can be passed in as React props.
 * For the complete list see https://getbootstrap.com/docs/4.0/components/modal/#options

 * This more-or-less follows the pattern at https://reactjs.org/docs/portals.html
 */
class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.ref = React.createRef();
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    /**
     * Activates and displays the modal
     *
     * @public
     */
    show() {
        window.$(this.ref.current).modal(this.props);
    }

    /**
     * Hides the modal from the end user
     *
     * @public
     */
    hide() {
        // TODO: Destroy instead? It might be more react-friendly
        // to fully reconstruct the modal content after a toggle?
        window.$(this.ref.current).modal('hide');
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal fade" tabIndex="-1" role="dialog"
                aria-hidden="true" ref={this.ref}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>,
            this.el
        );
    }
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object
    ]),
};

export default Modal;
