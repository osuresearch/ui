/**
 * Render a hamburger button that fires toggle events.
 *
 * DOM based on https://jonsuh.com/hamburgers
 */
export default class HamburgerButtonElement {
    onOpen?: () => void;
    onClose?: () => void;
    private active;
    el: HTMLButtonElement;
    constructor(document: Document);
    set isOpen(value: boolean);
    get isOpen(): boolean;
    private onToggle;
    remove(): void;
}
//# sourceMappingURL=HamburgerButtonElement.d.ts.map