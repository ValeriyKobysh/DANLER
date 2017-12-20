import Vue from '../../../node_modules/vue/dist/vue';

import basket from '../basket/basket'

let header = new Vue({
    el: '#header',
    data: {
        basketList: false,
        phoneList: false,
        locationList: false
    },
    created(){

    },
    components: {
        basket
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

        },
        showBaskett(){
            this.basketList = !this.basketList
            this.phoneList = false
            this.locationList = false
        }
    },
    created(){
    }
})


export default header;

