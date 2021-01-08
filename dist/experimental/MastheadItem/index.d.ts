export default MastheadItem;
/**
 * "At a glance" information presented within a Masthead
 */
declare class MastheadItem extends React.Component<any, any, any> {
    constructor(props: any);
    popper: React.RefObject<any>;
}
declare namespace MastheadItem {
    export namespace propTypes {
        export const title: PropTypes.Validator<string>;
        export const content: PropTypes.Validator<string>;
        export const href: PropTypes.Requireable<string>;
        export const fill: PropTypes.Validator<boolean>;
        export const extraContent: PropTypes.Requireable<string>;
    }
    export namespace defaultProps {
        const fill_1: boolean;
        export { fill_1 as fill };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map