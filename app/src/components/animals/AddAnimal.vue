<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name: 
        <input v-model="animal.name" require>
      </label>
    </p>
    
    <p>
      <label>Weight:
        <input v-model="animal.weight" type="number" require>
      </label>
    </p>

    <p>
      <label>Mammal (T/F):
        <select v-model="animal.mammal">
          <option value="" disabled>Select</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </label>
    </p>

    <p>
    <label>Size:</label>
      <select v-if="sizes" 
        v-model="animal.sizeId"
        required
      >
        <option value="-1" disabled>Select a Size</option>
        <option v-for="size in sizes"
          v-bind:key="size.id"
          v-bind:value="size.id"
        >
          {{size.name}} ({{size.shortName}})
        </option>
      </select>
    </p>

    <label>Image:
      <input v-model="animal.image">
    </label>
    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initAnimal() {
  return {
    name: '',
    weight: '',
    mammal: '',
    image: '',
    sizeId: -1,
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      animal: initAnimal(),
      sizes: null
    };
  },
  created() {
    api.getSizes()
      .then(sizes => {
        this.sizes = sizes;
      });
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.animal)
        .then(() => {
          this.animal = initAnimal();
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