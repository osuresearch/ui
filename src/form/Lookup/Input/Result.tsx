
import React from 'react';

type Props = {
    id: string,
    onClick: () => void,
    isSelected: boolean
}

const Result: React.FC<Props> = ({
    id,
    onClick,
    isSelected,
    children
}) => {
    return (
        <div
            role="option"
            className={`lookup-result ${isSelected && 'active-result'}`}
            id={id}
            onClick={onClick}
            aria-selected={isSelected}
        >
            {children}
        </div>
    );
}

export default Result;
