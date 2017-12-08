<header class="header-page">
		<div class="header-page__top">
			<div class="container">
				<div class="contact-info wrapper-phone">

					<ul class="phone-list">
						<li class="phone-item"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><a class="phone-link" href="callto: +380937008000">+38(093) 700 - 8000</a></li>
						<li class="phone-item"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><a class="phone-link" href="callto: +380977008070">+38(097) 700 - 8070</a></li>
						<li class="phone-item"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><a class="phone-link" href="callto: +380992701500">+38(099) 270 - 1500</a></li>
					</ul>
					<div class="show-all-phone"><span class="icon-item phone-icon"><i class="icon-phone"></i></span><span class="show-all-phone-text">+38 (093) ...</span><a class="show-all-phone-link" href="#">показать всё</a></div>
					<div class="basket"><span class="icon-basket"></span><span class="count count_mobile">(0)</span></div>
					<ul class="location-list">
						<li class="location-item"><span class="icon-item location-icon"><i class="icon-location"></i></span><span class="location-text">г. Чернигов, ул. Инструментальная,7</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="header-page__bot"><a class="mobile-menu" href="#"><span class="mobile-menu-icon"><i class="mobile-menu-pic icon-mobile-menu-open"></i></span></a>
				<div class="header-page__logo">
					<a {if $smarty.request.p1!='/'}href="/"{/if} >
						<img src="/public/img/logo.svg" alt="logo"/>
						<span class="header-page__logo-text">Разборка микроавтобусов</span>
					</a>
				</div>
				<div class="header-page__navigation">
					<nav class="top-navigation">
						<ul class="menu-list">
							<li class="menu-item {if $smarty.request.p1=='/'}menu-item-active{/if}"><a class="menu-item-link" {if $smarty.request.p1!='/'}href="/"{/if}>Главная</a></li>
							<li class="menu-item {if $smarty.request.p1=='/delivery/'}menu-item-active{/if}"><a class="menu-item-link" {if $smarty.request.p1!='/delivery/'}href="/delivery/"{/if}>Доставка и оплата</a></li>
							<li class="menu-item {if $smarty.request.p1=='/packing/'}menu-item-active{/if}"><a class="menu-item-link" {if $smarty.request.p1!='/new-product/'}href="/new-product/"{/if}>Поступления</a></li>
							<li class="menu-item {if $smarty.request.p1=='/articles/'}menu-item-active{/if}"><a class="menu-item-link" {if $smarty.request.p1!='/articles/'}href="/articles/"{/if}>Статьи</a></li>
							<li class="menu-item {if $smarty.request.p1=='/contacts/'}menu-item-active{/if}"><a class="menu-item-link" {if $smarty.request.p1!='/contacts/'}href="/contacts/"{/if}>Контакты</a></li>
						</ul>
					</nav>
				</div>
				<div class="header-page-call-back"><a class="call-back-link js-callback-trigger" href="#"><span class="call-back-icon"><i class="icon-item icon-phone"></i></span><span class="call-back-text">Заказать звонок</span></a></div>
			</div>
		</div>
</header>
