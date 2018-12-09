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
  },
  created() {
    this.documentListener = event => {
      if(event.keyCode === 27) {
        this.onClose();
      }
    };

    document.addEventListener('keyup', this.documentListener);
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
    margin: 0px;
    top: 10px; right: 5px;
  }
</style>
