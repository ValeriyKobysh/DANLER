import './reviews.sass'

import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search';

let reviews = new Vue({
    el: '#reviews',
    data: {
        visibleForm: false,
        dataForm: {
            name: '',
            city: '',
            date: `${new Date().getFullYear()}.${ (new Date().getMonth() + 1 < 10) ? '0' : '' }${new Date().getMonth() + 1}.${ (new Date().getDate() + 1 < 10) ? '0' : '' }${new Date().getDate()}`,
            msg: '',
            rating: [true, false, false, false, false]
        },
        hoverRating: [false, false, false, false, false]
    },
    computed: {
        ratingLength(){
            return this.dataForm.rating.length
        }
    },
    methods: {
        visabilityForm(){ this.visibleForm = !this.visibleForm },
        rating(index){
            
            for (let i = 0; i < this.ratingLength; i++) {

                (index >= i) ? this.$set(this.dataForm.rating, i, true) : this.$set(this.dataForm.rating, i, false)

            }
        },
        hover(index, event){
            for (let i = 0; i < this.ratingLength; i++) {
                if(event.type && event.type === 'mouseout'){
                    this.$set(this.hoverRating, i, false)
                } else {
                    (index >= i) ? this.$set(this.hoverRating, i, true) : this.$set(this.hoverRating, i, false)
                }
            }
        }
    }
})

export default reviews