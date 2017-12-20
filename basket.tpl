<div class="basket" id="basket">
    {literal}
    <a class="basket__trigger" @click.prevent="showBasket" href="javascript:;"><span class="basket__icon icon-basket"> </span>({{countItems}})</a>

    <ul class="basket__list" v-show="show">
        <li class="basket__item" v-if="countItems == 0"> <span class="basket__empty">Ваша корзина пуста</span></li>
        <li class="basket__item" v-else v-for="(item, index) in items" :key="index">
        <button class="basket__delete" @click="deleteRecord(index)"><span class="fa fa-trash-o" aria-hidden="true"></span></button><img class="basket__image" :src="item.image"><a class="basket__link" :href="item.url">{{item.title}}</a>
        <div class="basket__price-wrap"><span class="basket__price"><span class="mark">Цена:&nbsp;</span>{{delimiter(item.price)}} грн. х {{item.count}}</span>
            <div class="basket__btns">
            <button class="basket__btn" @click="increment(index)"><span class="icon-plus"></span></button>
            <button class="basket__btn" @click="decrement(index)"><span class="icon-minus"></span></button>
            </div>
        </div>
        </li>
        <li class="basket__item" v-if="countItems != 0"><span class="basket__total">Итого:</span><span class="basket__total">{{totalPrice}} грн.</span></li>
        <li class="basket__item" v-if="countItems != 0"><a class="basket__submit" href="/order/">Оформить заказ</a></li>
    </ul>
    {/literal}
</div>