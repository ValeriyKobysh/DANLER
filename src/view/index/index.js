import './index.sass';

import header from '../../components/header/header'
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search';
import Flickity from 'vue-flickity';
import { VueTyper } from 'vue-typer';

let index = new Vue({
    el: '#index',
    data: {
        lastProducts: {
            tabs: []
        },
        flickityOptions: {
            initialIndex: 0,
            accessibility: true,
            prevNextButtons: true,
            pageDots: true,
            wrapAround: true
        },
        typeds: [],
        video: false,
        tabs: [],
        trustOptions: {
            initialIndex: 0,
            accessibility: true,
            pageDots: true,
            prevNextButtons: false,
            autoPlay: 2000
        }
    },
    methods: {
        onTyped(index){
            this.$set(this.typeds, index, true)
        },
        toggleTabs(index){
            this.lastProducts.tabs.forEach((element, i) => {
                index == i ? this.$set(this.lastProducts.tabs, i, true) : this.$set(this.lastProducts.tabs, i, false);
            });
        },
        toggleItem(event){
            let windowWidth = window.innerWidth,
                items = document.getElementsByClassName(event.target.classList),
                count  = items.length
            
            if(windowWidth <= 575){
                for (let index = 0; index < count; index++) {
                    const element = items[index].nextElementSibling;

                    if(element == event.target.nextElementSibling){
                        element.classList.toggle('active')
                    } else {
                        element.classList.remove('active')
                    }
                
                }
                
            }
        },
        toggleVideo(){
            this.video = !this.video;
        },
        toggleControls(index){
            this.tabs.forEach((element, i) => {
                index == i ? this.$set(this.tabs, i, true) : this.$set(this.tabs, i, false);
            });
        },
    },
    components: {
        Flickity, VueTyper
    },
    created(){
        const tabs = document.querySelector('.last-products__content-list').children.length

        for (let i = 0; i < tabs; i++) {
            i == 0 ? this.$set(this.lastProducts.tabs, i, true) : this.$set(this.lastProducts.tabs, i, false);
        }

        //calculate sliders

        const sliders = document.querySelector('.index__slider').children.length

        for (let i = 0; i < sliders; i++) { this.$set(this.typeds, i, false); }

        //calculate tabs
        // const controls = document.querySelector('.index__control-list').children.length;

        // for (let i = 0; i < controls; i++) {
        //     i == 0 ? this.$set(this.tabs, i, true) : this.$set(this.tabs, i, false);
        // }

    }
})
