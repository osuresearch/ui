
import React from 'react';

export interface Props {

}

const ModalBody: React.FC<Props> = ({ children }) =>
    <div className="modal-body">
        {children}
    </div>;

export default ModalBody;
