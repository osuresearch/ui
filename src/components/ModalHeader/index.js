
import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = (props) =>
    <div className="modal-header">
        <h5 className="modal-title">
            {props.children}
        </h5>

        {props.hasCloseButton &&
            <button type="button" className="close"
                data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        }
    </div>;

ModalHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object
    ]),

    hasCloseButton: PropTypes.bool
};

ModalHeader.defaultProps = {
    hasCloseButton: false
};

export default ModalHeader;
