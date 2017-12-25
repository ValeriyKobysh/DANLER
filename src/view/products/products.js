import './products.sass'
import header from '../../components/header/header';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import addToBasketComponent from '../../components/dialog/addToBasket/addToBasket';
import Sidebar from '../../components/sidebar/sidedar';
import Search from '../../components/search/search';
import mixin from '../../mixins/mixins'

import Vue from '../../../node_modules/vue/dist/vue';

let products = new Vue({
    el: '#products',
    mixins: [mixin],
    data: {
        sortDisplay: false,
        sortTitle: '',
        sort: [
            { active: false, value: 'Цена: по возрастанию', hash: 'sortby=priceAsc' }, 
            { active: false, value: 'Цена: по убыванию', hash: 'sortby=priceDesc' },
            { active: false, value: 'По названию: от А до Я', hash: 'sortby=nameAsc' },
            { active: false, value: 'По названию: от Я до А', hash: 'sortby=nameDesc' },
            { active: true, value: 'По наличию', hash: 'sortby=stock' }
        ],
        countDisplay: false,
        countTitle: '',
        count: [
            { active: false, value: 6, hash: 'count=6' }, 
            { active: true, value: 12, hash: 'count=12' },
            { active: false, value: 24, hash: 'count=24' }
        ],
        grid: false, // if false = block mode, true = list mode
        callback: {},
        addToBasket: false,
        addToBasketData: {}
    },
    methods: {
        showSortList(){
            this.sortDisplay = !this.sortDisplay
            this.countDisplay = false
        },
        showCountList(){
            this.countDisplay = !this.countDisplay
            this.sortDisplay = false
        },
        goTo(type, index){
            let sort, count;

            if(type == "sort"){
                this.sort.forEach((element, i) => { 
    
                    if(i == index){

                        element.active = true

                        sort = element.hash 

                    } else { element.active = false }
                });

                this.count.forEach(el => { if(el.active) count = el.hash })
            } else if(type == 'count'){
                this.count.forEach((element, i) => { 
                    if(i == index) {
                        element.active = true
                        count = element.hash 
                    } else { element.active = false }
                });

                this.sort.forEach(el => { if(el.active) sort = el.hash })
            }
            window.location.href = `?${sort}&${count}`
        },
        changeGrid(){ this.grid = !this.grid },
        showCallback(i){ this.$set(this.callback, i, !this.callback[i]) },
            // this.callback[i] = !this.callback[i]; 
        showAddToBasket() { this.addToBasket = !this.addToBasket }
    },
    components: {
        callbackComponent, addToBasketComponent
    },
    mounted(){
        const search = window.location.search;

        if(search){
            if(search.indexOf('sortby') + 1){
                this.sort.forEach(element => {

                    if(search.indexOf(element.hash) + 1) {

                        this.sortTitle = element.value;

                        element.active = true

                    } else {

                        element.active = false

                    }
                });
            } else { this.sortTitle = 'По наличию' }

            if(search.indexOf('count') + 1){
                this.count.forEach(element => {

                    if(search.indexOf(element.hash, 1) + 1){

                        this.countTitle = element.value

                        element.active = true

                    } else{

                        element.active = false

                    }
                });
            } else { this.countTitle = '12' }
            
        } else{
            this.sortTitle = 'По наличию';
            this.countTitle = '12';
        }

        const items = document.getElementsByClassName('products__item').length
        for (let i = 0; i < items; i++) {
            this.$set(this.callback, i, false)
        }
    }
})

export default products