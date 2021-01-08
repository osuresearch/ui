import React from 'react';
import './index.scss';
declare type SafeInputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id' | 'className' | 'title' | 'value' | 'onChange' | 'onKeyUp'>;
export declare type Props = SafeInputHTMLAttributes & {
    /**
     * If false (default), the user needs to click an adjacent "Search" button to apply the search terms.
     * If true, the search terms are updated as the user types.
     *
     * Depending on your use case, you may want one behaviour over the other.
     * For example, when live terms may negatively impact the performance of your app.
     */
    live?: boolean;
    /**
     * Throttle rate (in milliseconds) to update search terms when the user types.
     *
     * Defaults to `750`
     */
    throttleRate?: number;
    /**
     * Unique element ID. If not provided one will be automatically generated for accessibility.
     */
    id?: string;
    /**
     * Additional classes to add to the wrapping div element.
     */
    className?: string;
    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string;
};
/**
 * Full-text search terms input
 *
 * Accepts
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * props EXCEPT: `type | title | value | onChange | onKeyUp`
 */
declare const Terms: React.FC<Props>;
export default Terms;
//# sourceMappingURL=index.d.ts.map