import './article.sass'

import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import socialComponent from '../../components/social/social';
import Search from '../../components/search/search';

let article = new Vue({
    el: '#article',
    data: {

    }, 
    methods: {
    },
    components: { socialComponent }
})

export default article