$('.section-order-delivery-heading').on('click',function(){$(this).next('.section-order-delivery-list').slideToggle('fast');})
$('[name="delivery-item"]').click(function(){$('[data-name="'+this.name+'"]').text(this.parentNode.innerText);$(this).closest('ul').slideUp();})
$('.section-order-pay-heading').on('click',function(){$(this).next('.section-order-pay-list').slideToggle('fast');})
$('[name="pay-item"]').click(function(){$('[data-name="'+this.name+'"]').text(this.parentNode.innerText);$(this).closest('ul').slideUp();})
$(".modal-fade-screen, .modal-close").on("click",function(e){if($(e.target).hasClass('modal-fade-screen')||$(e.target).hasClass('modal-close')){$(".modal-state:checked").prop("checked",false).change();}});