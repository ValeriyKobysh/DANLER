import './contacts.sass'

import header from '../../components/header/header';
import Vue from '../../../node_modules/vue/dist/vue';
import Basket from '../../components/basket/basket';
import callbackComponent from '../../components/dialog/callback/callback';
import Search from '../../components/search/search';
import mixin from '../../mixins/mixins'
//#region import plugins
import VueResource from 'vue-resource';
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'
import SimpleVueValidation from 'simple-vue-validator';
import { Validator } from 'simple-vue-validator';
//#endregion

Vue.use(VueResource)
Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);
Vue.use(SimpleVueValidation);

let contacts = new Vue({
    el: '#contacts',
    mixins: [ mixin, SimpleVueValidation.mixin ],
    data: {
        formFields: {
            name: '',
            phone: '',
            email: '',
            msg: ''
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


