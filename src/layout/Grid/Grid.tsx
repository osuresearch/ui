import React from 'react';
import classNames from 'classnames';

import { Row, Props as RowProps } from './Row';
import { Col, Props as ColProps } from './Col';

type Props = {
    children: React.ReactNode
    className?: string
}

/**
 * This is the docblock for the Grid component.
 *
 * And allegedly supports **markdown** and integration with
 * Storybook `and whatnot`.
 */
const Grid = ({ children, className }: Props) => {
    return (
        <div className={classNames(
            'container-fluid',
            className
        )}>{children}</div>
    )
}

Grid.Row = Row;
Grid.Col = Col;

export {
    Grid
};
