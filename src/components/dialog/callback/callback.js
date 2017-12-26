import Vue from '../../../../node_modules/vue/dist/vue';
import VueResource from 'vue-resource';
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'
import SimpleVueValidation from 'simple-vue-validator';
import { Validator } from 'simple-vue-validator';
import mixin from '../../../mixins/mixins'

Vue.use(VueResource)
Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);
Vue.use(SimpleVueValidation);

Vue.component('callback', {
    template: `
    <div class="dialog callback">
        <div class="dialog__overlay desktop" @click="closeDialog"></div>
        <div class="dialog__container callback">
            <button class="dialog__close" @click="closeDialog"/>
            <div class="dialog__content" v-if="!ok">
                <div class="dialog__title">Оставьте свой номер телефона и представитель компании свяжется с Вами в ближайшее время</div>
                <div class="dialog__group">
                    <input class="field dialog__field" type="text" placeholder="Ваше имя" v-model="formFields.name">
                    <span class="error-msg" v-if="validation.hasError('formFields.name')">{{ validation.firstError('formFields.name') }}</span>
                </div>
                <div class="dialog__group">
                    <input class="field dialog__field" type="email" placeholder="Ваш email" v-model="formFields.email" pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/">
                    <span class="error-msg" v-if="validation.hasError('formFields.email')">{{ validation.firstError('formFields.email') }}</span>
                </div>
                <div class="dialog__group dialog__group_last">
                    <input class="field dialog__field" type="tel" v-mask="'(###) ###-##-##'" placeholder="Ваш телефон" v-model="formFields.phone">
                    <span class="error-msg" v-if="validation.hasError('formFields.phone')">{{ validation.firstError('formFields.phone') }}</span>
                </div>
                <button class="dialog__btn" type="button" @click="postRequest">Перезвонить</button>
            </div>
            <div class="dialog__content" v-else></div>
        </div>
    </div>`,
    mixins: [SimpleVueValidation.mixin, mixin],
    data(){
        return {
            ok: false,
            formFields: {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    validators: {
        'formFields.name'(value){
            return Validator.value(value).required('Обязательное поле');
        },
        'formFields.email'(value){
            return Validator.value(value).email('Введите корректный email');
        },
        'formFields.phone'(value){
            return Validator.value(value).required('Обязательное поле');
        }
    },
    methods: {
        postRequest: function(){
            this.$validate()
                .then(function (success) {
                    if (success) {
                        this.$http.post(
                            '/index.php?p1=/',
                            Object.assign(this.formFields, {func: 'getCallback'}),
                            { emulateJSON: true } 
                        )
                        .then(function(success){
            
                            this.ok = true;
                            this.resetField(this.formFields)
            
                            setTimeout(() => {
                                this.ok = false;
                                this.show = '';
                            }, 1500);
                        }, function(error){
                            console.log(error);
                        })
                    }
            });
        }
    }
})

export default Vue.component('callback')