<section class="section-content container">
  <div class="section-content__container">

  <section class="section section_full s-contact">
    <h1 class="section__heading section__heading_center">Контакты</h1>
    <div class="google-maps__container"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9819534751196!2d31.254440215827955!3d51.51354707963618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5462df481dd2f%3A0xfd7943baa6980127!2z0IbQvdGB0YLRgNGD0LzQtdC90YLQsNC70YzQvdCwINCy0YPQu9C40YbRjywgNywg0KfQtdGA0L3RltCz0ZbQsiwg0KfQtdGA0L3RltCz0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1482141701924" width="100%" height="280" frameborder="0" style="border:0" allowfullscreen></iframe></div>
    <div class="our-contacts"><span class="heading-columns">{$page.header}</span>
      <div class="our-contacts__block">
        <p class="our-contacts__heading">Адрес</p>
        <p>Украина, г. Чернигов, ул. Инструментальная,7</p>
      </div>
      <div class="our-contacts__block">
        <p class="our-contacts__heading">Контактные телефоны</p>
        <p>+38 (093) 700 - 8000</p>
        <p>+38 (097) 700 - 8070</p>
        <p>+38 (099) 270 - 1500</p>
      </div>
      <div class="our-contacts__block">
        <p class="our-contacts__heading">Время работы</p>
        <p>Пн-Пт: 09:00 - 17:00</p>
        <p>Сб: 10:00 - 14:00</p>
        <p>Восресенье: Выходной</p>
      </div>
      <div class="our-contacts__block">
        <p class="our-contacts__heading">Юридические данные</p>
        <p>Иващенко Дмитрий Владимирович</p>
        <p>НОМЕР СВИДЕТЕЛЬСТВА ГОСУДАРСТВЕННОЙ РЕГИСТРАЦИИ: 20640000000025554</p>
          <a class="our-contacts__link" href="/public/img/contact/contact-1.jpg">
            <img class="our-contacts__image" src="/public/img/contact/contact-1.jpg" alt="contact img"/>
          </a>
          <a class="our-contacts__link" href="/public/img/contact/contact-2.jpg">
            <img class="our-contacts__image" src="/public/img/contact/contact-2.jpg" alt="contact img"/>
          </a>
      </div>
    </div>
    <form class="contact-form" id="contact-form" action="" method="post"><span class="heading-columns">Обратная связь</span>
      <div class="contact-form-row">
        <input class="contact-form-field {if $err.name!=''}error-input{/if}" id="field-name" type="text" value="{$input_data.name}" placeholder="Ваше имя" name="name" form="contact-form"/>
        <label class="contact-form-label error-label" for="field-name">{$err.name}</label>
      </div>
      <div class="contact-form-row">
        <input class="contact-form-field {if $err.phone!=''}error-input{/if}" id="field-phone" type="tel" value="{$input_data.phone}" placeholder="Ваш телефон" name="phone" form="contact-form"/>
        <label class="contact-form-label error-label" for="field-phone">{$err.phone}</label>
      </div>
      <div class="contact-form-row">
        <input class="contact-form-field {if $err.email!=''}error-input{/if}" id="field-email" type="email" value="{$input_data.email}" placeholder="Ваш e-mail" name="email" form="contact-form"/>
        <label class="contact-form-label error-label" for="field-email">{$err.email}</label>
      </div>
      <textarea class="contact-form-text" name="text" form="contact-form" placeholder="Задайте Ваш вопрос">{$input_data.text}</textarea>
      <input type="hidden" name="action" value="question" />
      <button class="contact-form-button" type="submit">Отправить</button>
    </form>

  </section>
    </div>
</section>
