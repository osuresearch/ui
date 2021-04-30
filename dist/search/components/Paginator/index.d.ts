declare type Props = {
    /** The ID of the SearchProvider */
    provider: string;
    /** Content justification of the Paginator (justify-content) */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    /** Limit the number of page buttons displayed in the paginator */
    pageLimit?: number;
    /**
     * The path to the property in the response that contains the number
     * of hits in the greater search context
     */
    hitsPath?: string;
};
export default function Paginator({ provider, justify, pageLimit, hitsPath }: Props): JSX.Element | null;
export {};
//# sourceMappingURL=index.d.ts.map