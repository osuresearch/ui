/// <reference types="react" />
import '../style.scss';
interface Props {
    id?: string;
    name?: string;
    value?: string | number | readonly string[];
}
/**
 * Render a print view as a readOnly text input (for components
 * that have no native read only mode)
 */
export declare function Print({ id, name, value }: Props): JSX.Element;
export {};
//# sourceMappingURL=Print.d.ts.map