import React from 'react';
declare type PortalProps = {
    children: React.ReactNode[];
};
export default class Portal extends React.Component<PortalProps> {
    el: HTMLDivElement;
    constructor(props: PortalProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export {};
//# sourceMappingURL=Portal.d.ts.map