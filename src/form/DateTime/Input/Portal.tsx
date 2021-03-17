import React from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
    children: React.ReactNode[];
}

export default class Portal extends React.Component<PortalProps> {
    el: HTMLDivElement;

    constructor(props: PortalProps) {
        super(props);

        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="ui-form-datetime" z-index="99999">{this.props.children}</div>,
            this.el
        );
    }
}
