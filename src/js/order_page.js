$('.js-delivery').on('click', function () {
    $(this).next('.order__list').slideToggle('fast');
});
$('[name="delivery-item"]').click(function () {
    $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
    $(this).closest('ul').slideUp();
});
$('.js-payment').on('click', function () {
    $(this).next('.order__list').slideToggle('fast');
});
$('[name="pay-item"]').click(function () {
    $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
    $(this).closest('ul').slideUp();
});
$('.js-city').on('click', function () {
    $(this).next('.order__list').slideToggle('fast');
});
$('[name="city-item"]').click(function () {
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
$('.order__product-calcs').click(function (e) {
    var count = parseInt($(this).children('.order__product-count').text());
    if (e.target.classList.contains('order__product-calc_plus')) {
        count++;
        $(this).children('.order__product-count').text(count);
    }
    else if (e.target.classList.contains('order__product-calc_minus')) {
        count == 1 ? count = 1 : count--;
        $(this).children('.order__product-count').text(count);
    }
});
//# sourceMappingURL=order_page.js.map