import React, { useContext, Fragment } from 'react';
import { Context } from '.';

export interface InlineProps {
    children: React.ReactElement[];
}

const Inline: React.FC<InlineProps> = ({ children }) => {
    const { bind } = useContext(Context);

    return (
        <div className='form-check-inline'>
            {children.map(element => (
                <Fragment key={`${element.props.id}-in-set`}>
                    {React.cloneElement(element, {
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