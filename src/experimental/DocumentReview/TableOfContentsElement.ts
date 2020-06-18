
import { Section } from './types';
import HamburgerButtonElement from './HamburgerButtonElement';

/**
 * Render a list of `Section` as document anchor links
 */
export default class TableOfContentsElement {
    public container: HTMLDivElement;

    private hamburger: HamburgerButtonElement;

    constructor(document: Document, sections: Map<string, Section>) {
        const windowInnerWidth = document.defaultView?.innerWidth || 9999;
        const startCollapsed = windowInnerWidth < 1200;

        const container = document.createElement('div');
        container.classList.add('comments-toc');

        document.body.prepend(container);
        this.container = container;

        // TODO: Anchors for each section -> #section.id
        let liHtml = '';
        sections.forEach((section) => {
            liHtml += `
                <li class="comments-section comments-section-level-${section.level}">
                    <a href="#${section.el.id}">${section.title}</a>
                </li>
            `;
        });

        container.innerHTML = `
            <div class="comments-toc-wrapper">
                <div class="comments-toc-scrollbox">
                    <ul class="comments-toc-sections">
                        ${liHtml}
                    </ul>
                </div>
                <div class="comments-toc-fade"></div>
            </div>
        `;
        
        // Mmmm, hamburgers
        const hamburger = new HamburgerButtonElement(document);
        hamburger.onOpen = this.onOpen.bind(this);
        hamburger.onClose = this.onClose.bind(this);
        container.prepend(hamburger.el);
        this.hamburger = hamburger;

        if (startCollapsed) {
            // Closing the hamburger will propagate to the onClose event handler
            hamburger.isOpen = false;
        }
    }

    private onOpen() {
        this.container.classList.remove('is-collapsed');
    }
    
    private onClose() {
        this.container.classList.add('is-collapsed');
    }
    
    public remove() {
        this.hamburger.remove();
        this.container.remove();
    }
}
