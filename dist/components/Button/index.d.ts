
import { ReactNode, MouseEvent } from 'React';

export interface ButtonProps {
    children?: ReactNode;
    theme: string;
    small: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default class Button extends React.Component<ButtonProps, any> {}
