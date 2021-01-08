import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples';
import SectionHeading from 'react-styleguidist/lib/client/rsg-components/SectionHeading';
import JsDoc from 'react-styleguidist/lib/client/rsg-components/JsDoc';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown';
import Slot from 'react-styleguidist/lib/client/rsg-components/Slot';
import ReactComponentRenderer from './ReactComponentRenderer';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import ExamplePlaceholderDefault from 'react-styleguidist/lib/client/rsg-components/ExamplePlaceholder';
import { DOCS_TAB_USAGE } from 'react-styleguidist/lib/client/rsg-components/slots';
import { DisplayModes, UsageModes } from 'react-styleguidist/lib/client/consts';
import * as Rsg from 'react-styleguidist/lib/typings';

const ExamplePlaceholder =
    process.env.STYLEGUIDIST_ENV !== 'production' ? ExamplePlaceholderDefault : () => <div />;

interface ReactComponentProps {
    component: Rsg.Component;
    depth: number;
    exampleMode?: string;
    usageMode?: string;
}

interface ReactComponentState {
    activeTab?: string;
}

export default class ReactComponent extends Component<ReactComponentProps, ReactComponentState> {
    public static propTypes = {
        component: PropTypes.object.isRequired,
        depth: PropTypes.number.isRequired,
        exampleMode: PropTypes.string.isRequired,
        usageMode: PropTypes.string.isRequired,
    };

    public static contextType = Context;

    public state = {
        activeTab: this.props.usageMode === UsageModes.expand ? DOCS_TAB_USAGE : undefined,
    };

    private handleTabChange = (name: string) => {
        this.setState(state => ({
            activeTab: state.activeTab !== name ? name : undefined,
        }));
    };

    public render() {
        const { activeTab } = this.state;
        const {
            displayMode,
            config: { pagePerSection },
        } = this.context;
        const { component, depth, usageMode, exampleMode } = this.props;
        const { name, visibleName, slug = '-', filepath, pathLine, href } = component;
        const { description = '', examples = [], tags = {} } = component.props || {};
        if (!name) {
            return null;
        }
        const showUsage = usageMode !== UsageModes.hide;

        // @ts-ignore
        const pLine = component.module?.default?.componentPathLine || pathLine;

        return (
            <ReactComponentRenderer
                name={name}
                slug={slug}
                filepath={filepath}
                pathLine={pLine}
                docs={<JsDoc {...tags} />}
                description={description && <Markdown text={description} />}
                heading={visibleName && // Only display heading if visibleName is defined (allows us to collapse sections when the section shares a name with the first component)
                    <SectionHeading
                        id={slug}
                        pagePerSection={pagePerSection}
                        deprecated={!!tags.deprecated}
                        slotName="componentToolbar"
                        slotProps={{
                            ...component,
                            isolated: displayMode !== DisplayModes.all,
                        }}
                        href={href}
                        depth={depth}
                    >
                        {visibleName}
                    </SectionHeading>
                }
                examples={
                    examples.length > 0 && (
                        <Examples examples={examples} name={name} exampleMode={exampleMode} />
                        // Prompt to create example was removed
                    )
                }
                tabButtons={
                    // Only display props table if the component actually has props
                    showUsage && component.props?.props && component.props.props.length > 0 && (
                        <Slot
                            name="docsTabButtons"
                            active={activeTab}
                            props={{ ...component, onClick: this.handleTabChange }}
                        />
                    )
                }
                tabBody={<Slot name="docsTabs" active={activeTab} onlyActive props={component} />}
            />
        );
    }
}
