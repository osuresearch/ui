import React from 'react';
import { Props as ButtonProps } from './Button';
import { IMenuComposition } from './Menu';
interface IDropOverlayComposition {
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
/**
 * DropOverlay is a React implementation of [Bootstrap Dropdowns](https://getbootstrap.com/docs/4.0/components/dropdowns/)
 *
 */
declare const DropOverlay: React.FC<Props> & IDropOverlayComposition;
export default DropOverlay;
//# sourceMappingURL=index.d.ts.map