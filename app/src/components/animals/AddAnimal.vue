<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="animal.name" require>
    <input v-model="animal.mammal" require>
    <input v-model="animal.weight" require>
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
      animal: {
        name: ''
        // mammal: '',
        // weight: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.animal)
        .then(() => {
          this.animal = { 
            name: ''
            // mammal: '',
            // weight: ''
          };
        });
    }
  }
};
</script>