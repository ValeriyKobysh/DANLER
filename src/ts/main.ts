// Show-hide phone number on Header top
    var toClickPhone = false;
    $('.show-all-phone-link, .show-all-phones').on('click', function(){
        if (toClickPhone){
            toggle_phone_list($(this),true);
            toClickPhone = false;
        }else{
            if ($(window).width() <= 768){
                $('.location-text').slideUp('fast');
                toClickLocation = false;
            }
            toggle_phone_list($(this));
            toClickPhone = true;
        }
        return false;
    });
// End show-hide phone number on Header top

//Show-hide location on mobile devide
    var toClickLocation = false;
    $('.location-icon').on('click', '.icon-location', function(){
        if ($(window).width() <= 768){
            if (toClickLocation){
                $('.location-text').slideUp('fast');
                toClickLocation = false;
            }else{
                toggle_phone_list(true);
                toClickPhone = false;
                $('.location-text').slideDown('fast');
                toClickLocation = true;
            }
        }
    });
//End show-hide location on mobile devide

// Change active menu item at header navigation
    $('.menu-item').on('click', function(){
        $('.menu-item-active').removeClass('menu-item-active');
        $(this).addClass('menu-item-active');
    });
// End change active menu item at header navigation

// Mobile menu
    $('.mobile-menu').on('click', function(){
        if($('.mobile-menu-pic').hasClass('icon-mobile-menu-open')){
            $('.mobile-menu-pic').removeClass('icon-mobile-menu-open');
            $('.mobile-menu-pic').addClass('icon-cancel');
            $('.mobile-menu__list').slideDown('fast');
        }
        else{
            $('.mobile-menu-pic').removeClass('icon-cancel');
            $('.mobile-menu-pic').addClass('icon-mobile-menu-open');
            $('.mobile-menu__list').slideUp('fast');
        }
    });

    $('.mobile-menu__link').bind('click', function(){
        $(this).parent().find('.mobile-submenu__list').slideToggle('fast');
        if($('.mobile-submenu__item').hasClass('is-expanded')){
            $(this).parent().find('.mobile-submenu-catalog-list').slideUp('fast');
            $('.mobile-submenu__item').removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
        $(this).toggleClass('is-active');
    });

    $('.mobile-submenu__link').bind('click', function(){
        var _this = $(this),
            catalog = _this.next('.mobile-submenu__catalog-list');
        catalog.toggleClass('active');
    });
// End mobile menu

$(document).ready(function () {
 //Dropdown field at search-navigation

 // Default dropdown action to show/hide dropdown content
     $('.js-dropp-action').click(function(e) {
       e.preventDefault();
       $(this).toggleClass('js-open');
       $(this).parent().next('.dropp-body').toggleClass('js-open');
     });
 // Using as fake input select dropdown
     $('.dropp-body label').click(function() {
       $(this).addClass('js-open').siblings().removeClass('js-open');
       $('.dropp-body,.js-dropp-action').removeClass('js-open');
     });
     // get the value of checked input radio and display as dropp title
     $('input[name="dropp"]').change(function() {
       var value = $("input[name='dropp']:checked").val();
       $('.js-value').text(value.toUpperCase());
     });
});

// Left navigation on products page
    $('.left-navigation-link').bind('click', function(e){
        if($('body').hasClass('products-page')){
            $(this).parent().find('.left-subnavigation-list').slideToggle('fast');
            $(this).parent().toggleClass('is-expanded');
            $(this).toggleClass('is-active');
            e.preventDefault();
        }
    });
// End left navigation on products page

function toggle_phone_list(_this, b) {
    var parent = $(_this).closest('.wrapper-phone');
    if (b) {
        parent.find('.phone-list').hide('fast');
        parent.find('.show-all-phone-text').show('fast');
        parent.find('.show-all-phone .icon-item').show('fast');
    } else {
        parent.find('.show-all-phone-text').hide('fast');
        parent.find('.show-all-phone .icon-item').hide('fast');
        parent.find('.phone-list').show('fast');
    }
    parent.find('.show-all-phone-link').text(b ? 'показать всё' : 'скрыть всё');
}


// Modal window
    $('.call-back-link').on('click', function(e){
        $('.modal-state').prop('checked', true).change();
    });

    $(document).on('click', '.modal-fade-screen, .modal-close, .call', function(){
        $(".modal-state:checked").prop("checked", false).change();
    });

    $(document).on('click', '.modal-inner', function(e){
        e.stopPropagation();
    });

    $(function($){
        $(".number-phone").mask("(999)999-99-99");
    });
// End Modal window

$('.basket').on('click', function(){
    $('.basket-list').slideToggle('fast');
})
