<div class="dialog" id="dialog-callback" :class="show">
    <div class="dialog__overlay" @click="closeDialog"></div>

    <div class="dialog__container">
        <button class="dialog__close" @click="closeDialog"></button>

        <div class="dialog__content" v-if="!ok">

            <div class="dialog__title">Оставьте свой номер телефона и представитель компании свяжется с Вами в ближайшее время</div>

            <div class="dialog__group">
                <input class="field dialog__field" type="text" placeholder="Ваше имя" v-model="formFields.name"/><span class="error-msg">{literal} {{errorFields.name}} {/literal}</span>
            </div>

            <div class="dialog__group">
                <input class="field dialog__field" type="email" placeholder="Ваш email" v-model="formFields.email" {literal} pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/" {/literal}/><span class="error-msg">{literal} {{errorFields.email}} {/literal}</span>
            </div>

            <div class="dialog__group">
                <input class="field dialog__field" type="tel" v-mask="'(###) ###-##-##'" placeholder="Ваш телефон" v-model="formFields.phone"/><span class="error-msg">{literal} {{errorFields.phone}} {/literal}</span>
            </div>

            <button class="btn btn_accent dialog__btn" type="button" @click="postRequest">Перезвонить</button>
        </div>

        <div class="dialog__content" v-else="v-else">
            <div class="dialog__title">Ваш запрос успешно принят</div>
        </div>
    </div>
</div>
