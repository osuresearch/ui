import React from 'react';

export type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string
}

const Item: React.FC<Props> = ({ onClick, className = '', children }) => {
    return (
        <button
            className={`dropdown-item ${className}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    )
}

export default Item;
