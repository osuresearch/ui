import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from 'react-styleguidist/lib/client/rsg-components/Error';
import * as Rsg from 'react-styleguidist/lib/typings';
export declare type ExtendedRsgSection = Rsg.Section & {
    /** Indicates if the section includes subcomponents for Component.Subcomponent formatting */
    hasSubcomponents?: boolean;
    /** Wrap the Section/Component visible name in brackets */
    wrapSectionNameInBrackets?: boolean;
    /** Wrap the Section component names in brackets  */
    wrapComponentNamesInBrackets?: boolean;
};
export interface StyleGuideProps {
    codeRevision: number;
    cssRevision: string;
    config: Rsg.ProcessedStyleguidistConfig;
    slots: any;
    sections: ExtendedRsgSection[];
    welcomeScreen?: boolean;
    patterns?: string[];
    displayMode?: string;
    allSections?: ExtendedRsgSection[];
    pagePerSection?: boolean;
}
interface StyleGuideState {
    error: Error | boolean;
    info: React.ErrorInfo | null;
}
export default class StyleGuide extends Component<StyleGuideProps, StyleGuideState> {
    static propTypes: {
        codeRevision: PropTypes.Validator<number>;
        cssRevision: PropTypes.Validator<string>;
        config: PropTypes.Validator<object>;
        slots: PropTypes.Validator<object>;
        sections: PropTypes.Validator<any[]>;
        welcomeScreen: PropTypes.Requireable<boolean>;
        patterns: PropTypes.Requireable<any[]>;
        displayMode: PropTypes.Requireable<string>;
        allSections: PropTypes.Validator<any[]>;
        pagePerSection: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        displayMode: any;
    };
    state: {
        error: boolean;
        info: null;
    };
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=StyleGuide.d.ts.map