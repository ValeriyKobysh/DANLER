import './article.sass'

import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search';

import mixin from '../../mixins/mixins'

let article = new Vue({
    el: '#article',
    mixins: [mixin],
    data: {

    }, 
    methods: {
    },
})

export default article