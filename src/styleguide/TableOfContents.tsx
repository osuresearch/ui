import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentsList from 'react-styleguidist/lib/client/rsg-components/ComponentsList';
import TableOfContentsRenderer from 'react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer';
import filterSectionsByName from 'react-styleguidist/lib/client/utils/filterSectionsByName';
import { getHash } from 'react-styleguidist/lib/client/utils/handleHash';
import * as Rsg from 'react-styleguidist/lib/typings';

interface TableOfContentsProps {
    sections: Rsg.Section[];
    useRouterLinks?: boolean;
    tocMode?: string;
    loc: { hash: string; pathname: string };
}

export default class TableOfContents extends Component<TableOfContentsProps> {
    public static propTypes = {
        sections: PropTypes.array.isRequired,
        useRouterLinks: PropTypes.bool,
        tocMode: PropTypes.string,
        loc: PropTypes.object,
    };

    public static defaultProps = {
        loc: window.location,
    };

    public state = {
        searchTerm: '',
    };

    private renderLevel(
        sections: Rsg.TOCItem[],
        useRouterLinks = false,
        hashPath: string[] = [],
        useHashId = false
    ): { content: React.ReactElement; containsSelected: boolean } {
        // Match selected component in both basic routing and pagePerSection routing.
        const { hash, pathname } = this.props.loc;
        const windowHash = pathname + (useRouterLinks ? hash : getHash(hash));

        let childrenContainSelected = false;
        const processedItems = sections.map(sec => {
            let section = { ...sec };

            let children = [...(section.sections || []), ...(section.components || [])];

            console.log('section', section);

            // If the child and parent have the same name, remove the child from the menu
            children = children.filter(child => child.name !== section.name);

            // Form specific:
            // Append the parent name to the child components
            if (section.href && /\/#\/Form.*\/.*\/?id.*/.test(section.href)) {
                console.log('this is a form section', section.name)
                const parent = section.href.split('/%3C')[1].split('%3E')[0];
                console.log(parent);
                console.log(`<${parent}.${section.name}>`);
                section.visibleName = `<${parent}.${section.name}>`;
            }

            const sectionDepth = section.sectionDepth || 0;
            const childHashPath =
                sectionDepth === 0 && useHashId
                    ? hashPath
                    : [...hashPath, section.name ? section.name : '-'];

            const { content, containsSelected } =
                children.length > 0
                    ? this.renderLevel(children, useRouterLinks, childHashPath, sectionDepth === 0)
                    : { content: undefined, containsSelected: false };

            const selected =
                (!useRouterLinks && section.href ? getHash(section.href) : section.href) === windowHash;

            if (containsSelected || selected) {
                childrenContainSelected = true;
            }

            return {
                ...section,
                heading: !!section.name && children.length > 0,
                content,
                selected,
                shouldOpenInNewTab: !!section.external && !!section.externalLink,
                initialOpen: this.props.tocMode !== 'collapse' || containsSelected || section.expand,
                forcedOpen: !!this.state.searchTerm.length,
            };
        });
        return {
            content: <ComponentsList items={processedItems} />,
            containsSelected: childrenContainSelected,
        };
    }

    private renderSections() {
        const { searchTerm } = this.state;
        console.log('searchTerm', searchTerm);

        const { sections, useRouterLinks } = this.props;

        console.log('sections', sections);
        console.log('useRouterLinks', useRouterLinks);

        // If there is only one section, we treat it as a root section
        // In this case the name of the section won't be rendered and it won't get left padding
        // Since a section can contain only other sections,
        // we need to make sure not to loose the subsections.
        // We will treat those subsections as the new roots.
        const firstLevel =
            sections.length === 1
                ? // only use subsections if there actually are subsections
                sections[0].sections && sections[0].sections.length
                    ? sections[0].sections
                    : sections[0].components
                : sections;

        console.log('firstLevel', firstLevel);

        const filtered = firstLevel ? filterSectionsByName(firstLevel, searchTerm) : firstLevel || [];

        console.log('filtered', filtered);

        return this.renderLevel(filtered, useRouterLinks).content;
    }

    public render() {
        return (
            <TableOfContentsRenderer
                searchTerm={this.state.searchTerm}
                onSearchTermChange={searchTerm => this.setState({ searchTerm })}
            >
                {this.renderSections()}
            </TableOfContentsRenderer>
        );
    }
}
