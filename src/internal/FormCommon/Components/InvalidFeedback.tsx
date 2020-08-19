import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

const InvalidFeedback: React.FC<Props> = ({ children, ...props }) => {
    return (
        <div {...props} className='invalid-feedback'>
            {children}
        </div>
    )
}

export default InvalidFeedback;