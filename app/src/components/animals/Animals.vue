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
    list-style: none;
    position: relative;
    width: 250px;
    height: 250px;
    border: 1px solid black;
    text-align: center;
    margin: 5px 5px;
  }
  h3 {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  li img {
    height: 70%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
  }

</style>