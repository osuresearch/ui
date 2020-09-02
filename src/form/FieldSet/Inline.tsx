import React, { useContext, Fragment } from 'react';
import { Context } from '.';


const Inline: React.FC = ({ children }) => {
    const { bind } = useContext(Context);

    return (
        <div className='form-check-inline'>
            {React.Children.map<React.ReactNode, React.ReactNode>(children, node => {
                if (React.isValidElement(node)) {
                    return React.cloneElement(node, {
                        name: bind.name,
                        error: bind.error,
                        success: bind.success
                    })
                } else {
                    return node
                }
            })}
        </div>
    )
}

export default Inline;