<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="singer.name" require>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      singer: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.singer)
        .then(() => {
          this.singer = { name: '' };
        });
    }
  }
};
</script>

<style>

</style>
