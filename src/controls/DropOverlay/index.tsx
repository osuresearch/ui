import React from 'react';
import Button, { Props as ButtonProps } from './Button';
import Menu, { Props as MenuProps, IMenuComposition } from './Menu';
import Item from './Menu/Item';

interface IDropOverlayComposition {
    Button: React.FC<ButtonProps>;
    Menu: React.FC<MenuProps> & IMenuComposition;
}

type Props = {
    id: string;
    className?: string;
    direction?: 'down' | 'left' | 'right' | 'up';
}

export const Context = React.createContext({
    id: ''
});

/**
 * DropOverlay is a React implementation of [Bootstrap Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)
 * 
 */
const DropOverlay: React.FC<Props> & IDropOverlayComposition = ({
    id,
    children,
    className,
    direction = 'down',
}) => {

    return (
        <Context.Provider value={{ id: id }}>
            <div className={`drop${direction} ${className ? className : ''}`}>
                {children}
            </div>
        </Context.Provider>
    )
}

DropOverlay.Button = Button;
DropOverlay.Menu = Menu;
DropOverlay.Menu.Item = Item;

export default DropOverlay;
