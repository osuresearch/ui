import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableOfContents from './TableOfContents';
import StyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';
import Sections from 'react-styleguidist/lib/client/rsg-components/Sections';
import Welcome from 'react-styleguidist/lib/client/rsg-components/Welcome';
import Error from 'react-styleguidist/lib/client/rsg-components/Error';
import NotFound from 'react-styleguidist/lib/client/rsg-components/NotFound';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import { HOMEPAGE } from 'react-styleguidist/lib/scripts/consts';
import { DisplayModes } from 'react-styleguidist/lib/client/consts';
import * as Rsg from 'react-styleguidist/lib/typings';

import { FormatSubcomponents } from './Utility';

/**
 * This function will return true, if the sidebar should be visible and false otherwise.
 *
 * These sorted conditions (highest precedence first) define the visibility
 * state of the sidebar.
 *
 * - Sidebar is hidden for isolated example views
 * - Sidebar is always visible when pagePerSection
 * - Sidebar is hidden when showSidebar is set to false
 * - Sidebar is visible when showSidebar is set to true for non-isolated views
 *
 * @param {string} displayMode
 * @param {boolean} showSidebar
 * @param {boolean} pagePerSection
 * @returns {boolean}
 */
function hasSidebar(displayMode: string | undefined, showSidebar: boolean): boolean {
    return displayMode === DisplayModes.notFound || (showSidebar && displayMode === DisplayModes.all);
}

export type ExtendedRsgSection = Rsg.Section & {
    /** Indicates if the section includes subcomponents for Component.Subcomponent formatting */
    hasSubcomponents?: boolean;

    /** Wrap the Section/Component visible name in brackets */
    wrapSectionNameInBrackets?: boolean;

    /** Wrap the Section component names in brackets  */
    wrapComponentNamesInBrackets?: boolean;
}

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
    public static propTypes = {
        codeRevision: PropTypes.number.isRequired,
        cssRevision: PropTypes.string.isRequired,
        config: PropTypes.object.isRequired,
        slots: PropTypes.object.isRequired,
        sections: PropTypes.array.isRequired,
        welcomeScreen: PropTypes.bool,
        patterns: PropTypes.array,
        displayMode: PropTypes.string,
        allSections: PropTypes.array.isRequired,
        pagePerSection: PropTypes.bool,
    };
    public static defaultProps = {
        displayMode: DisplayModes.all,
    };

    public state = {
        error: false,
        info: null,
    };

    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({
            error,
            info,
        });
    }

    public render() {
        const { error, info }: StyleGuideState = this.state;
        const {
            config,
            sections: sec,
            welcomeScreen,
            patterns,
            displayMode,
            allSections: allSec,
            pagePerSection,
            codeRevision,
            cssRevision,
            slots,
        } = this.props;

        if (error && info) {
            return <Error error={error} info={info} />;
        }

        if (welcomeScreen && patterns) {
            return <Welcome patterns={patterns} />;
        }

        let sections = [...sec];
        let allSections = allSec ? [...allSec] : [];

        FormatSubcomponents(allSections);

        return (
            <Context.Provider
                value={{
                    codeRevision,
                    config,
                    slots,
                    displayMode: displayMode || DisplayModes.all,
                    cssRevision,
                }}
            >
                <StyleGuideRenderer
                    key={cssRevision}
                    title={config.title}
                    version={config.version}
                    homepageUrl={HOMEPAGE}
                    toc={
                        allSections ? (
                            <TableOfContents
                                sections={allSections}
                                useRouterLinks={pagePerSection}
                                tocMode={config.tocMode}
                            />
                        ) : null
                    }
                    hasSidebar={hasSidebar(displayMode, config.showSidebar)}
                >
                    {sections.length ? <Sections sections={sections} depth={1} /> : <NotFound />}
                </StyleGuideRenderer>
            </Context.Provider>
        );
    }
}
