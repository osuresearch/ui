import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Rsg from 'react-styleguidist/lib/typings';
interface ReactComponentProps {
    component: Rsg.Component;
    depth: number;
    exampleMode?: string;
    usageMode?: string;
}
interface ReactComponentState {
    activeTab?: string;
}
export default class ReactComponent extends Component<ReactComponentProps, ReactComponentState> {
    static propTypes: {
        component: PropTypes.Validator<object>;
        depth: PropTypes.Validator<number>;
        exampleMode: PropTypes.Validator<string>;
        usageMode: PropTypes.Validator<string>;
    };
    static contextType: any;
    state: {
        activeTab: string | undefined;
    };
    private handleTabChange;
    render(): JSX.Element | null;
}
export {};
//# sourceMappingURL=ReactComponent.d.ts.map