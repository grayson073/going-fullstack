<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="superhero.name">
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
      superhero: {
        name: '',
        age: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.superhero)
        .then(() => {
          this.superhero = { name: '', age: '' };
        });
    }
  }
};
</script>

<style>

</style>