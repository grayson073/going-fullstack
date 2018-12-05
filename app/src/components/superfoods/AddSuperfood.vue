<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="superfood.name" require>
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
      superfood: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.superfood)
        .then(() => {
          this.superfood = { name: '' };
        });
    }
  }
};
</script>

<style>
</style>
