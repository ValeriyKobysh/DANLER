import './category.sass'
import header from '../../components/header/header';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback'
import socialComponent from '../../components/social/social'
import Sidebar from '../../components/sidebar/sidedar'
import Search from '../../components/search/search'
import Vue from '../../../node_modules/vue/dist/vue'

let category = new Vue({
    el: '#category',
    data: {

    }, 
    components: { socialComponent }
})

export default category