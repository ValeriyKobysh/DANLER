<section class="section-content container">
  <div class="section-content__container">
  <aside class="left-navigation">
    <ul class="left-navigation-list">

      {include file="ru/Elem/left_menu.tpl"}

    </ul>
    {include file="ru/Elem/left_banner.tpl"}
  </aside>
  <section class="section section_path s-product">
    <div class="breadcrumps">
      <a class="breadcrumps-home" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 611.997 611.998" xml:space="preserve">
        <path d="M511.114,300.251c-9.94,0-17.638,7.663-17.638,17.651v241.105H368.401v-98.453c0-9.236-7.697-17.31-17.002-17.31h-90.435 c-9.948,0-17.96,8.073-17.96,17.31v98.453h-124.76v-233.1c0-9.306-7.69-17.036-17.638-17.036c-9.298,0-16.995,7.73-16.995,17.036 v250.752c0,9.305,7.697,17.036,16.995,17.036h160.358c9.298,0,16.995-7.731,16.995-17.036v-98.454h55.801v98.454 c0,9.305,7.697,17.036,17.639,17.036h159.715c9.299,0,16.995-7.731,16.995-17.036V317.903 C528.109,307.915,520.413,300.251,511.114,300.251z"></path>
        <path d="M607.003,314.003L467.819,174.225V78.919c0-9.921-8.019-17.583-17.96-17.583c-9.305,0-17.001,7.663-17.001,17.583v60.345 L318.046,23.774c-3.518-3.558-7.697-5.474-11.864-5.474c-4.81,0-8.983,1.984-12.507,5.474L5.361,312.087 c-6.917,6.91-7.375,17.994,0,24.357c6.411,7.389,17.454,6.91,24.371,0l276.45-275.793l275.807,278.393 c2.873,2.874,7.054,4.516,12.507,4.516c4.81,0,8.976-1.642,12.507-4.516C613.42,332.613,613.899,320.982,607.003,314.003z"></path>
        </svg>
      </a>
      <ul class="breadcrumps-list">
        <li class="breadcrumps-item"><a class="breadcrumps-link" href="/">Главная</a></li>
        <li class="breadcrumps-item"><a class="breadcrumps-link" href="{$breadcrumbs.parent_url}">{$breadcrumbs.parent}</a></li>
        <li class="breadcrumps-item"><a class="breadcrumps-link" href="{$breadcrumbs.child_url}">{$breadcrumbs.child}</a></li>
        <li class="breadcrumps-item"><a class="breadcrumps-link" >{$breadcrumbs.product}</a></li>
      </ul>
    </div>
    <div class="s-product__info info">
      <div class="info__photo">
        <ul class="info__carousel">
          {foreach from=$product.photos item=photo}
            <li class="info__carousel-item">
              <a class="info__carousel-link fancybox" href="{$photo}" data-fancybox="gallery-item" title="{$product.name}">
                <img src="{$photo}" alt="фото{$product.id}"/>
              </a>
            </li>

          {/foreach}

        </ul>
      </div>
      <div class="info__sell wrapper-phone">
        <h1 class="section__heading section__heading_left">{$product.h1}</h1>
        <div class="info__wrap">
          <span class="info__price"><span class="info__price info__price_color">Цена:</span> {$product.price} грн</span>
          {if $product.inStock=='1'}
            <span class="info__availability info__availability_true">В наличии</span>
          {else}
            <span class="info__availability info__availability_false">Нет в наличии</span>
          {/if}
          <span class="info__art">Артикул: {$product.sku}</span>
        </div>
        {if $product.inStock=='1'}
          <a id="{$product.id}" class="info__buy add-to-cart" id="{$product.id}" style="cursor:pointer;">
            <span class="info__buy-icon icon-cart-plus"></span>
            <span  class="info__buy-text" >Купить</span>
          </a>
        {else}
          <a id="{$product.id}" class="info__buy" style="background-color:#676767;">
            <span  class="info__buy-text" >Нет в наличии</span>
          </a>
        {/if}
        <a class="call-back-link-prod" href="#">
          <span class="call-back-link-icon icon-phone"></span>
          <span class="call-back-link-text">Перезвоните мне</span>
      </a><a class="show-all-phones" onclick="yaCounter42522054.reachGoal('ORDER'); return true;"  href="#">+ 380 ...  <span class="show-all-phones-color">показать номер</span></a>
        <div class="wrapper-phone-list">
          <ul class="phone-list">
            <li class="phone-item"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><a class="phone-link" href="callto: +380937008000">+38(093) 700 - 8000</a></li>
            <li class="phone-item"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><a class="phone-link" href="callto: +380977008070">+38(097) 700 - 8070</a></li>
            <li class="phone-item"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><a class="phone-link" href="callto: +380992701500">+38(099) 270 - 1500</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="s-product__about about">
      <ul class="accordion-tabs-minimal">
        <li class="tab-header-and-content"><a class="tab-link" href="#">Описание</a>
          <div class="tab-content">
            {$product.description}
            <p class="about-heading">Характеристики:</p>
            <ul class="about-list">
              <li class="about-item"><span class="left-col">Производитель</span><span class="right-col">{$product.manufacture}</span></li>
              <li class="about-item"><span class="left-col">Модель</span><span class="right-col">{$product.model}</span></li>
              <li class="about-item"><span class="left-col">Тип запчасти</span><span class="right-col">{$product.type}</span></li>
              <li class="about-item"><span class="left-col">Состояние</span><span class="right-col">{$product.condition}</span></span></li>
              <li class="about-item"><span class="left-col">Кузов</span><span class="right-col">{$product.body}</span></li>
              <li class="about-item"><span class="left-col">Год выпуска</span><span class="right-col">{$product.year}</span></li>
            </ul>
          </div>
          <div class="tab-content"></div>
        </li>
        <li class="tab-header-and-content"><a class="tab-link" href="#">Написать нам</a>
          <div class="tab-content">
            <form class="contact-form" id="contact-form" action="" method="post">
              <div class="contact-form-row">
                <ul>
                  <li>
                    <input class="contact-form-field {if $err.name!=''}error-input{/if}" id="field-name" type="text" value="{$input_data.name}" placeholder="Ваше имя" name="name" form="contact-form"/>
                    <label class="contact-form-label error-label" for="field-name">{$err.name}</label>
                  </li>
                  <li>
                    <input class="contact-form-field {if $err.phone!=''}error-input{/if}" id="field-phone" type="tel" placeholder="Ваш телефон" value="{$input_data.phone}" name="phone" form="contact-form"/>
                    <label class="contact-form-label error-label" for="field-phone">{$err.phone}</label>
                  </li>
                  <li>
                    <input class="contact-form-field {if $err.email!=''}error-input{/if}" id="field-email" type="email" placeholder="Ваш e-mail" value="{$input_data.email}" name="email" form="contact-form"/>
                    <label class="contact-form-label error-label" for="field-email">{$err.email}</label>
                  </li>
                </ul>
              </div>
              <div class="contact-form-row">
                <textarea class="contact-form-text" name="text" form="contact-form" placeholder="Задайте Ваш вопрос">{$input_data.text}</textarea>
              </div>
              <div class="contact-form-row">
                <input type="hidden" name="action" value="question" />
                <button class="contact-form-button" type="submit">Отправить</button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
    <div class="share"><span>Поделиться</span>
      <script type="text/javascript">(function() {
        if (window.pluso)if (typeof window.pluso.start == "function") return;
        if (window.ifpluso==undefined) { window.ifpluso = 1;
          var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
          s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
          s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
          var h=d[g]('body')[0];
          h.appendChild(s);
        }})();</script>
      <div class="pluso" data-background="transparent" data-options="small,square,line,horizontal,nocounter,theme=04" data-services="facebook,google,odnoklassniki,twitter,vkontakte,moimir"></div>
    </div>
    <div class="s-product__analog">
      <p class="s-product__analog-heading">Похожие товары</p>
      <ul class="s-product__analog-list">
        {foreach from=$similar_product item=prod}
          <li class="s-product__analog-item">
            <img class="s-product__analog-image" src="{$prod.photo}" alt="фото {$prod.id}"/>
            <span class="s-product__analog-text">{$prod.name}</span>
            <a class="s-product__analog-link" href="{$prod.url}">
                <span class="s-product__analog-link-icon">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
	                    <polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "/>
                    </svg>
                </span>
              <span class="s-product__analog-link-text">Подробнее</span>
            </a>
          </li>
        {/foreach}
      </ul>
    </div>
  </section>
  </div>

</section>


<script src="/public/js/product_page.js"></script>
