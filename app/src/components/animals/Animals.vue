<template>
  <section class="animals">
    <h2>Animals</h2>

    <AddAnimal v-bind:onAdd="handleAdd"/>

    <ul v-if="animals">
      <li v-for="animal in animals" :key="animal.id">
        <div class="info">
          <h3>{{animal.name}}</h3>
          <p>Mammal: {{animal.mammal}}</p>
          <p>Weight: {{animal.weight}} pounds</p>
        </div>
        <img v-bind:src="animal.image">
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
    width: 450px;
    height: 450px;
    border: 1px solid black;
    text-align: center;
    margin: 5px 5px;
  }
  h3 {
    text-align: center;
    z-index: 1;
    margin: 0px;
  }
  .info {
    background: rgba(255, 255, 255, 0.8);
    margin-top: 0px;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  li img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

</style>