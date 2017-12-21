import './card.sass';
import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback'
import carouselComponent from '../../components/dialog/carousel/carousel'
import addToBasket from '../../components/dialog/addToBasket/addToBasket'
import VueResource from 'vue-resource';
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'
import SimpleVueValidation from 'simple-vue-validator';
import { Validator } from 'simple-vue-validator';
import Assign from 'lodash.assign';

Vue.use(VueResource)
Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);
Vue.use(SimpleVueValidation);

let card = new Vue({
    el: '#card',
    mixins: [SimpleVueValidation.mixin],
    data: {
        show: '',
        phoneList: false,
        callbackDialog: false,
        carouselDialog: false,
        addToBasketDialog: false,
        urls: [],
        product: { id: 0, image: '', price: 0, url: '', title: 'Test title' },
        addToBasketData: {},
        tabs: { about: true, write: false, review: false },
        fields: { name: '', phone: '', email: '', msg: '' },
        send: false //Відправлене повідомлення
    },
    validators: {
        'fields.name'(value){
            return Validator.value(value).required('Обязательное поле');
        },
        'fields.email'(value){
            return Validator.value(value).email('Введите корректный email');
        },
        'fields.phone'(value){
            return Validator.value(value).required('Обязательное поле');
        }
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
        },
        showTabs(title){
            for (const key in this.tabs) {
                if(key === title){
                    this.tabs[key] = true
                } else{
                    this.tabs[key] = false
                }
            }
        },
        sendMsg(){
            this.$validate()
                .then(function (success) {
                    if (success) {
                        this.$http.post(
                            '/index.php?p1=/',
                            this.fields,
                            { emulateJSON: true } 
                        )
                        .then(function(success){
            
                            this.send = true;
                            for (const key in this.fields) {
                                this.fields[key] = ''
                            }
            
                            setTimeout(() => {
                                this.send = false;
                            }, 1500);
                        }, function(error){
                            console.log(error);
                        })
                    }
            });
        },
        getLocation(){ return window.location.href; },
        shareFB(){ return `https://www.facebook.com/sharer.php?u=${this.getLocation()}` },
        shareGP(){ return `https://plus.google.com/share?url=${this.getLocation()}` },
        shareTW(){ return `https://twitter.com/intent/tweet?text=${this.getLocation()}` },
        shareVK(){ return `http://vkontakte.ru/share.php?url=${this.getLocation()}` }
    },
    mounted(){

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); 
            js.id = id;
            js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11&appId=508620022870463';
            fjs.parentNode.insertBefore(js, fjs);
          }
          (document, 'script', 'facebook-jssdk'));
    }
})
