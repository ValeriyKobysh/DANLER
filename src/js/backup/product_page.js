$(document).ready(function() {
//Tabs at index page
    $('.accordion-tabs-minimal').each(function(index) {
        $(this).children('.tab-header-and-content').first().children('.tab-link').addClass('is-active').next().addClass('is-open').show();
        $(this).children('.tab-header-and-content').first().children('.tab-link').children('.triangle').addClass('triangle-active').show();
    });
     $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
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

        } else {
          event.preventDefault();
        }
    });

//Galery
    $(".section-product-carousel-link").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none',
        padding: 0,
        autoCenter: true,
        closeClick: true,
        nextClick: true,
        autoWidth: true
    });
});

//Modal-window
$('.call-back-link-prod').on('click', function(e){
    $('.modal-state-prod').prop('checked', true).change();
    $('.p_email').val('');
    $('.p_name').val('');
    $('.p_phone').val('');
    $("#mod_hide").hide();
    $("#mod_show").show();
});

$(document).on('click', '.modal-fade-screen, .modal-close', function(e){
    if($(e.target).hasClass('modal-fade-screen') || $(e.target).hasClass('modal-close')){

        $(".modal-state-prod:checked").prop("checked", false).change();
    }
});
$(function($){
    $(".number-phone").mask("(999)999-99-99");
});
