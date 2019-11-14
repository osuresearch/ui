
import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = (props) =>
    <div className="modal-body">
        {props.children}
    </div>;

ModalBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object
    ])
};

export default ModalBody;
