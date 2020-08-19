import React, { useContext } from 'react';
import { TextContext } from './';

import HelpCommon from '../../internal/FormCommon/Components/Help';

export type HelpProps = React.HTMLAttributes<HTMLElement> & {
    // any Text.Help specific props here.
}

export const Help: React.FC<HelpProps> = (props) => {
    const { bind } = useContext(TextContext);

    return (
        <HelpCommon {...props}>
            {props.children ?? bind.help}
        </HelpCommon>
    );
}
