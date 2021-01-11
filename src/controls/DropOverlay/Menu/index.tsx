import React, { useContext } from 'react';
import { Context } from '..';
import Item, { Props as ItemProps } from './Item';

export interface IMenuComposition {
    Item: React.FC<ItemProps>;
}

type Props = {
    positionRight?: boolean
}

const Menu: React.FC<Props> & IMenuComposition = ({ children, positionRight }) => {
    const { id } = useContext(Context);
    return (
        <div className={`dropdown-menu ${positionRight && 'dropdown-menu-right'}`} aria-labelledby={id}>
            {children}
        </div>
    )
}

Menu.Item = Item;

export default Menu;