"use strict";

function toggle_phone_list(e, t) {
  var i = $(e).closest(".wrapper-phone");t ? (i.find(".phone-list").hide("fast"), i.find(".show-all-phone-text").show("fast"), i.find(".show-all-phone .icon-item").show("fast")) : (i.find(".show-all-phone-text").hide("fast"), i.find(".show-all-phone .icon-item").hide("fast"), i.find(".phone-list").show("fast")), i.find(".show-all-phone-link").text(t ? "показать всё" : "скрыть всё");
}var toClickPhone = !1;$(".show-all-phone-link, .show-all-phones").on("click", function () {
  return toClickPhone ? (toggle_phone_list($(this), !0), toClickPhone = !1) : ($(window).width() <= 768 && ($(".location-text").slideUp("fast"), toClickLocation = !1), toggle_phone_list($(this)), toClickPhone = !0), !1;
});var toClickLocation = !1;$(".location-icon").on("click", ".icon-location", function () {
  $(window).width() <= 768 && (toClickLocation ? ($(".location-text").slideUp("fast"), toClickLocation = !1) : (toggle_phone_list(!0), toClickPhone = !1, $(".location-text").slideDown("fast"), toClickLocation = !0));
}), $(".menu-item").on("click", function () {
  $(".menu-item-active").removeClass("menu-item-active"), $(this).addClass("menu-item-active");
}), $(".mobile-menu").on("click", function () {
  $(".mobile-menu-pic").hasClass("icon-mobile-menu-open") ? ($(".mobile-menu-pic").removeClass("icon-mobile-menu-open"), $(".mobile-menu-pic").addClass("icon-cancel"), $(".mobile-menu__list").slideDown("fast")) : ($(".mobile-menu-pic").removeClass("icon-cancel"), $(".mobile-menu-pic").addClass("icon-mobile-menu-open"), $(".mobile-menu__list").slideUp("fast"));
}), $(".mobile-menu__link").bind("click", function () {
  $(this).parent().find(".mobile-submenu__list").slideToggle("fast"), $(".mobile-submenu__item").hasClass("is-expanded") && ($(this).parent().find(".mobile-submenu-catalog-list").slideUp("fast"), $(".mobile-submenu__item").removeClass("is-expanded")), $(this).parent().toggleClass("is-expanded"), $(this).toggleClass("is-active");
}), $(".mobile-submenu__link").bind("click", function () {
  $(this).next(".mobile-submenu__catalog-list").toggleClass("active");
}), $(document).ready(function () {
  $(".js-dropp-action").click(function (e) {
    e.preventDefault(), $(this).toggleClass("js-open"), $(this).parent().next(".dropp-body").toggleClass("js-open");
  }), $(".dropp-body label").click(function () {
    $(this).addClass("js-open").siblings().removeClass("js-open"), $(".dropp-body,.js-dropp-action").removeClass("js-open");
  }), $('input[name="dropp"]').change(function () {
    var e = $("input[name='dropp']:checked").val();$(".js-value").text(e.toUpperCase());
  });
}), $(".left-navigation-link").bind("click", function (e) {
  $("body").hasClass("products-page") && ($(this).parent().find(".left-subnavigation-list").slideToggle("fast"), $(this).parent().toggleClass("is-expanded"), $(this).toggleClass("is-active"), e.preventDefault());
}), $(".basket").on("click", function () {
  $(".basket-list").slideToggle("fast");
}), $(document).on("click", ".close_modal_prod", function () {
  $(this).closest(".modal-window").hide();
}), $(".add-to-cart").click(function () {
  $("#modal-add-product").closest(".modal-window").show();
});var callbackBTN = document.querySelector(".js-callback-trigger");callbackBTN && callbackBTN.addEventListener("click", function () {
  callBack.showDialog();
});var callBack = new Vue({ el: "#dialog-callback", data: { show: "", ok: !1, formFields: { name: "", email: "", phone: "" }, errorFields: { name: "", email: "", phone: "" } }, methods: { resetField: function resetField(e) {
      for (var t in e) {
        this.formFields.hasOwnProperty(t) && (this.formFields[t] = "");
      }
    }, showDialog: function showDialog() {
      this.show = "show";
    }, closeDialog: function closeDialog() {
      this.show = "", this.resetField(this.formFields), this.resetField(this.errorFields);
    }, postRequest: function postRequest() {
      var e,
          t = !1,
          i = !0,
          o = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;"" != this.formFields.name ? (this.errorFields.name = "", e = !0) : this.errorFields.name = "Обязательное поле", "" != this.formFields.email && (o.test(this.formFields.email) ? (this.errorFields.email = "", i = !0) : (this.errorFields.email = "Введите корректный email", i = !1)), "" != this.formFields.phone ? (this.errorFields.phone = "", t = !0) : this.errorFields.phone = "Обязательное поле", e && t && i && this.$http.post("/index.php?p1=/", Object.assign(this.formFields, { func: "getCallback" }), { emulateJSON: !0 }).then(function (e) {
        var t = this;this.ok = !0, this.resetField(this.formFields), setTimeout(function () {
          t.ok = !1, t.show = "";
        }, 1500);
      }, function (e) {
        console.log(e);
      });
    } } }),
    basket = new Vue({ el: "#basket", data: { show: !1, items: [{ id: 1, img: "img/product/product-photo.png", title: "Блок двигателя Мерседес Спринтер 2.2 cdi (Mercedes Sprinter)", url: "/product/800-zamok-bokovoy-dveri-mehanizm-mersedes-sprinter.html", price: 1234.34, count: 2 }, { id: 1, img: "img/product/product-photo.png", title: "Блок двигателя Мерседес Спринтер 2.2 cdi (Mercedes Sprinter)", url: "/product/800-zamok-bokovoy-dveri-mehanizm-mersedes-sprinter.html", price: 1234.88, count: 1 }] }, computed: { countItems: function countItems() {
      return this.items.length;
    }, totalPrice: function totalPrice() {
      var e = 0;return this.items.forEach(function (t) {
        e += t.price * t.count;
      }), this.delimiter(e);
    } }, methods: { showBasket: function showBasket() {
      this.show = !this.show;
    }, add: function add(e) {
      localStorage.basket ? this.items.forEach(function (t, i) {
        t.id === e.id ? (this.increment(i), t.price = e.price) : this.items.push(e);
      }) : (this.items.push(e), this.updateLocalStorage());
    }, increment: function increment(e) {
      this.items[e].count += 1, this.updateLocalStorage();
    }, decrement: function decrement(e) {
      this.items[e].count -= 1, 0 == this.items[e].count ? this.delete(e) : this.updateLocalStorage();
    }, delete: function _delete(e) {
      console.log("object"), this.items.splice(e, 1), this.updateLocalStorage();
    }, delimiter: function delimiter(e) {
      for (var t = ((e = parseFloat(e).toFixed(2).toString()) + "").split("."), i = t[0], o = i.length, s = "", n = o - 1; n >= 0;) {
        s = i.charAt(n) + s, (o - n) % 3 == 0 && n > 0 && (s = " " + s), --n;
      }return t.length > 1 && (s += "." + t[1]), s;
    }, updateLocalStorage: function updateLocalStorage() {
      localStorage.setItem("basket", JSON.stringify(this.items));
    } }, created: function created() {
    localStorage.basket && (this.items = JSON.parse(localStorage.getItem("basket")));
  } });