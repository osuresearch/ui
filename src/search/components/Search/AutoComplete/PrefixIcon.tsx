
import React from 'react';

import Icon from '../../../../components/Icon';

type Props = {
    searching: boolean;
    error: boolean;
}

/**
 * Font Awesome icon to display inline with the input.
 * 
 * Icon changes depending on the current input state
 * (searching, has results, has error, etc)
 * 
 * @return {JSX.Element}
 */
export default function PrefixIcon({
    searching,
    error
}: Props): JSX.Element {
    const getPrefixIcon = () => {
        if (searching) {
            return { name: 'spinner', spin: true };
        }

        if (error) {
            return { name: 'exclamation-circle' };
        }

        // Default looking glass icon
        return { name: 'search' };
    }

    return (
        <span className={`input-group-prefix ${error && 'text-danger'}`}>
            <Icon {...getPrefixIcon()} />
        </span>
    )
}
