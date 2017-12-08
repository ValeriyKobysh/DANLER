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
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        mouseDrag: false,
        touchDrag: false,
        navText: ['<span class="icon-left-open-big"></span><span class="icon-left-open-big"></span>', '<span class="icon-right-open-big"></span><span class="icon-right-open-big"></span>']
    });
    $(".reviews__list").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        navText: ['<span class="reviews__nav"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>',
            '<span class="reviews__nav"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>']
    });
});
$('.video__link').click(function () {
    $('.popup-video').addClass('popup-video_show');
});
$('.popup-video__close').click(function () {
    $('.popup-video').removeClass('popup-video_show');
});
$('.last-products__control-btn').click(function () {
    var _this = $(this), controls = $('.last-products__control-item'), control = _this.parent();
    controlPosition = control.index(),
        contents = $('.last-products__content-item');
    controls.removeClass('active');
    control.addClass('active');
    contents.removeClass('active').eq(controlPosition).addClass('active');
});
function hasClass(array, searchClass) {
    var count = array.length;
    for (var i = 0; i < count; i++) {
        if (array[i] === searchClass) {
            return true;
        }
    }
    return false;
}
(function slideExcellenceAccordion() {
    var items = document.querySelectorAll('.excellence__item'), count = items.length;
    var _loop_1 = function (index) {
        items[index].addEventListener('click', function () {
            var siblings = [], el = this.parentNode.firstElementChild;
            while (el != null) {
                siblings.push(el);
                el = el.nextElementSibling;
            }
            siblings.splice(index, 1);
            for (var item = 0; item < siblings.length; item++) {
                siblings[item].classList.remove('active');
            }
            this.classList.toggle('active');
        });
    };
    for (var index = 0; index < count; index++) {
        _loop_1(index);
    }
})();
$(function () {
    var options1 = { strings: [$('#text_1').html()], typeSpeed: 50 };
    var options2 = { strings: [$('#text_2').html()], typeSpeed: 50 };
    var options3 = { strings: [$('#text_3').html()], typeSpeed: 50 };
    var options4 = { strings: [$('#text_4').html()], typeSpeed: 50 };
    var options5 = { strings: [$('#text_5').html()], typeSpeed: 50 };
    $(".sl_1").typed(options1);
    $(".icon-right-open-big").click(function () { $(".sl_1").typed(options1); $(".sl_2").typed(options2); $(".sl_3").typed(options3); $(".sl_4").typed(options4); $(".sl_5").typed(options5); });
});
;
function TypedText() { $("#sl_1").typed({ strings: ['<span class="slider-item-text orange"> Случилась неожиданная поломка?..</span><br /><span class="slider-item-text"> Решим проблему любого водителя!</span>'], typeSpeed: 50, loop: true }); $("#sl_2").typed({ strings: ['<span class="slider-item-text orange"> Даем гарантию оригинальности детали.</span><br /><span class="slider-item-text"> Полная диагностика. Проверка двигателя.</span>'], typeSpeed: 50, loop: true }); $("#sl_3").typed({ strings: ['<span class="slider-item-text orange"> Сломались?</span><br /><span class="slider-item-text"> Мы найдём для Вас решение!</span>'], typeSpeed: 50, loop: true }); }
//# sourceMappingURL=index-page.js.map