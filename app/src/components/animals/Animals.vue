<template>
  <section class="animals">
    <h2>Animals</h2>

    <AddAnimal v-bind:onAdd="handleAdd"/>

    <ul v-if="animals">
      <li v-for="animal in animals" :key="animal.id">
        <h3>{{animal.name}}</h3>
        <div>
          <img v-bind:src="animal.image">
          <p>Mammal: {{animal.mammal}}</p>
          <p>Weight: {{animal.weight}} pounds</p>
        </div>
      </li>
    </ul>
  </section> 
</template>

<script>
import api from '../../services/api';
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

<style>
  li {
    list-style-type: none;
    border: 2px solid black;
    margin-bottom: 5px;
    width: 200px;
  }
  h3 {
    text-align: center;
  }

</style>