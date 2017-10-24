$('.section-products-filter-heading').on('click', function () {
    $(this).next('.section-products-filter-list').slideToggle('fast');
});
$('[name="products-filter"]').click(function () {
    $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
    $(this).closest('ul').slideUp();
});
$('.section-products-count-heading').on('click', function () {
    $(this).next('.section-products-count-list').slideToggle('fast');
});
$('[name="products-count"]').click(function () {
    $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
    $(this).closest('ul').slideUp();
});
$('.section-products-view-list').on('change', '[type="radio"]', function () {
    if ($(this).is('#block')) {
        $('.section-products-inline').addClass('section-products-block');
        $('.section-products-inline').removeClass('section-products-inline');
    }
    else {
        $('.section-products-block').addClass('section-products-inline');
        $('.section-products-block').removeClass('section-products-block');
    }
});
$('.add-to-cart').on('click', function (e) {
    $('.modal-state-add-product').prop('checked', true).change();
});
$(document).on('click', '.modal-fade-screen, .modal-close, .buttons__link_left', function (e) {
    if ($(e.target).hasClass('modal-fade-screen') || $(e.target).hasClass('modal-close') || $(e.target).hasClass('buttons__link_left')) {
        $(".modal-state-add-product:checked").prop("checked", false).change();
    }
});
//# sourceMappingURL=products_page.js.map