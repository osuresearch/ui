import React, { useContext } from 'react';
import { SelectContext } from './';

import HelpCommon from '../../internal/FormCommon/Components/Help';

export type HelpProps = React.HTMLAttributes<HTMLElement> & {
    // any Select.Help specific props here.
}

export const Help: React.FC<HelpProps> = (props) => {
    const { bind } = useContext(SelectContext);

    return (
        <HelpCommon {...props}>
            {props.children ?? bind.help}
        </HelpCommon>
    );
}
