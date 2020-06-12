
import { Color } from './types';

/**
 * Calculate absolute position relative to the Document for an element
 * 
 * @author https://stackoverflow.com/a/26230989
 */
export function getDocumentRect(el: Element): DOMRect {
    if (!el.ownerDocument) {
        throw new Error('Element is not in a document');
    }

    const box = el.getBoundingClientRect();

    const body = el.ownerDocument.body;
    const docEl = el.ownerDocument.documentElement;

    const scrollTop = /* window.pageYOffset || */ docEl.scrollTop || body.scrollTop;
    const scrollLeft = /* window.pageXOffset || */ docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top  = Math.round(box.top +  scrollTop - clientTop);
    const left = Math.round(box.left + scrollLeft - clientLeft);
    const width = box.width;
    const height = box.height;

    return new DOMRect(left, top, width, height);
}

export function colorToCss(color: Color, alpha: number = 1) {
    return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
}

function isAncestorOf(parent: Element, el: Element): boolean {
    do {
        if (el === parent) {
            return true;
        }

        el = (el.parentElement || el.parentNode) as Element;
    } while (el !== null && el.nodeType === 1);

    return false;
}
