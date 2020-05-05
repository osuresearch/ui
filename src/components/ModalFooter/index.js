
import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = (props) =>
    <div className="modal-footer">
        {props.children}
    </div>;

ModalFooter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object
    ])
};

export default ModalFooter;