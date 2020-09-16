import React, { useContext } from 'react';
import { Context } from '..';

/**
 * Display the form components inline
 */
const Inline: React.FC = ({ children }) => {
    const { bind } = useContext(Context);

    return (
        <div className='form-check-inline'>
            {React.Children.map<React.ReactNode, React.ReactNode>(children, node => {
                if (React.isValidElement(node)) {
                    return React.cloneElement(node, {
                        name: node.props.name || bind.name,
                        error: node.props.error || bind.error,
                        success: node.props.success || bind.success
                    })
                } else {
                    return node
                }
            })}
        </div>
    )
}

export default Inline;
