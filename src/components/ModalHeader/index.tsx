
import React from 'react';
import PropTypes from 'prop-types';

export interface Props {
    hasCloseButton?: boolean;
}

const ModalHeader: React.FC<Props> = ({ children, hasCloseButton = true }) =>
    <div className="modal-header">
        <h5 className="modal-title">
            {children}
        </h5>

        {hasCloseButton &&
            <button type="button" className="close"
                data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        }
    </div>;

export default ModalHeader;
