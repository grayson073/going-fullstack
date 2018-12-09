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
    top: 100px; right: 50%; left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    position: relative;
    padding: 50px;
    background-color: rgb(208, 82, 68);
    color: white;
  }

  .close {
    position: absolute;
    top: 5px; right: 5px;
  }
</style>
