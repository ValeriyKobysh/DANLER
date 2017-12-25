import Vue from '../../../node_modules/vue/dist/vue';
import basketComponent from '../basket/basket';

let search = new Vue({
    el: '#search',
    data: {
        drop: false,
        basket: false, 
        defaultTitle: 'Поиск...',
        title: 'Поиск...',
        firstLvl: true,
        typeSearch: '',
        action: true
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
        },
        select(type, event){
            this.typeSearch = type;
            this.firstLvl = false;
            this.title = event.target.textContent
            if(type == 'article') this.action = false
        },
        backSelect(){
            this.typeSearch = '';
            this.firstLvl = true;
            this.title = this.defaultTitle;
            this.action = true;
        }
    },
    components: {
        basketComponent
    }
})

export default search;