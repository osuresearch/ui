import React from 'react';
import { Props as ItemProps } from './Item';
export interface IMenuComposition {
    Item: React.FC<ItemProps>;
}
declare type Props = {
    positionRight?: boolean;
};
declare const Menu: React.FC<Props> & IMenuComposition;
export default Menu;
//# sourceMappingURL=index.d.ts.map