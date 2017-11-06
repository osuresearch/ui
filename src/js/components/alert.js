
$(() => {
    // Custom hide behavior to prevent removal from the DOM for reusable alerts
    $(document).on('click', '.alert-hide', function () {
        $(this).closest('.alert').addClass('is-hidden');
    });
});

