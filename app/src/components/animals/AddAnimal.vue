<template>
  <form @submit.prevent="handleSubmit">
    <label>Name: 
      <input v-model="animal.name" require>
    </label>
    
    <label>Weight
      <input v-model="animal.weight" type="number" require>
    </label>

    <label>Mammal (T/F):
      <select v-model="animal.mammal">
        <option value="" disabled selected >Select</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
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

<style scoped>
  label {
    margin: 10px;
  }

</style>