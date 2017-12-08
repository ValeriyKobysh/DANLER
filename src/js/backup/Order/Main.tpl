
<section class="section-content container">
  <div class="section-content__container">
    <section class="section section_full section-order">
      <h1 class="section__heading section__heading_center">Оформление товара</h1>
      <form class="section-order-form" id="order-form" method="post">
        <div class="section-order-left-col">
          <div class="section-order-wrapper-input">
            <label class="section-order-label" for="first-name">Ваше имя</label>
            <input class="section-order-input {if $err.first_name!=''}error-input{/if}" id="name" type="text"  value="{$input_data.first_name}" name="first-name" autofocus="autofocus"/>
            <label class="error-label">{$err.first_name}</label>
          </div>
          <div class="section-order-wrapper-input">
            <label class="section-order-label" for="second-name">Ваша Фамилия</label>
            <input class="section-order-input {if $err.second_name!=''}error-input{/if}" id="second-name" type="text" value="{$input_data.second_name}" name="second-name"/>
            <label class="error-label">{$err.second_name}</label>
          </div>
          <div class="section-order-wrapper-input">
            <label class="section-order-label" for="phone">Ваш телефон</label>
            <input class="section-order-input {if $err.phone!=''}error-input{/if}" id="phone" type="tel" value="{$input_data.phone}" name="phone"/>
            <label class="error-label">{$err.phone}</label>
          </div>
          <div class="section-order-wrapper-input">
            <label class="section-order-label" for="mail">Ваш e-mail</label>
            <input class="section-order-input {if $err.email!=''}error-input{/if}" id="mail" type="email" value="{$input_data.email}" name="email"/>
            <label class="error-label">{$err.email}</label>
          </div>
        </div>
        <div class="section-order-right-col">
          <div class="section-order-wrapper-input">
            <label class="section-order-label" for="city">Ваш город</label>
            <input class="section-order-input {if $err.city!=''}error-input{/if}" id="city" type="text" value="{$input_data.city}" name="city"/>
            <label class="error-label">{$err.city}</label>
          </div>
          <div class="section-order-wrapper-input">
            <label class="section-order-label ">Способ отправки</label><a class="section-order-delivery-heading {if $err.delivery_item!=''}error-input{/if}" href="javascript:;"><span class="section-order-delivery-text " data-name="delivery-item">{if $input_data.delivery_item!=''}{$input_data.delivery_item}{else}Выберите способ отправки{/if}</span><i class="icon icon-down-open-big"></i></a>
            <ul class="section-order-delivery-list ">
              <li class="section-order-delivery-item">
                <label for="new-post">Новая почта
                  <input type="radio" id="new-post" name="delivery-item" value="Новая почта"  {if $input_data.delivery_item=='Новая почт'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="yourself-del">Самовывоз
                  <input type="radio" id="yourself-del" name="delivery-item" value="Самовывоз" {if $input_data.delivery_item=='Самовывоз'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="del-del">Деливери
                  <input type="radio" id="del-del" name="delivery-item" value="Деливери" {if $input_data.delivery_item=='Деливери'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="eurooexpress">Евроэкспресс
                  <input type="radio" id="eurooexpress" name="delivery-item" value="Евроэкспресс" {if $input_data.delivery_item=='Евроэкспресс'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="autolux">Автолюкс
                  <input type="radio" id="autolux" name="delivery-item" value="Автолюкс" {if $input_data.delivery_item=='Автолюкс'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="gunsel">Гюнсел
                  <input type="radio" id="gunsel" name="delivery-item" value="Гюнсел" {if $input_data.delivery_item=='Гюнсел'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="intime">Ин-Тайм
                  <input type="radio" id="intime" name="delivery-item" value="Ин-Тайм" {if $input_data.delivery_item=='Ин-Тайм'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-delivery-item">
                <label for="nightexpress">Ночной Экспресс
                  <input type="radio" id="nightexpress" name="delivery-item" value="Ночной Экспресс" {if $input_data.delivery_item=='Ночной Экспресс'}checked="checked"{/if}/>/>
                </label>
              </li>
            </ul>
          </div>
          <div class="section-order-wrapper-input">
            <label class="section-order-label">Способ оплаты</label><a class="section-order-pay-heading {if $err.pay_item!=''}error-input{/if}" href="javascript:;"><span class="section-order-pay-text" data-name="pay-item" >{if $input_data.delivery_item!=''}{$input_data.pay_item}{else}Выберите способ оплаты{/if}</span><i class="icon icon-down-open-big"></i></a>
            <ul class="section-order-pay-list ">
              <li class="section-order-pay-item">
                <label for="privat-bank">Карта Приват Банка
                  <input type="radio" id="privat-bank" name="pay-item" value="Карта Приват Банка" {if $input_data.pay_item=='Карта Приват Банка'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-pay-item">
                <label for="cash">Оплата наличными
                  <input type="radio" id="cash" name="pay-item" value="Оплата наличными" {if $input_data.pay_item=='Оплата наличными'}checked="checked"{/if}/>
                </label>
              </li>
              <li class="section-order-pay-item">
                <label for="cod">Наложений платёж
                  <input type="radio" id="cod" name="pay-item" value="Наложений платёж" {if $input_data.pay_item=='Наложений платёж'}checked="checked"{/if}/>
                </label>
              </li>
            </ul>
          </div>
          <div class="section-order-wrapper-input">
            <label class="section-order-label" for="comment">Добавить комментарий</label>
            <textarea class="section-order-textarea {if $err.comment!=''}error-input{/if}" id="commemnt"  name="comment">{$input_data.comment}</textarea>
          </div>
          <div class="section-order-wrapper-input">
            <input type="hidden" name="action" value="order" />
            <button class="section-order-submit" type="submit" form="order-form">Отправить</button>
            {*<input type="submit" style="padding: 13px 20px; width: 55.1%;border: none;font-size: 1rem;background-color: #676767;color: #FFF;outline: none;cursor: pointer;" value="Отправить" />*}

          </div>
        </div>
      </form>

    </section>
  </div>
</section>
