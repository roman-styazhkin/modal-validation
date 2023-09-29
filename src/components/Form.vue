<template>
  <form class="form">
    <div class="form__input">
      <input type="text" v-model="user.firstName" name="firstname" placeholder="Имя" autocomplete="off">
      <span v-if="v$.user.firstName.$error">{{ v$.user.firstName.$errors[0].$message }}</span>
    </div>
    <div class="form__input">
      <input type="text" v-model="user.lastName" name="lastname" placeholder="Фамилия" autocomplete="off">
      <span v-if="v$.user.lastName.$error">{{ v$.user.lastName.$errors[0].$message }}</span>
    </div>
    <div class="form__input">
      <InputMask v-model="user.phone" mask="+7-999-999-99-99" placeholder="+7-999-999-99-99" />
      <span v-if="v$.user.phone.$error">{{ v$.user.phone.$errors[0].$message }}</span>
    </div>
    <div class="form__input">
      <input type="text" v-model="user.email" name="email" placeholder="Почта" autocomplete="off">
      <span v-if="v$.user.email.$error">{{ v$.user.email.$errors[0].$message }}</span>
    </div>
    <div class="form__text">
      <textarea class="form__message" name="message" placeholder="Ваше сообщение" autocomplete="off"></textarea>
      <span v-if="v$.user.message.$error">{{ v$.user.message.$errors[0].$message }}</span>
    </div>
    <Button @click='submitForm' type="button">Submit</Button>
  </form>
</template>
<script>
import { useVuelidate } from '@vuelidate/core';
import Button from './ui/Button.vue';
import { required, maxLength, minLength } from '@vuelidate/validators';
import InputMask from 'primevue/inputmask';

export default {
  components: { InputMask, Button },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      }
    }
  },
  validations() {
    return {
      user: {
        firstName: { required, maxLength: maxLength(100) },
        lastName: { maxLength: maxLength(100) },
        phone: { required, minLength: minLength(16) },
        email: { required },
        message: { maxLength: maxLength(500) },
      }
    }
  },

  methods: {
    submitForm() {
      this.v$.$validate();
      if (this.v$.$errors.length) {
        this.v$.$errors.forEach((err) => console.log(err));
        console.log(1);
      } else {
        this.$emit('submitForm', this.user);
        this.user = {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.form {
  &__input {
    input {
      font-family: inherit;
      display: block;
      width: 100%;
      height: 30px;
      padding: 0 10px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__message {
    font-family: inherit;
    width: 100%;
    display: block;
    padding: 10px;
    resize: vertical;
  }

  &__text {
    margin-bottom: 30px;
  }
}
</style>