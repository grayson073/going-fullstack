<template>
  <form @submit.prevent="handleSubmit">
    <label>Name: 
      <input v-model="animal.name" require>
    </label>
    <label>Mammal (T/F):
      <input v-model="animal.mammal" require>
    </label>
    <label>Weight
      <input v-model="animal.weight" require>
    </label>
    <label>Image
      <input v-model="animal.image">
    </label>
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
      animal: {}
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.animal)
        .then(() => {
          this.animal = {};
        });
    }
  }
};
</script>