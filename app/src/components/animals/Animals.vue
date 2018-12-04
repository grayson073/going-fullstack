<template>
  <section class="animals">
    <h2>Animals</h2>

    <AddAnimal v-bind:onAdd="handleAdd"/>

    <ul v-if="animals">
      <li v-for="animal in animals" :key="animal.id">
        {{animal.anme}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../service/api';
import AddAnimal from './AddAnimal';

export default {
  data() {
    return {
      animals: null
    };
  },
  components: {
    AddAnimal
  },
  created() {
    api.getAnimals()
      .then(animals => {
        this.animals = animals;
      });
  },
  methods: {
    handleAdd(animal) {
      return api.addAnimal(animal)
        .then(saved => {
          this.animals.push(saved);
        });
    }
  }
};
</script>