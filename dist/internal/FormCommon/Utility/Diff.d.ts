/// <reference types="react" />
import '../style.scss';
export interface DiffProps {
    removed?: string | JSX.Element | null;
    added?: string | JSX.Element | null;
}
export declare function Diff({ removed, added }: DiffProps): JSX.Element;
//# sourceMappingURL=Diff.d.ts.map