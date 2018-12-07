<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="campground.name" require>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function,
  },
  data() {
    return {
      campground: {
        name: ''
      }
    };
  }
};
</script>

<style>

</style>
