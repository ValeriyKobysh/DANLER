import Vue from '../../../node_modules/vue/dist/vue';
import mixin from '../../mixins/mixins';

Vue.component('basket', {
    template: 
    `<div class="basket">
        <ul class="basket__list list">
            <li class="basket__item" v-if="countItems == 0"><span class="basket__empty">Ваша корзина пуста</span></li>
            <li class="basket__item" v-else v-for="(item, index) in items" :key="index">
                <div class="basket__info-wrap">
                    <span class="basket__image"><img :src="item.image"></span>
                    <div class="basket__delete-wrap">
                        <a class="basket__title link" :href="item.url"> {{item.title}} Блок двигателя в сборе Mercedes Sprinter 2.9 tdi</a>
                        <button class="basket__delete" @click="deleteRecord(index)">
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
                <div class="basket__price-wrap">
                    <span class="basket__price">Цена:&nbsp;{{delimiter(item.price)}} грн. х {{item.count}}</span>
                    <div class="basket__btns">
                        <button class="basket__btn basket__btn_plus" @click="increment(index)"/>
                        <button class="basket__btn basket__btn_minus" @click="decrement(index)"/>
                    </div>
                </div>
            </li>
            <li class="basket__item basket__item_total" v-if="countItems != 0">
                <span class="basket__total">Итого:</span>
                <span class="basket__total">{{totalPrice}} грн.</span>
            </li>
            <li class="basket__item basket__item_submit" v-if="countItems != 0">
                <a class="basket__submit link" href="/order/">Оформить заказ</a>
            </li>
        </ul>
    </div>`,
    mixins: [mixin],
    data(){
        return{
            items: []
        }
    },
    computed: {
        countItems(){
            return this.items.length;
        },
        totalPrice(){
            let total = 0;
            this.items.forEach(function(element) {
                total += element.price * element.count;
            });
            return this.delimiter(total);
        }
    },
    methods: {
        add(data){
            if(localStorage.basket){
                this.items.forEach((element, index) => {
                    if(element.id === data.id){
                        this.increment(index);
                        element.price = data.price;
                    } else{
                        this.items.push(data)
                    }
                });
            } else {
                this.items.push(data);
                this.updateLocalStorage();
            }
        },
        getProduct(id){
            this.items.forEach((element, index) => {
                if(element.id === id) return Object.assign(element, {index: index})
            });
        },
        increment(index){
            this.items[index].count += 1;
            this.updateLocalStorage();
        },
        decrement(index){
            this.items[index].count -= 1;
            if(this.items[index].count == 0){
                this.deleteRecord(index);
                this.items.length >= 1 ? this.updateLocalStorage(): this.removeLocalStorage();
            } else{
                this.updateLocalStorage()
            }
        },
        deleteRecord(index){
            this.items.splice(index, 1)
            this.items.length >= 1 ? this.updateLocalStorage(): this.removeLocalStorage();
        },
        updateLocalStorage(){
            localStorage.setItem('basket', JSON.stringify(this.items))
        },
        removeLocalStorage(){
            localStorage.removeItem('basket')
        },
    },
    created(){
        if(localStorage.basket){
            this.items = JSON.parse(localStorage.getItem('basket'));
        }
    }
})

export default Vue.component('basket')