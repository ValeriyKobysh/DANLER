<section class="section-content container">
	<div class="section-content__container">
		<div class="top-content">
			<aside class="left-navigation">
				<div class="left-navigation-list">

					{include file="ru/Elem/left_menu.tpl"}

				</div>

			</aside>
			<div class="slider">
				<ul class="owl-carousel">
					{foreach from=$slider item=slide}
					<li class="slider-item">
						<div {if $slide.type=='0'}class="typed-string"{else}class="typed-string-circle"{/if}>
							<div id="text_{$slide.id}" style="display:none;">
										<span class="slider-item-text orange">{$slide.y_text}<br /></span>
										<span class="slider-item-text">{$slide.text}</span>
								</div>
							<span class="element sl_{$slide.id}" id="sl_{$slide.id}"></span>
						</div>
						<img class="slider-item-image" src="{$slide.photo}" alt="slider"/>
					</li>
					{/foreach}
				</ul>
			</div>
		</div>
		<main class="main-content">
			<h1 class="main-heading">Магазин авторазборки</h1>
			<div class="last-products">
				<p class="last-products__heading">Последние добавленные запчасти</p>
				<ul class="last-products__control-list">
			    {foreach from=$child item=v key=k}
					{if $k==0}
					<li class="last-products__control-item active">
					{else}
					<li class="last-products__control-item">
					{/if}
			                <button class="last-products__control-btn">{$v.name_avto}</button>
			              </li>
			    {/foreach}
			  </ul>
				<ul class="last-products__content-list">
										<li class="last-products__content-item active">
																<ul class="last-products__list">
																	{foreach from=$products_lt item=product_lt}
																	<li class="last-products__item"><img class="last-products__img" src="{$product_lt.photo}" alt="lastproduct"/>
																		<h5 class="last-products__title">{$product_lt.name}</h5><a class="last-products__link" href="{$product_lt.url}"><span class="last-products__icon">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
																					<polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "></polygon>
																				</svg></span><span class="last-products__text">Подробнее</span></a>
																	</li>
																	{/foreach}
																</ul>
										</li>
										<li class="last-products__content-item">
																<ul class="last-products__list">
																	{foreach from=$products_sprinter item=product_sprinter}
																	<li class="last-products__item"><img class="last-products__img" src="{$product_sprinter.photo}" alt="lastproductsp"/>
																		<h5 class="last-products__title">{$product_sprinter.name}</h5><a class="last-products__link" href="{$product_sprinter.url}"><span class="last-products__icon">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
																					<polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "></polygon>
																				</svg></span><span class="last-products__text">Подробнее</span></a>
																	</li>
																	{/foreach}
																</ul>
										</li>
										<li class="last-products__content-item">
																<ul class="last-products__list">
																	{foreach from=$products_vito item=product_vito}
																	<li class="last-products__item"><img class="last-products__img" src="{$product_vito.photo}" alt="lastproductvt"/>
																		<h5 class="last-products__title">{$product_vito.name}</h5><a class="last-products__link" href="{$product_vito.url}"><span class="last-products__icon">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
																					<polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "></polygon>
																				</svg></span><span class="last-products__text">Подробнее</span></a>
																	</li>
																	{/foreach}
																</ul>
										</li>
										<li class="last-products__content-item">
																<ul class="last-products__list">
																	{foreach from=$products_t4 item=product_t4}
																	<li class="last-products__item"><img class="last-products__img" src="{$product_t4.photo}" alt="lastproductt4"/>
																		<h5 class="last-products__title">{$product_t4.name}</h5><a class="last-products__link" href="{$product_t4.url}"><span class="last-products__icon">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
																					<polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "></polygon>
																				</svg></span><span class="last-products__text">Подробнее</span></a>
																	</li>
																	{/foreach}
																</ul>
										</li>
										<li class="last-products__content-item">
																<ul class="last-products__list">
																	{foreach from=$products_trafik item=product_trafik}
																	<li class="last-products__item"><img class="last-products__img" src="{$product_trafik.photo}" alt="lastproducttf"/>
																		<h5 class="last-products__title">{$product_trafik.name}</h5><a class="last-products__link" href="{$product_trafik.url}"><span class="last-products__icon">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
																					<polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "></polygon>
																				</svg></span><span class="last-products__text">Подробнее</span></a>
																	</li>
																	{/foreach}
																</ul>
										</li>
										<li class="last-products__content-item">
																<ul class="last-products__list">
																	{foreach from=$products_vivaro item=product_vivaro}
																	<li class="last-products__item"><img class="last-products__img" src="{$product_vivaro.photo}" alt="lastproductviv"/>
																		<h5 class="last-products__title">{$product_vivaro.name}</h5><a class="last-products__link" href="{$product_vivaro.url}"><span class="last-products__icon">
																				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490 490" xml:space="preserve">
																					<polygon points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 222.031,222.031 0,222.031 0,267.969 222.031,267.969 "></polygon>
																				</svg></span><span class="last-products__text">Подробнее</span></a>
																	</li>
																	{/foreach}
																</ul>
										</li>
				</ul><a class="last-products__all" href="/catalog/1-razborka-mersedes-sprinter-1996-2006/">Все запчасти</a>
			</div>
			<!--<section class="video"><img class="video__img" src="/i/img_video/video-bg.png" alt=""/><a class="video__link" href="javascript:;">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
						<path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path>
						<path d="M6 4v8l6-4z"></path>
					</svg></a></section>
			<div class="popup-video">
				<div class="popup-video__wrap"><a class="popup-video__close" href="javascript:;"></a>
					<iframe src="https://www.youtube.com/embed/ESXFanIvoNg" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
				</div>
			</div>-->
          <section class="excellence"><span class="excellence__heading">Почему стоит обратиться именно к нам:</span>
            <div class="excellence__list">
                        <div class="excellence__item"><span class="excellence__title">Цены</span>
                          <div class="excellence__content"><span class="excellence__icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.4 56.4" xml:space="preserve">
                                <path d="M36.3,29.3c-0.9,0-1.7,0.6-2.2,1.3c-0.5-0.7-1.3-1.3-2.2-1.3c-1.5,0-2.7,1.2-2.8,2.7c0,0.1-0.1,0.5,0.1,1.1 c0.2,0.9,0.7,1.6,1.4,2.3l3.2,2.8c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1l3.2-2.8c0.7-0.6,1.2-1.4,1.4-2.2 c0.1-0.6,0.1-1,0.1-1.1C39,30.5,37.8,29.3,36.3,29.3z M38.3,32.9c-0.2,0.7-0.6,1.3-1.2,1.8l-3,2.6l-3-2.6c-0.6-0.5-1-1.1-1.2-1.8 c-0.1-0.5-0.1-0.7-0.1-0.7l0,0c0.1-1,0.8-2.1,2.1-2.1c0.9,0,1.5,0.7,1.9,1.4l0.4,0.8l0.4-0.8c0.3-0.7,1-1.4,1.9-1.4 c1.2,0,2,1,2.1,2.1C38.4,32.2,38.4,32.4,38.3,32.9z"></path>
                                <polygon points="17.6,29.4 27.4,39.2 29.8,36.8 20,27"></polygon>
                                <path d="M35.3,17.2h-5.5l-9.3,9.2l7.7,7.7c-0.1-0.2-0.2-0.5-0.3-0.8c-0.2-0.7-0.1-1.2-0.1-1.5c0.2-2.1,1.9-3.8,4-3.8 c0.8,0,1.6,0.3,2.2,0.8c0.7-0.5,1.4-0.8,2.2-0.8c0.6,0,1.2,0.2,1.8,0.4l1.5-1.5v-5.5L35.3,17.2z M34.2,23.8 c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C35.7,23.1,35,23.8,34.2,23.8z"></path>
                                <rect class="st0" x="8.6" y="9.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -11.8285 27.5614)" width="37.5" height="37.8"></rect>
                              </svg></span><span class="excellence__description">Нам важно, что бы Вы получили оригинальную и готовую к эксплуатации запчасть, поэтому каждая запчасть диагностируется нашими инженерами</span></div>
                        </div>
                        <div class="excellence__item"><span class="excellence__title">Скорость</span>
                          <div class="excellence__content"><span class="excellence__icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.1 63.1" xml:space="preserve">
                                <path d="M32.5,30L38,25l-4.9,5.6c0.1,0.3,0.2,0.6,0.2,0.9c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8 C31.9,29.7,32.2,29.8,32.5,30z M43.5,31.5c0,6.6-5.4,12-12,12s-12-5.4-12-12s5.4-12,12-12S43.5,24.9,43.5,31.5z M40.9,35.6 L39.4,35l0.2-0.4l1.5,0.6c0.4-1,0.6-2.1,0.7-3.2h-1.6v-0.9h1.6c-0.1-1.2-0.3-2.3-0.7-3.3l-1.5,0.6L39.4,28l1.5-0.6 c-1-2.3-2.9-4.2-5.2-5.2L35,23.7l-0.4-0.2l0.6-1.5c-1-0.4-2.1-0.6-3.2-0.7v1.6h-0.9v-1.6c-1.2,0.1-2.3,0.3-3.3,0.7l0.6,1.5 L28,23.7l-0.6-1.5c-1,0.4-1.9,1.1-2.7,1.8l1.1,1.1l-0.7,0.7L24,24.7c-0.8,0.8-1.4,1.8-1.8,2.8l1.5,0.6l-0.2,0.4L22,27.9 c-0.4,1-0.6,2.1-0.7,3.2h1.6V32h-1.6c0.1,1.2,0.3,2.3,0.7,3.3l1.5-0.6l0.2,0.4l-1.5,0.6c0.4,1,1.1,1.9,1.8,2.7l1.1-1.1l0.7,0.7 l-1.1,1.1c1.8,1.7,4.2,2.7,6.9,2.7c2.6,0,5.1-1,6.9-2.7l-1.1-1.1l0.7-0.7l1.1,1.1C39.8,37.6,40.5,36.6,40.9,35.6z M28.1,37.9h6.8 v-1.3h-6.8V37.9z"></path>
                                <rect x="9.8" y="9.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -13.0945 31.5854)" width="43.5" height="43.5"></rect>
                              </svg></span><span class="excellence__description">Каждый заказ обрабатывается в кратчайшие сроки</span></div>
                        </div>
                        <div class="excellence__item"><span class="excellence__title">Помощь</span>
                          <div class="excellence__content"><span class="excellence__icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.1 63.1" xml:space="preserve">
                                <path d="M40.3,33c-0.4-2.8-2-4.8-4.1-4.8h-9.4c-2,0-3.7,2-4.1,4.8c-1.5,0.7-2.2,2.1-2.2,3.7c0,1.3,0.4,2.4,1.3,3.2v2.6 h3.5v-1.6h12.4v1.6h3.5v-2.6c0.9-0.8,1.3-1.9,1.3-3.2C42.5,35.1,41.8,33.7,40.3,33z M26.8,29.2h9.4c1.3,0,2.5,1.5,2.9,3.4 c-0.2,0-0.4-0.1-0.7-0.1c0,0,0,0,0,0c0-1.1-1-2.1-2.2-2.1c-1.2,0-2.2,0.9-2.2,2.1h-9.2c-0.3,0-0.7,0-1,0.1 C24.3,30.7,25.5,29.2,26.8,29.2z M37.8,32.6h-3.1c0-0.8,0.7-1.4,1.5-1.4C37.1,31.2,37.8,31.8,37.8,32.6z M24.3,38.1 c-0.8,0-1.5-0.6-1.5-1.4c0-0.8,0.7-1.4,1.5-1.4c0.8,0,1.5,0.6,1.5,1.4C25.8,37.5,25.1,38.1,24.3,38.1z M35.8,37.9h-8.5 c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.2-0.3,0.4-0.3h8.5c0.2,0,0.4,0.1,0.4,0.3C36.1,37.7,36,37.9,35.8,37.9z M35.8,36.7h-8.5 c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.2-0.3,0.4-0.3h8.5c0.2,0,0.4,0.1,0.4,0.3C36.1,36.5,36,36.7,35.8,36.7z M38.7,38.1 c-0.8,0-1.5-0.6-1.5-1.4c0-0.8,0.7-1.4,1.5-1.4c0.8,0,1.5,0.6,1.5,1.4C40.2,37.5,39.5,38.1,38.7,38.1z M37,24.6 c0.5,0.7,1.4,1.2,2.4,1.2c1.1,0,2.1-0.6,2.5-1.5l-1.9,0c-0.7,0-1.2-0.5-1.2-1.2c0-0.6,0.5-1.2,1.2-1.2H42c-0.5-0.9-1.4-1.5-2.5-1.5 c-1,0-1.9,0.5-2.4,1.2h-12c-0.4-0.4-1-0.7-1.7-0.7c-1.3,0-2.3,0.9-2.3,2.1c0,1.2,1,2.1,2.3,2.1c0.7,0,1.3-0.3,1.7-0.7H37z M22.8,24.1l-0.6-1l0.6-1l1.2,0l0.6,1l-0.6,1H22.8z"></path>
                                <rect x="9.8" y="9.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -13.0622 31.535)" width="43.4" height="43.5"></rect>
                              </svg></span><span class="excellence__description">Наш персонал с радостью поможет в подборе интересующей Вас детали</span></div>
                        </div>
                        <div class="excellence__item"><span class="excellence__title">Ассортимент</span>
                          <div class="excellence__content"><span class="excellence__icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 63.9 63.9" xml:space="preserve">
                                <path d="M23.8,31.2c0.2,0.1,0.4,0.3,0.5,0.4c0.1,0.2,0.2,0.4,0.1,0.6c-0.1,0.3-0.2,0.5-0.4,0.6c-0.2,0.1-0.4,0.1-0.6,0.1 L23.8,31.2z M23.7,29.8l0.3-1.5c-0.2,0-0.3,0-0.5,0.1c-0.2,0.1-0.3,0.3-0.4,0.5c0,0.2,0,0.4,0.2,0.6 C23.4,29.6,23.5,29.7,23.7,29.8z M25.3,23.4l2.8,3l-2.2,10.3l-6.5-1.5l2.2-10.3L25.3,23.4z M24.6,27.4l0.1-0.6l-0.4-0.1l-0.1,0.6 c-0.5-0.1-0.9,0-1.3,0.2c-0.4,0.3-0.7,0.7-0.8,1.2c-0.1,0.5,0,0.9,0.2,1.2c0.2,0.3,0.6,0.6,1.2,1l-0.4,1.9 c-0.2-0.1-0.4-0.2-0.5-0.4c-0.1-0.2-0.1-0.5,0-0.9l-1.2-0.3l0,0.2c-0.1,0.6-0.1,1.1,0.2,1.5c0.3,0.4,0.7,0.7,1.3,0.9l-0.2,0.9 l0.4,0.1l0.2-0.9c0.6,0.1,1.1,0,1.5-0.2c0.5-0.3,0.7-0.7,0.9-1.3c0.1-0.5,0-0.9-0.2-1.3c-0.2-0.4-0.6-0.7-1.3-1.1L24,30l0.3-1.7 c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.2,0.1,0.4,0.1,0.7l1.1,0.2c0.1-0.6,0-1.1-0.2-1.5C25.5,27.8,25.1,27.6,24.6,27.4z M32.2,29.2h-0.4 l1.5-4.2h0.5h0.5l1.5,4.2h-0.5h-0.5l-0.3-0.9h-1.6l-0.3,0.9C32.7,29.2,32.2,29.2,32.2,29.2z M33.2,27.6h1.1l-0.5-1.7v0h0l0,0 L33.2,27.6z M41.9,30.5h-1.5v0.9h1.5V30.5z M39,30.5h-1.5v0.9H39V30.5z M34.6,31.4H36v-0.9h-1.5V31.4z M33.1,30.5h-1.5v0.9h1.5 V30.5z M41.9,33.2h-1.5v0.9h1.5V33.2z M39,33.2h-1.5v0.9H39V33.2z M41.9,25.3h-1.5v0.9h1.5V25.3z M39,25.3h-1.5v0.9H39V25.3z M41.9,28.1h-1.5v0.9h1.5V28.1z M39,28.1h-1.5v0.9H39V28.1z M34.6,34.2H36v-0.9h-1.5V34.2z M33.1,33.2h-1.5v0.9h1.5V33.2z M41.9,36h-1.5V37h1.5V36z M39,36h-1.5V37H39V36z M34.6,37H36V36h-1.5V37z M33.1,36h-1.5V37h1.5V36z M41.9,38.8h-1.5v0.9h1.5V38.8 z M39,38.8h-1.5v0.9H39V38.8z M34.6,39.7H36v-0.9h-1.5V39.7z M33.1,38.8h-1.5v0.9h1.5V38.8z M44.4,20.8v24H28.6v-24H44.4z M43.1,23.2H30v18.3h13.1C43.1,41.5,43.1,23.2,43.1,23.2z M37.3,44.1v-0.7v-0.9h-1.5v0.9v0.7H37.3z"></path>
                                <rect x="9.9" y="10" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -13.268 31.9754)" width="44.1" height="44.1"></rect>
                              </svg></span><span class="excellence__description">Наш каталог насчитывает более 1000 запчастей, ко всем предоставленным в каталоге автомобиле</span></div>
                        </div>
            </div>
          </section>
			<h2 class="second-heading">Почему нам можно доверять?</h2>
			<ul class="accordion-tabs-minimal">
				{foreach from=$main_text_block item=text}
				<li class="tab-header-and-content"><a class="tab-link" href="#">{$text.name}
						<svg class="triangle">
							<polygon points="0,0 20,0 10,20"></polygon>
						</svg></a>
					<div class="tab-content">
						<div class="image"><img class="image-pic" src="{$text.photo}" alt="pic"/></div>
						<div class="text">
							<svg class="line before-line">
								<line x1="0" y1="0" x2="100" y2="0"></line>
								<line x1="0" y1="0" x2="0" y2="50"></line>
							</svg>
							<p>{$text.text}
								<svg class="line after-line">
									<line x1="0" y1="50" x2="100" y2="50"></line>
									<line x1="100" y1="0" x2="100" y2="50"></line>
								</svg>
								<svg class="line after-line-second">
									<line x1="0" y1="50" x2="100" y2="50"></line>
									<line x1="100" y1="0" x2="100" y2="50"></line>
								</svg>
							</p>
						</div>
					</div>
				</li>
				{/foreach}
			</ul>

			<section class="reviews">
				<ul class="reviews__list">
					{foreach from=$feedback item=feed}
					<li class="reviews__item"><span class="reviews__avatar"><img src="/i/feedback/{$feed.id}.jpg" alt="feedback"/></span>
						<p class="reviews__comment"> {$feed.text} </p><span class="reviews__name"> {$feed.name}</span><a class="reviews__link" href="/reviews/">все отзывы</a>
					</li>
					{/foreach}
				</ul>
			</section>


			<div class="text-block">
				<h2 class="text-block-heading">{$page.header}</h2>
				{$page.text}
			</div>
		</main>
	</div>
</section>
