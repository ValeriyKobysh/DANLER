import Vue from '../../../../node_modules/vue/dist/vue';
import mixin from '../../../mixins/mixins'
import Basket from '../../basket/basket'


Vue.component('addToBasket', {
    template: `
    <div class="dialog add-to-basket">
        <div class="dialog__overlay desktop" @click="closeDialog"></div>
        <div class="dialog__container add-to-basket">
            <button class="dialog__close" @click="closeDialog"/>
            <div class="dialog__content">
                <div class="dialog__title">Вы добавили в корзину</div>
                <div class="dialog__basket-info">
                    <span class="dialog__basket-image"><img :src="data.image"></span>
                    <div class="dialog__basket-delete-wrap">
                        <a class="dialog__basket-title link" :href="data.url"> {{data.title}}</a>
                        <button class="dialog__basket-delete" @click="Basket.deleteRecord(data.index)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4500.667 300.556 12.222 13.968" height="20">
                                <g transform="translate(4500.667 300.556)">
                                    <path d="M15.026,2.976a1.305,1.305,0,0,0-1.3-1.229h-1.31V1.31h0A1.31,1.31,0,0,0,11.106,0H6.741a1.309,1.309,0,0,0-1.31,1.31h0v.437H4.122a1.3,1.3,0,0,0-1.3,1.229H2.813v.953a.873.873,0,0,0,.873.873h0v7.421a1.746,1.746,0,0,0,1.746,1.746h6.984a1.746,1.746,0,0,0,1.746-1.746V4.8h0a.873.873,0,0,0,.873-.873V2.976ZM6.3,1.31A.436.436,0,0,1,6.741.873h4.365a.436.436,0,0,1,.437.437v.437H6.3Zm6.984,10.913a.874.874,0,0,1-.873.873H5.432a.874.874,0,0,1-.873-.873V4.8h8.73Zm.873-8.731v.437H3.686V3.056a.436.436,0,0,1,.437-.437h9.6a.436.436,0,0,1,.437.437Z" transform="translate(-2.813)"/>
                                    <path d="M11.687,24.836h.873A.436.436,0,0,0,13,24.4V18.725a.436.436,0,0,0-.437-.437h-.873a.436.436,0,0,0-.437.437V24.4A.436.436,0,0,0,11.687,24.836Zm0-6.112h.873V24.4h-.873Z" transform="translate(-8.631 -12.611)"/>
                                    <path d="M20.124,24.836H21a.436.436,0,0,0,.437-.437V18.725A.436.436,0,0,0,21,18.288h-.873a.436.436,0,0,0-.437.437V24.4A.436.436,0,0,0,20.124,24.836Zm0-6.112H21V24.4h-.873Z" transform="translate(-14.449 -12.611)"/>
                                    <path d="M28.562,24.836h.873a.436.436,0,0,0,.437-.437V18.725a.436.436,0,0,0-.437-.437h-.873a.436.436,0,0,0-.437.437V24.4A.436.436,0,0,0,28.562,24.836Zm0-6.112h.873V24.4h-.873Z" transform="translate(-20.268 -12.611)"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="dialog__basket-price-wrap">
                    <span class="dialog__basket-price">Цена:&nbsp;{{delimiter(data.price)}} грн. х {{data.count}}</span>
                    <div class="dialog__basket-btns">
                        <button class="dialog__basket-btn dialog__basket-btn_plus" @click="Basket.increment(data.index)"/>
                        <button class="dialog__basket-btn dialog__basket-btn_minus" @click="Basket.decrement(data.index)"/>
                    </div>
                </div>
            <div class="dialog__basket-total-wrap">
                <span class="dialog__basket-total">Итого:</span>
                <span class="dialog__basket-total">{{totalPrice}} грн.</span>
            </div>
            <div class="dialog__basket-submit-wrap">
                <a class="dialog__basket-submit link btn btn_dark" href="javascript:;" @click="closeDialog">Продолжить покупки</a>
                <a class="dialog__basket-submit link btn btn_dark" href="/order/">Оформить заказ</a>
            </div>
            </div>
        </div>
    </div>`,
    mixins: [mixin],
    data(){
        return {

        }
    },
    props: {
        data: { type: Object }
    },
    methods: {

    }
})

export default Vue.component('addToBasket')