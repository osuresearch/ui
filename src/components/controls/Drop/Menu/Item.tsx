import React from 'react';

export type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Item: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button
            className="dropdown-item"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Item;
