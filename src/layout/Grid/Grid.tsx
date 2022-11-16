import React from 'react';

import { Row, Props as RowProps } from './Row';
import { Col, Props as ColProps } from './Col';

type Props = {
    children: React.ReactNode
}

interface IComposition {
    Col: React.FC<ColProps>
}

/**
 * This is the docblock for the Grid component.
 * 
 * And allegedly supports **markdown** and integration with 
 * Storybook `and whatnot`. 
 */
const Grid = ({ children }: Props) => {
    return (
        <div className="container-fluid">
            {children}
        </div>
    )
}

Grid.Row = Row;
Grid.Col = Col;

export {
    Grid
};
