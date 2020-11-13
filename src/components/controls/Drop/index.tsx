import React from 'react';
import Button, { Props as ButtonProps } from './Button';
import Menu, { IMenuComposition } from './Menu';
import Item from './Menu/Item';

interface IDropComposition {
    Button: React.FC<ButtonProps>;
    Menu: React.FC & IMenuComposition;
}

type Props = {
    id: string;
    className?: string;
    direction?: 'down' | 'left' | 'right' | 'up';
}

export const Context = React.createContext({
    id: ''
})

const Drop: React.FC<Props> & IDropComposition = ({
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

Drop.Button = Button;
Drop.Menu = Menu;
Drop.Menu.Item = Item;

export default Drop;
