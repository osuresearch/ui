import React, { useContext } from 'react';
import { Context } from '..';
import Item, { Props as ItemProps } from './Item';

export interface IMenuComposition {
    Item: React.FC<ItemProps>;
}

const Menu: React.FC & IMenuComposition = ({ children }) => {
    const { id } = useContext(Context);
    return (
        <div className="dropdown-menu" aria-labelledby={id}>
            {children}
        </div>
    )
}

Menu.Item = Item;

export default Menu;
