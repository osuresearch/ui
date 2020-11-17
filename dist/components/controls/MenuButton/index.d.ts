import React from 'react';
import { Props as ButtonProps } from './Button';
import { IMenuComposition } from './Menu';
interface IMenuButtonComposition {
    Button: React.FC<ButtonProps>;
    Menu: React.FC & IMenuComposition;
}
declare type Props = {
    id: string;
    className?: string;
    direction?: 'down' | 'left' | 'right' | 'up';
};
export declare const Context: React.Context<{
    id: string;
}>;
declare const MenuButton: React.FC<Props> & IMenuButtonComposition;
export default MenuButton;
//# sourceMappingURL=index.d.ts.map