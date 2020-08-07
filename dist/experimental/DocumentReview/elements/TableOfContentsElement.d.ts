import { Section } from '../types';
/**
 * Render a list of `Section` as document anchor links
 */
export default class TableOfContentsElement {
    container: HTMLDivElement;
    private hamburger;
    constructor(document: Document, sections: Map<string, Section>);
    private onOpen;
    private onClose;
    remove(): void;
}
//# sourceMappingURL=TableOfContentsElement.d.ts.map