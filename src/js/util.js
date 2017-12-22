/**
 * Utility functions that are considered useful for any application component
 */
const Util = {
    /**
     * Generic debounce function for frequent event handlers
     *
     * @param {function} func Callback to debounce
     * @param {number} threshold Throttling time, in ms (default: 100)
     * @param {boolean} execAsap Run `func` once before debouncing
     */
    debounce(func, threshold, execAsap) {
        let timeout;

        return function debounced(...args) {
            const obj = this;

            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
};

export default Util;
