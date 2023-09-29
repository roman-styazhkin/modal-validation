<template>
  <Button @click='visible = true'>Открыть модальное окно</Button>
  <Modal v-show="visible" @close='visible = false'>
    <Form @submitForm='submitForm' />
  </Modal>
</template>

<script>
import Form from './components/Form';
import Modal from './components/ui/Modal';
import Button from './components/ui/Button';

export default {
  name: 'App',
  components: { Form, Modal, Button },
  data: () => ({
    visible: false,
  }),

  methods: {
    submitForm(user) {
      console.log(user);
      this.visible = false;
    }
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
