// Dropdown delivert method on order page
    $('.js-delivery').on('click', function () {
        $(this).next('.order__list').slideToggle('fast');
    });

    $('[name="delivery-item"]').click(function() {
        $('[data-name="'+this.name+'"]').text(this.parentNode.innerText);
        $(this).closest('ul').slideUp();
    })
// End dropdown delivert methot on order page

// Dropdown pay method on order page
    $('.js-payment').on('click', function () {
        $(this).next('.order__list').slideToggle('fast');
    });

    $('[name="pay-item"]').click(function() {
        $('[data-name="'+this.name+'"]').text(this.parentNode.innerText);
        $(this).closest('ul').slideUp();
    })
// End pay methot on order page

// Dropdown city method on order page
    $('.js-city').on('click', function () {
        $(this).next('.order__list').slideToggle('fast');
    });

    $('[name="city-item"]').click(function () {
        $('[data-name="' + this.name + '"]').text(this.parentNode.innerText);
        $(this).closest('ul').slideUp();
    });
// End city methot on order page


// Modal window
    $('.section-order-submit').on('click', function(e){
        $('.modal-state').prop('checked', true).change();
    })
    $(".modal-fade-screen, .modal-close").on("click", function() {
        $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
        // e.stopPropagation();
    });
// End Modal window

/**
 * Count product
 */
$('.order__product-calcs').click(function(e) {
    let count: number = parseInt($(this).children('.order__product-count').text());
    
    if(e.target.classList.contains('order__product-calc_plus')){
        count++;
        $(this).children('.order__product-count').text(count)
    } else if (e.target.classList.contains('order__product-calc_minus')){
        count == 1 ? count = 1 : count--;

        $(this).children('.order__product-count').text(count)
    }
})
