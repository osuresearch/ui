
/**
 * Floating options box that appears when someone selects some text to review
 */
export default class OptionsElement {
    public container: HTMLDivElement;

    constructor(document: Document) {
        const container = document.createElement('div');
        container.classList.add('comments-options');
        document.body.appendChild(container);
        this.container = container;
    }

    public focus(target: HTMLElement, offset: ????) {
        
    }
}
