import { Color } from './types';
/**
 * Calculate absolute position relative to the Document for an element
 *
 * @author https://stackoverflow.com/a/26230989
 */
export declare function getDocumentRect(el: Element): DOMRect;
export declare function colorToCss(color: Color, alpha?: number): string;
export declare function isAncestorOf(parent: Element, el: Element): boolean;
//# sourceMappingURL=utility.d.ts.map