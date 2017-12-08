$(document).ready(function () {
    $('.accordion-tabs-minimal').each(function (index) {
        $(this).children('.tab-header-and-content').first().children('.tab-link').addClass('is-active').next().addClass('is-open').show();
        $(this).children('.tab-header-and-content').first().children('.tab-link').children('.triangle').addClass('triangle-active').show();
    });
    $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function (event) {
        if (!$(this).hasClass('is-active')) {
            event.preventDefault();
            var accordionTabs = $(this).closest('.accordion-tabs-minimal');
            accordionTabs.find('.is-open').removeClass('is-open').hide();
            accordionTabs.find('.triangle-active').removeClass('.triangle-active').hide();
            $(this).next().toggleClass('is-open').toggle();
            accordionTabs.find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
            $(this).children('.triangle-active').hide();
            $(this).children('.triangle').addClass('triangle-active').show();
        }
        else {
            event.preventDefault();
        }
    });
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0,
        autoCenter: true,
        closeClick: true,
        nextClick: true,
        autoWidth: true
    });
});
$('.call-back-link-prod').on('click', function (e) {
    $('.modal-state-prod').prop('checked', true).change();
});
$(document).on('click', '.modal-fade-screen, .modal-close, .call', function () {
    $(".modal-state-prod:checked").prop("checked", false).change();
});
$(document).on('click', '.modal-inner', function (e) {
});
$(function ($) {
    $(".number-phone").mask("(999)999-99-99");
});
//# sourceMappingURL=product_page.js.map