import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

const Success: React.FC<Props> = ({ children, ...props }) => {
    return (
        <div {...props} className='valid-feedback'>
            {children}
        </div>
    )
}

export default Success;