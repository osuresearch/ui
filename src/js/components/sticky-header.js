/*
    Behavior for header.is-sticky.

    With the introduction of a .system-alert in the header, we no longer
    have a fixed header size - thus the `top` rule of `position: sticky`
    has to be programmatically set on window resize.
*/
import Util from '../util';

const StickyHeader = (() => {
    const header = document.querySelector('header.is-sticky');

    // If the application is using a sticky header, the sticky
    // top margin needs to be the top of the navbar - 5px
    // (to maintain the red bar on the OSU Nav)
    // With a system-alert visible, this becomes a dynamic `top`
    // that will change between different window resolutions
    if (header !== null) {
        const navbar = header.querySelector('.navbar');
        const debounced = Util.debounce(() => {
            header.style.top = `-${(navbar.offsetTop - 5)}px`;
        }, 10);

        window.addEventListener('resize', debounced);
        debounced();
    }
})();

export default StickyHeader;
