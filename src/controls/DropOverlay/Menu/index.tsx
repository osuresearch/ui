import React, { useContext } from 'react';
import { Context } from '..';
import Item, { Props as ItemProps } from './Item';

export interface IMenuComposition {
    Item: React.FC<ItemProps>;
}

export type Props = {
    positionRight?: boolean
    className?: string
}

const Menu: React.FC<Props> & IMenuComposition = ({ children, className = '', positionRight }) => {
    const { id } = useContext(Context);
    return (
        <div className={`dropdown-menu ${positionRight ? 'dropdown-menu-right' : ''} ${className}`} aria-labelledby={id}>
            {children}
        </div>
    )
}

Menu.Item = Item;

export default Menu;
