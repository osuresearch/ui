
/**
 * Code specific to the banner-style alert dialogs
 */
$(() => {
    const $banners = $('.alert-banner');

    // Turn on `display: sticky` polyfill for all banners
    $banners.fixedsticky();

    // Hide buttons to fade out banners
    $banners.find('.alert-hide').click(function () {
        $(this).closest('.alert-banner').removeClass('is-visible').stop(true);
    });
});
