import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import Styled, { JssInjectedProps } from 'react-styleguidist/lib/client/rsg-components/Styled/Styled';
// @ts-ignore
import * as Rsg from 'react-styleguidist/lib/typings';

const styles = ({ space }: Rsg.Theme) => ({
    // Just default jss-isolate rules
    root: {
        marginTop: space[4],
    },
});

interface ExamplesRendererProps extends JssInjectedProps {
    classes: any;
    children?: React.ReactNode;
    name?: string;
}

export const ExamplesRenderer: React.FunctionComponent<ExamplesRendererProps> = ({
    classes,
    name,
    children,
}) => {
    return (
        <article className={classes.root} data-testid={`${name}-examples`}>
            {children}
        </article>
    );
};

ExamplesRenderer.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Styled<ExamplesRendererProps>(styles)(ExamplesRenderer);
