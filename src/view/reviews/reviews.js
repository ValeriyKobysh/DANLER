import './reviews.sass'

import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search';

let reviews = new Vue({
    el: '#reviews',
    data: {
        visibleForm: false
    },
    methods: {
        visabilityForm(){ this.visibleForm = !this.visibleForm }
    }
})

export default reviews