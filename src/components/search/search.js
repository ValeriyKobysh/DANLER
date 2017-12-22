import Vue from '../../../node_modules/vue/dist/vue';
import basketComponent from '../basket/basket';

let search = new Vue({
    el: '#search',
    data: {
        drop: false,
        basket: false,
        title: 'Все модели'
    },
    methods: {
        showDrop(){
            this.drop = !this.drop
        },
        changeTitle(event){
            this.title = event.target.value;
            this.showDrop();
        },
        showBasket(){
            this.basket = !this.basket
        }
    },
    components: {
        basketComponent
    }
})

export default search;