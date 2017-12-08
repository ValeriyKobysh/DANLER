<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

  <title>{$meta.meta_title}</title>

  <meta NAME="title" content="{$meta.meta_title}">
  <meta NAME="description" content="{$meta.meta_description}">
  <!--<meta NAME="keywords" content="{$meta.meta_keywords}">-->

	<meta property="og:type" content="website" />
	<meta property="og:title" content="{$meta.meta_title}" />
  {if $smarty.request.p1=="/product/"}
    <meta property="og:image" content="http://{$smarty.server.SERVER_NAME}{$product.cover}" />
    <link rel="image_src" href="http://{$smarty.server.SERVER_NAME}{$product.cover}" />
    <meta itemprop="image" content="http://{$smarty.server.SERVER_NAME}{$product.cover}"/>
  {else}
    <meta property="og:image" content="http://{$smarty.server.SERVER_NAME}/public/img/logo.png" />
    <link rel="image_src" href="http://{$smarty.server.SERVER_NAME}/public/img/logo.png" />
  {/if}
	<meta property="og:site_name" content="DanLer" />
	<meta property="og:description" content="{$meta.meta_keywords} " />

  <link rel="stylesheet" href="/public/css/index.css"/>
	<script src="/public/libs/jquery/jquery-2.2.4.min.js"></script>
  <script src="/public/libs/vuejs/vue.min.js"></script>
  {if $smarty.request.p1=="/catalog/" && isset($smarty.request.page)}
    {if $smarty.request.page>1}
    <link rel="prev" href="http://{$smarty.server.SERVER_NAME}/catalog/{$smarty.request.catalog_id}-{$smarty.request.catalog_url_name}/{$smarty.request.page-1}">
    <link rel="next" href="http://{$smarty.server.SERVER_NAME}/catalog/{$smarty.request.catalog_id}-{$smarty.request.catalog_url_name}/{$smarty.request.page+1}">
    {else}
    <link rel="next" href="http://{$smarty.server.SERVER_NAME}/catalog/{$smarty.request.catalog_id}-{$smarty.request.catalog_url_name}/2">
    {/if}
  {/if}




    {if $smarty.request.p1=="/order/"}
      <meta name="yandex" content="noindex">
    {/if}

    {if $smarty.request.p1=="/catalog/" && isset($smarty.request.page) && $smarty.request.page>1}
    <meta name="yandex" content=»noindex, follow» />
    {/if}


  <link rel="icon" type="image/png" href="/favicon.ico">
	<link rel="SHORTCUT ICON" href="/favicon.ico">

</head>
<body class="{$body_class}">
  <!-- Yandex.Metrika counter -->
  {literal}
  <script type="text/javascript">
      (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
              try {
                  w.yaCounter42522054 = new Ya.Metrika({
                      id:42522054,
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                  });
              } catch(e) { }
          });

          var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/watch.js";

          if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
      })(document, window, "yandex_metrika_callbacks");
  </script>
  {/literal}
  <noscript><div><img src="https://mc.yandex.ru/watch/42522054" style="position:absolute; left:-9999px;" alt="yandex" /></div></noscript>
  <!-- /Yandex.Metrika counter -->

  {literal}
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-91319978-2', 'auto');
    ga('send', 'pageview');

  </script>
  {/literal}
    {include file="ru/Elem/header.tpl"}

    {include file="ru/Elem/mobile_menu.tpl"}

		{include file="ru/Elem/search.tpl"}

		{$text}

		{include file="ru/Elem/footer.tpl"}





  <div class="modal-window">
    <form action="" method="post">
      <div class="modal-call-back">
        <input class="modal-state" id="modal-1" type="checkbox"/>
        <div class="modal-fade-screen">
          <div class="modal-inner">
            <div id="mod_hide_main" style='text-align:center;width:100%;margin-top:150px;margin-bottom:150px;display:none'>Ваш запрос успешно принят</div>
            <div id="mod_show_main">
            <div class="modal-close"></div>
            <p class="modal-inner-description">Оставьте свой номер телефона и представитель компании свяжется с Вами в ближайшее время</p>
            <div class="input-wrapper">
              <input class="your-name pop-up-input name" type="text" placeholder="Как Вас зовут?"/><span class="must">*</span>
                <label class="error-label err_name"></label>
            </div>
            <div class="input-wrapper">
              <input class="pop-up-input your-email email" type="email" placeholder="Введите Ваш email"/>
              <label class="error-label err_email"></label>
            </div>
            <div class="input-wrapper">
              <input class="pop-up-input number-phone phone" type="tel"  maxlength="12" placeholder="Введите Ваш телефон"/><span class="must">*</span>
              <label class="error-label err_phone"></label>
            </div>
            <input type="hidden" name="action" value="call_back" />
            <a class="call" id="main_call" style="cursor:pointer;display:inline-block;">Перезвонить</a>
          </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  {include file="ru/Components/dialog/callback.tpl"}

  <div class="modal-window">
      <div class="modal-add-product">
        <input class="modal-state-add-product" id="modal-add-product" type="checkbox"/>
        <div class="modal-fade-screen">
          <div class="modal-inner">
            <div class="modal-close js-modal-close"></div>
            <p class="modal__heading">Вы добавили в корзину</p>
            <div class="item_prod">
              <span class="modal__photo"><img class="photo" src="" alt="{time()}"/></span>
              <span class="modal__description">y</span>
              <a class="modal__item-delete" >
                <span class="fa fa-trash-o product_delete" id="{$prod.id}" aria-hidden="true"></span>
              </a>
              <div class="modal__count count">
                <p class="count__text"><span class="mark_accent-color">Цена:</span>1 234 грн. х 1</p>
                <a class="count__link" href="#">
                  <span class="icon-plus product_plus" id="{$prod.id}"></span>
                </a>
                <a class="count__link" href="#">
                  <span class="icon-minus product_minus" id="{$prod.id}"></span>
                </a>
              </div>
            </div>

            <div class="modal__total total"><span class="total__text">Итого:</span><span class="total__count"><span class="mark_accent-color"></span>грн.</span></div>
            <div class="modal__buttons buttons">
              <a class="buttons__link buttons__link_left js-modal-close'" >Продолжить покупки</a>
              <a class="buttons__link buttons__link_right" href="/order/">Оформить заказ</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  <script src="/public/libs/fancybox/jquery.fancybox.min.js"></script>
  <script src="/public/libs/owl-carousel-js/owl.carousel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
    <script src="/public/libs/vue-the-mask/vue-the-mask.js"></script>
    <script src="/public/js/main.js"></script>
  <script src="/public/libs/typed/typed.min.js"></script>
  <script src="/public/js/index-page.js"></script>
  <script src="/public/js/products_page.js"></script>
  <script type="text/javascript" src="/public/js/jquery.cookie.js"></script>
  <script src="/public/js/cart.js"></script>
  <script src="/public/js/order_page.js"></script>
  {* <script type="text/javascript" src="/public/js/callback.js"></script> *}
  <script type="text/javascript" src="/public/js/serialize.js"></script>

  <script>
    $(".reviews__list").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        navText: ['<span class="reviews__nav"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>',
                '<span class="reviews__nav"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>']
    });
  </script>



</body>
</html>
