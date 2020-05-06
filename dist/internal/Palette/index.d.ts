export default Palette;
declare class Palette extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        className: string;
        sass: string;
    };
    getColorClassName(tintOrShade: any, level: any): string;
    getColorSass(tintOrShade: any, level: any): string;
    onClick(tintOrShade: any, level: any): void;
    getColorLink(tintOrShade: any, level: any): JSX.Element;
    render(): JSX.Element;
}
declare namespace Palette {
    export namespace propTypes {
        export const color: PropTypes.Validator<string>;
        export const tints: PropTypes.Validator<(number | null | undefined)[]>;
        export const shades: PropTypes.Validator<(number | null | undefined)[]>;
    }
    export namespace defaultProps {
        const color_1: string;
        export { color_1 as color };
        const tints_1: number[];
        export { tints_1 as tints };
        const shades_1: number[];
        export { shades_1 as shades };
    }
}
import React from "react";
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map