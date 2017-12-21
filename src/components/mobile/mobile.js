import Vue from '../../../node_modules/vue/dist/vue';

Vue.component('mobile', {
    template: `
    <div class="mobile">
        <ul class="mobile__list list">
            <li class="mobile__item" v-for="(item, n) in data" :key="n">
                <a class="mobile__link link" :href="item.home">{{item.title}}</a>
            </li>
        </ul>
    </div>`,
    data(){
        return{

        }
    },
    props: {
        data: { type: Array }
    }
})

export default Vue.component('mobile')