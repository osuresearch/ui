
export default class SidebarElement {
    public container: HTMLDivElement;

    constructor(document: Document) {
        const container = document.createElement('div');
        container.classList.add('comments-sidebar');
        document.body.appendChild(container);
        this.container = container;
    }

    public remove() {
        this.container.remove();
    }
}
