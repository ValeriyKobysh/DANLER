import Vue from '../../../../node_modules/vue/dist/vue';
import Carousel3d from 'vue-carousel-3d';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import mixin from '../../../mixins/mixins'
Vue.use(Carousel3d)

Vue.component('carousel', {
    template: `
    <div class="dialog">
        <div class="dialog__overlay" @click="closeDialog"></div>
        <div class="dialog__container carousel">
            <button class="dialog__close dialog__close_color" @click="closeDialog"/>
            <div class="dialog__content">
                <carousel-3d :controls-visible="true" :clickable="false"  :width="640" :height="480">
                    <slide v-for="(image, n) in images" :index="n"><img :src="image"/></slide>
                </carousel-3d>
            </div>
        </div>
    </div>`,
    mixins: [mixin],
    data(){
        return{
        }
    },
    components: {
        Carousel3d, Slide
    },
    props: {
        images: { type: Array }
    },
    methods: {

    }
})

export default Vue.component('carousel')