import './order.sass'

import header from '../../components/header/header';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search';
import mixin from '../../mixins/mixins'
//#region import plugins
import Vue from '../../../node_modules/vue/dist/vue';
//#endregion

let order = new Vue({
    el: '#order',
    data: {
        paymentMethods: [
            { id: 0, title: 'Карта Приват Банка' },
            { id: 1, title: 'Оплата наличными' },
            { id: 2, title: 'Наложений платёж' }
        ]
    },
    created(){
        //Fetch payment method
        //Fetch 
    }
})

export default order