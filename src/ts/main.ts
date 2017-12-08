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

$('.basket').on('click', function(){
    $('.basket-list').slideToggle('fast');
})

//
$(document).on('click', '.close_modal_prod', function(){
    $(this).closest('.modal-window').hide();
})

$('.add-to-cart').click(function(){
    $('#modal-add-product').closest('.modal-window').show()
})
/**
 * Callback dialog window
 */
//#region vue-callback-dialog window
var callbackBTN = document.querySelector('.js-callback-trigger');

    if(callbackBTN){
        callbackBTN.addEventListener('click', function() { 
            callBack.showDialog()
        })
    }

var callBack = new Vue({
    el: '#dialog-callback',
    data: {
        show: '',
        ok: false,
        formFields: {
            name: '',
            email: '',
            phone: ''
        },
        errorFields:{
            name: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        resetField: function(obj: object){
            for (const key in obj) {
                if (this.formFields.hasOwnProperty(key)) {
                    this.formFields[key] = ''
                }
            }
        },
        showDialog: function(){ this.show = 'show' },
        closeDialog: function(){ 
            this.show = ''
            this.resetField(this.formFields)
            this.resetField(this.errorFields)
        },
        postRequest: function(){
            let name, phone = false;
            let email = true;
            let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if(this.formFields.name != ''){
                this.errorFields.name = '';
                name = true;
            } else{
                this.errorFields.name = 'Обязательное поле';
            }

            if(this.formFields.email != ''){
                if(emailReg.test(this.formFields.email)){
                    this.errorFields.email = ''
                    email = true
                } else{
                    this.errorFields.email = 'Введите корректный email';
                    email = false
                }
            }

            if(this.formFields.phone != ''){
                this.errorFields.phone = '';
                phone = true
            } else{
                this.errorFields.phone = 'Обязательное поле';
            }

            if(name && phone && email){
                this.$http.post(
                    '/index.php?p1=/',
                    Object.assign(this.formFields, {func: 'getCallback'}),
                    { emulateJSON: true } 
                )
                .then(function(success){
    
                    this.ok = true;
                    this.resetField(this.formFields)
    
                    setTimeout(() => {
                        this.ok = false;
                        this.show = '';
                    }, 1500);
                }, function(error){
                    console.log(error);
                })
            }

        }
    }
})
//endregion
//#region Basket
/**
 * Basket
 */
var basket = new Vue({
    el: '#basket',
    data: {
        show: false,
        items: [
            {
                id: 1,
                img: 'img/product/product-photo.png',
                title: 'Блок двигателя Мерседес Спринтер 2.2 cdi (Mercedes Sprinter)',
                url: '/product/800-zamok-bokovoy-dveri-mehanizm-mersedes-sprinter.html',
                price: 1234.34,
                count: 2
            },
            {
                id: 1,
                img: 'img/product/product-photo.png',
                title: 'Блок двигателя Мерседес Спринтер 2.2 cdi (Mercedes Sprinter)',
                url: '/product/800-zamok-bokovoy-dveri-mehanizm-mersedes-sprinter.html',
                price: 1234.88,
                count: 1
            }
    ]
    },
    computed: {
        countItems: function(){
            return this.items.length;
        },
        totalPrice: function(){
            let total: number = 0;
            this.items.forEach(function(element: any) {
                total += element.price * element.count;
            });
            return this.delimiter(total);
        }
    },
    methods: {
        showBasket: function(){
            this.show = !this.show;
        },
        add: function(data: any){
            if(localStorage.basket){
                this.items.forEach(function(element: any, index: number){
                    if(element.id === data.id){
                        this.increment(index);
                        element.price = data.price;
                    } else{
                        this.items.push(data)
                    }
                });
            } else {
                this.items.push(data);
                this.updateLocalStorage();
            }
        },
        increment: function(index: number){
            this.items[index].count += 1;
            this.updateLocalStorage();
        },
        decrement: function(index: number){
            this.items[index].count -= 1;
            this.items[index].count == 0 ? this.delete(index) : this.updateLocalStorage();
        },
        delete: function(index: number){
            console.log("object");
            this.items.splice(index, 1)
            this.updateLocalStorage();
        },
        delimiter(numb: number){
            numb  = parseFloat(numb).toFixed(2).toString();

            var parts = (numb + '').split('.'),
            main = parts[0],
            len = main.length,
            output = '',
            i = len - 1;
        
            while(i >= 0) {
                output = main.charAt(i) + output;
                if ((len - i) % 3 === 0 && i > 0) {
                    output = ' ' + output;
                }
                --i;
            }
    
            if (parts.length > 1) {
                output += '.' + parts[1];
            }

            return output;
        },
        updateLocalStorage(){
            localStorage.setItem('basket', JSON.stringify(this.items))
        }
    },
    created: function(){
        if(localStorage.basket){
            this.items = JSON.parse(localStorage.getItem('basket'));
        }
    }
})
//endregion

//Product js
// $(document).ready(function() {
//     //Tabs at index page
//         $('.accordion-tabs-minimal').each(function(index) {
//             $(this).children('.tab-header-and-content').first().children('.tab-link').addClass('is-active').next().addClass('is-open').show();
//             $(this).children('.tab-header-and-content').first().children('.tab-link').children('.triangle').addClass('triangle-active').show();
//         });
//          $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
//             if (!$(this).hasClass('is-active')) {
//               event.preventDefault();
//               var accordionTabs = $(this).closest('.accordion-tabs-minimal');
//               accordionTabs.find('.is-open').removeClass('is-open').hide();
//               accordionTabs.find('.triangle-active').removeClass('.triangle-active').hide();
    
//               $(this).next().toggleClass('is-open').toggle();
//               accordionTabs.find('.is-active').removeClass('is-active');
//               $(this).addClass('is-active');
//               $(this).children('.triangle-active').hide();
//               $(this).children('.triangle').addClass('triangle-active').show();
    
//             } else {
//               event.preventDefault();
//             }
//         });
    
//     //Galery
//         $(".fancybox").fancybox({
//             openEffect	: 'none',
//             closeEffect	: 'none',
//             padding: 0,
//             autoCenter: true,
//             closeClick: true,
//             nextClick: true,
//             autoWidth: true
//         });
//     });
    
//     //Modal-window
//     $('.call-back-link-prod').on('click', function(e){
//         $('.modal-state-prod').prop('checked', true).change();
//     });
    
//     $(document).on('click', '.modal-fade-screen, .modal-close, .call', function(){
//         $(".modal-state-prod:checked").prop("checked", false).change();
//     });