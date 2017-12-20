import './card.sass';
import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback'
import carouselComponent from '../../components/dialog/carousel/carousel'
import addToBasket from '../../components/dialog/addToBasket/addToBasket'
import VueResource from 'vue-resource';
import Assign from 'lodash.assign';

Vue.use(VueResource)

let card = new Vue({
    el: '#card',
    data: {
        show: '',
        phoneList: false,
        callbackDialog: false,
        carouselDialog: false,
        addToBasketDialog: false,
        urls: [],
        product: {
            id: 0,
            image: '',
            price: 0,
            url: '',
            title: 'Test title'
        },
        addToBasketData: {}
    },
    created(){

    },
    components: {
        callbackComponent, carouselComponent, addToBasket
    },
    methods: {
        showPhoneList(){ 
            this.phoneList = !this.phoneList 
            this.callbackDialog = false
            this.carouselDialog = false
            this.addToBasketDialog = false
        },
        showCallbackDialog(){ 
            this.callbackDialog = !this.callbackDialog
            this.phoneList = false 
            this.carouselDialog = false
            this.addToBasketDialog = false
        },
        showCarouselDialog(){ 
            if(!this.carouselDialog) this.getUrls()
            this.carouselDialog = !this.carouselDialog 
            this.addToBasketDialog = false
            this.phoneList = false
            this.callbackDialog = false
        },
        showAddToBasket(){
            this.addToBasketDialog = !this.addToBasketDialog
            this.phoneList = false 
            this.carouselDialog = false
            this.callbackDialog = false
        },
        addToBasket(event){
            this.$http.post('/index.php?p1=/cart/', 
                Assign({ func: "getProduct" }, { prod_id: parseInt(document.querySelector('.card__buy').id) }),
                { emulateJSON: true })
            .then(response => {
                let data = response.body.result.data;
                this.product.id = data.id;
                this.product.image = data.photo;
                this.product.title = data.name;
                this.product.url = data.url;
                this.product.price = data.amount;
                Basket.add(Object.assign(this.product, { count: 1}))
                this.addToBasketData = Basket.getProduct(this.product.id)
            }, response => {
                console.log('false', response);
            })
            this.showAddToBasket()

        },
        closeDialog(){
            this.show = ''
        },
        delimiter(number){
            Basket.delimiter(number)
        },
        getUrls(){
            let nodes = document.querySelectorAll('.card__info-item')

            nodes.forEach(element => {
                this.urls.push(element.firstElementChild.src)
            });
        }
    }
})
