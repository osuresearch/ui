
import React from 'react';

export interface Props {

}

const ModalFooter: React.FC<Props> = ({ children }) =>
    <div className="modal-footer">
        {children}
    </div>;

export default ModalFooter;