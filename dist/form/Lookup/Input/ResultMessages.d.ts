import { JsonObject } from '..';
declare type Props = {
    hits: JsonObject[];
    hasNoHits: boolean;
    hasMoreHits: boolean;
    totalHits: number;
    emptyRenderer?: () => JSX.Element;
    error: any;
};
export default function ResultMessages({ hits, hasNoHits, hasMoreHits, totalHits, emptyRenderer, error }: Props): JSX.Element;
export {};
//# sourceMappingURL=ResultMessages.d.ts.map