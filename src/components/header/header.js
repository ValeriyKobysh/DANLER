import Vue from '../../../node_modules/vue/dist/vue';
import callbackComponent from '../dialog/callback/callback'
import VueResource from 'vue-resource'
import basket from '../basket/basket'
import mobileComponent from '../mobile/mobile'

Vue.use(VueResource)

let header = new Vue({
    el: '#header',
    data: {
        basketList: false,
        phoneList: false,
        locationList: false,
        callback: false,
        mobile: false,
        catalog: [],
        mobileMenu: [],
    },
    created(){

    },
    components: {
        basket, callbackComponent, mobileComponent
    },
    methods: {
        showPhones(){ 
            this.phoneList = !this.phoneList;
            this.locationList = false;
            this.basketList = false
        },
        showLocation(){ 
            this.locationList = !this.locationList;
            this.phoneList = false
            this.basketList = false
        },
        showForm(){
            this.callback = !this.callback
        },
        showBasket(){
            this.basketList = !this.basketList
            this.phoneList = false
            this.locationList = false
        },
        showMobile(){
            this.mobile = !this.mobile
        }
    },
    created(){
        const nav = document.querySelector('.header__nav'),
            items = [].slice.call(nav.getElementsByClassName('menu__item'));
        
            items.forEach(element => {
                const target = element.firstElementChild
                this.mobileMenu.push({
                    home: target.href,
                    title: target.textContent
                })
            });

        // this.$http.post('/get_catalog', { func: 'catalog' }, { emulateJSON: true })
        //     .then(response => {
        //         console.log(response);
        //     }, error => {
        //         console.log(error);
        //     })
    }
})


export default header;

