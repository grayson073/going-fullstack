<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="synth.name">
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
      synth: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.synth)
        .then(() => {
          this.synth = { name: '' };
        });
    }
  }
};
</script>

<style>

</style>
