
import React from 'react';

export interface Props {
    theme?: string;
}

const Badge: React.FC<Props> = ({
    children, 
    theme = 'secondary' 
}) => <span className={`badge badge-${theme}`}>
    {children}
</span>;

export default Badge;
