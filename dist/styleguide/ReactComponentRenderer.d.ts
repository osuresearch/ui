import React from 'react';
import { JssInjectedProps } from 'react-styleguidist/lib/client/rsg-components/Styled/Styled';
interface ReactComponentRendererProps extends JssInjectedProps {
    classes: any;
    name: string;
    heading?: React.ReactNode;
    filepath?: string;
    slug?: string;
    pathLine?: string;
    tabButtons?: React.ReactNode;
    tabBody?: React.ReactNode;
    description?: React.ReactNode;
    docs?: React.ReactNode;
    examples?: React.ReactNode;
    isolated?: boolean;
}
export declare const ReactComponentRenderer: React.FunctionComponent<ReactComponentRendererProps>;
declare const _default: any;
export default _default;
//# sourceMappingURL=ReactComponentRenderer.d.ts.map