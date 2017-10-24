// Dropdown delivert method on order page
    $('.section-order-delivery-heading').on('click', function(){
        $(this).next('.section-order-delivery-list').slideToggle('fast');
    })

    $('[name="delivery-item"]').click(function() {
        $('[data-name="'+this.name+'"]').text(this.parentNode.innerText);
        $(this).closest('ul').slideUp();
    })
// End dropdown delivert methot on order page

// Dropdown pay method on order page
    $('.section-order-pay-heading').on('click', function(){
        $(this).next('.section-order-pay-list').slideToggle('fast');
    })

    $('[name="pay-item"]').click(function() {
        $('[data-name="'+this.name+'"]').text(this.parentNode.innerText);
        $(this).closest('ul').slideUp();
    })
// End pay delivert methot on order page


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
