
import { ReactNode } from 'React';

export interface BadgeProps {
    children?: ReactNode;
    theme: string;
}

export default class Badge extends React.Component<BadgeProps, any> {}
