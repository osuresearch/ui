export default Emulate;
/**
 * Modal to change emulation of users within the application.
 *
 * Renders itself as a link to open the modal. Once emulation has
 * changed, the entire application will be refreshed to load
 * under the new emulated user.
 *
 * @deprecated Use @oris/auth
 */
declare class Emulate extends React.Component<any, any, any> {
    constructor(props: any);
    modal: React.RefObject<any>;
    /**
     * Display the modal on button click
     */
    onClick(): void;
    /**
     * Change event callback for the Lookup component
     *
     * @param {SyntheticEvent} e
     */
    onEmulate(e: any): void;
    /**
     * Reset emulation action.
     *
     * Submits an emulation DELETE request and refreshes the current page.
     */
    onReset(e: any): void;
    state: {
        localStorage: any;
    };
    /**
     * Submit emulation for an individual, by ID
     *
     * After success, this will reload the current page.
     *
     * @param {string} id OSU ID
     * @param {string} name Display name
     */
    emulate(id: string, name: string): void;
    /**
     * Add a user to our emulation history in local storage
     *
     * @param {string} id OSU ID
     * @param {string} name Display name
     */
    addToHistory(id: string, name: string): void;
    render(): JSX.Element;
}
declare namespace Emulate {
    export namespace propTypes {
        export const className: PropTypes.Requireable<string>;
        export const endpoint: PropTypes.Validator<string>;
        export const lookupEndpoint: PropTypes.Validator<string>;
        export const isEmulating: PropTypes.Validator<boolean>;
        export const username: PropTypes.Requireable<string>;
        export const localStorageKey: PropTypes.Validator<string>;
    }
    export namespace defaultProps {
        const lookupEndpoint_1: string;
        export { lookupEndpoint_1 as lookupEndpoint };
        const isEmulating_1: boolean;
        export { isEmulating_1 as isEmulating };
        const username_1: null;
        export { username_1 as username };
        const className_1: string;
        export { className_1 as className };
        const localStorageKey_1: string;
        export { localStorageKey_1 as localStorageKey };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map