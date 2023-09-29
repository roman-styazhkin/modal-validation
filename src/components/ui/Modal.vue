<template>
  <div class="modal" @click='this.$emit("close")'>
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modal',
}
</script>
<style lang='scss' scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    background-color: #fff;
    padding: 40px;
    max-width: 500px;
    border-radius: 10px;
    width: 100%;
    margin: 0 20px;
  }
}
</style>