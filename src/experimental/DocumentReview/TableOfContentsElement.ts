
import { Section } from './types';

/**
 * Render a list of `Section` as document anchor links
 */
export default class TableOfContentsElement {
    public container: HTMLDivElement;

    constructor(document: Document, sections: Map<string, Section>) {
        const windowInnerWidth = document.defaultView?.innerWidth || 9999;
        const startCollapsed = windowInnerWidth < 1200;

        const container = document.createElement('div');
        container.classList.add('comments-toc');
        if (startCollapsed) {
            container.classList.add('is-collapsed');
        }

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
        const toggle = document.createElement('button');
        toggle.classList.add('comments-toc-toggle');
        toggle.innerText = '🍔';
        toggle.addEventListener('click', this.onToggle.bind(this));
        container.prepend(toggle);
    }

    private onToggle() {
        this.container.classList.toggle('is-collapsed');
    }
    
    public remove() {
        this.container.remove();
    }
}
