
import { ReactNode, MouseEvent } from 'React';

export interface ExternalLinkProps {
    /**
     * Site to redirect the user to
     */
    href: string;

    /**
     * If no children are supplied, the link `href` will be rendered in their place.
     */
    children?: ReactNode;

    /**
     * Should the link redirect the current window instead of opening in a new one
     */
    redirect: boolean;
}

export default class ExternalLink extends React.Component<ExternalLinkProps, any> {}
