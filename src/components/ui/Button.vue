<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'button'
}
</script>
<style lang="scss" scoped>
.button {
  font-family: inherit;
  background-color: #0D6EFD;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #0D6EFD;
  cursor: pointer;
  height: 35px;
  max-width: 200px;
  width: 100%;
  display: block;

  &:hover {
    background-color: #0a3c88;
  }
}
</style>