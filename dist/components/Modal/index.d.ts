export default Modal;
/**
 * Wrapper to simplify Bootstrap Modal injection
 *
 * This implementation is to help avoid developers writing their own
 * React Portals for rendering modals. It does nothing for rendering
 * the interior of the modal, simply the outer div and state management.
 *
 * Bootstrap's modal jQuery options can be passed in as React props.
 * For the complete list see https://getbootstrap.com/docs/4.0/components/modal/#options

 * This more-or-less follows the pattern at https://reactjs.org/docs/portals.html
 */
declare class Modal extends React.Component<any, any, any> {
    constructor(props: any);
    el: HTMLDivElement;
    ref: React.RefObject<any>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Activates and displays the modal
     *
     * @public
     */
    public show(): void;
    /**
     * Hides the modal from the end user
     *
     * @public
     */
    public hide(): void;
    render(): React.ReactPortal;
}
declare namespace Modal {
    export namespace propTypes {
        export const children: PropTypes.Requireable<object>;
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map