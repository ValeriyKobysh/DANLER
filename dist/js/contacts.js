webpackJsonp([6],{67:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t(68),s=(t.n(a),t(4),t(0)),o=t.n(s),n=(t(2),t(3),t(5),t(1)),l=t(13),u=t(8),d=t(9),r=t.n(d);o.a.use(l.a),o.a.use(u.b),o.a.directive("mask",u.a),o.a.use(r.a);new o.a({el:"#contacts",mixins:[n.a,r.a.mixin],data:{formFields:{name:"",phone:"",email:"",msg:""}},validators:{"formFields.name":e=>d.Validator.value(e).required("Обязательное поле"),"formFields.email":e=>d.Validator.value(e).email("Введите корректный email"),"formFields.phone":e=>d.Validator.value(e).required("Обязательное поле")},methods:{postRequest:function(){this.$validate().then(function(e){e&&this.$http.post("/index.php?p1=/",Object.assign(this.formFields,{func:"getCallback"}),{emulateJSON:!0}).then(function(e){this.ok=!0,this.resetField(this.formFields),setTimeout(()=>{this.ok=!1,this.show=""},1500)},function(e){console.log(e)})})}}})},68:function(e,i){}},[67]);