
import { Section } from './types';

export default class TableOfContentsElement {
    public container: HTMLDivElement;

    constructor(document: Document, sections: Map<string, Section>) {
        const container = document.createElement('div');
        container.classList.add('comments-toc');
        document.body.prepend(container);
        this.container = container;

        // TODO: Anchors for each section -> #section.id
        let liHtml = '';
        sections.forEach((section) => {
            liHtml += `<li><a href="#${section.el.id}">${section.title}</a></li>`;
        });

        container.innerHTML = `
            <div class="comments-toc-scrollbox">
                <ul class="comments-toc-sections">
                    ${liHtml}
                </ul>
            </div>
            <div class="comments-toc-fade"></div>
        `;
    }
    
    public remove() {
        this.container.remove();
    }
}
