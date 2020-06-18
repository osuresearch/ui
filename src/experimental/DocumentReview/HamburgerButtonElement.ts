
import { Section } from './types';

/**
 * Render a hamburger button that fires toggle events.
 * 
 * DOM based on https://jonsuh.com/hamburgers
 */
export default class HamburgerButtonElement {
    public onOpen?: () => void;
    public onClose?: () => void;

    private active: boolean;
    public el: HTMLButtonElement;

    constructor(document: Document) {
        this.active = false;

        // Mmmm, hamburgers
        const button = document.createElement('button');
        button.classList.add('hamburger');
        button.classList.add('hamburger--arrow');
        button.type = 'button';
        button.setAttribute('aria-label', 'Menu');
        button.innerHTML = `
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        `;

        button.addEventListener('click', this.onToggle.bind(this));
        this.el = button;
    }

    public set isOpen(value: boolean) {
        this.active = value;

        if (value) {
            this.onOpen && this.onOpen();
            this.el.classList.add('is-active');
        } else {
            this.onClose && this.onClose();
            this.el.classList.remove('is-active');
        }
    }

    public get isOpen(): boolean {
        return this.active;
    }

    private onToggle() {
        this.isOpen = !this.isOpen;
    }
    
    public remove() {
        this.el.remove();
    }
}
