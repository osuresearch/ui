import React, { useContext, Fragment } from 'react';
import { Context } from '.';

export interface InlineProps {
    children: React.ReactElement[] | React.ReactElement;
}

const Inline: React.FC<InlineProps> = ({ children }) => {
    const { bind } = useContext(Context);

    return (
        <div className='form-check-inline'>
            {React.Children.map(children, (child: React.ReactElement) => (
                <Fragment key={`${child.props.id}-in-set`}>
                    {React.cloneElement(child, {
                        name: bind.name,
                        error: bind.error,
                        success: bind.success
                    })}
                </Fragment>
            ))}
        </div>
    )
}

export default Inline;