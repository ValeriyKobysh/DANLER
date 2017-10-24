$('.section-order-delivery-heading').on('click', function () {
    $(this).next('.section-order-delivery-list').slideToggle('fast');
});
$('[name="delivery-item"]').click(function () {
    $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
    $(this).closest('ul').slideUp();
});
$('.section-order-pay-heading').on('click', function () {
    $(this).next('.section-order-pay-list').slideToggle('fast');
});
$('[name="pay-item"]').click(function () {
    $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
    $(this).closest('ul').slideUp();
});
$('.section-order-submit').on('click', function (e) {
    $('.modal-state').prop('checked', true).change();
});
$(".modal-fade-screen, .modal-close").on("click", function () {
    $(".modal-state:checked").prop("checked", false).change();
});
$(".modal-inner").on("click", function (e) {
});
//# sourceMappingURL=order_page.js.map