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
 *
 * Bootstrap modal modifier classes (such as .modal-dialog-centered and
 * .modal-sm) and custom wrapping classes can also be passed in using the
 * **className** prop. Note that the classes are added to the
 * '.modal-dialog' element and not the outermost '.modal' element.
 *
 * This more-or-less follows the pattern at https://reactjs.org/docs/portals.html
 *
 * @deprecated Use PrimeReact Dialog. Will be removed in a future version of `@ORIS/ui`
 */
declare class Modal extends React.Component<any, any, any> {
    constructor(props: any);
    el: HTMLDivElement;
    ref: React.RefObject<any>;
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
}
declare namespace Modal {
    export namespace propTypes {
        export const className: PropTypes.Requireable<string>;
        export const children: PropTypes.Requireable<object>;
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map