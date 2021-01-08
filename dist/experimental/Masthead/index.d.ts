export default Masthead;
/**
 * Masthead for a resource details page (project, award, protocol, etc)
 *
 * Supports dynamic resizing of the title font based on container
 * size and a horizontal list of additional metadata.
 */
declare class Masthead extends React.Component<any, any, any> {
    constructor(props: any);
    ref: React.RefObject<any>;
    onBodyResize(): void;
}
declare namespace Masthead {
    export namespace propTypes {
        export const theme: PropTypes.Validator<string>;
        export const title: PropTypes.Validator<string>;
        export const subtitle: PropTypes.Requireable<string>;
        export const aside: PropTypes.Requireable<string>;
        export const asideSubtitle: PropTypes.Requireable<string>;
        export const debounce: PropTypes.Validator<number>;
        export const titleMaxHeight: PropTypes.Validator<number>;
        export const titleMinSize: PropTypes.Validator<number>;
        export const titleMaxSize: PropTypes.Validator<number>;
    }
    export namespace defaultProps {
        const theme_1: string;
        export { theme_1 as theme };
        const debounce_1: number;
        export { debounce_1 as debounce };
        const titleMaxHeight_1: number;
        export { titleMaxHeight_1 as titleMaxHeight };
        const titleMinSize_1: number;
        export { titleMinSize_1 as titleMinSize };
        const titleMaxSize_1: number;
        export { titleMaxSize_1 as titleMaxSize };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map