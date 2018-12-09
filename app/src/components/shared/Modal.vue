<template>
  <section class="modal">
    <div class="content">
      <button class="close" @click="onClose">X</button>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    onClose: Function
  }
};
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(193, 69, 69);
  }

  .content {
    position: relative;
    padding: 50px;
    background-color: aliceblue;
  }

  .close {
    position: absolute;
    top: 5px; right: 5px;
  }
</style>
