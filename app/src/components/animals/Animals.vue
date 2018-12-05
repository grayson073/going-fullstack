<template>
  <section class="animals">
    <h2>Animals</h2>
    <AddAnimal v-bind:onAdd="handleAdd"/>
    <AnimalList v-bind:animals="animals"/>
  </section> 
</template>

<script>
import api from '../../services/api';
import AddAnimal from './AddAnimal';
import AnimalList from './AnimalList';

export default {
  data() {
    return {
      animals: null,
      error: null
    };
  },
  components: {
    AddAnimal,
    AnimalList
  },
  created() {
    api.getAnimals()
      .then(animals => {
        this.animals = animals;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(animal) {
      animal.weight = parseInt(animal.weight);
      if(animal.mammal === 'true') {
        animal.mammal = true;
      }
      else {
        animal.mammal = false;
      }
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