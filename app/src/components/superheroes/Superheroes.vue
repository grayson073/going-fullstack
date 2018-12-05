<template>
  <section>
    <h2>Superheroes</h2>

    <AddSuperhero :onAdd="handleAdd"/>

    <ul v-if="superheroes">
      <li v-for="superhero in superheroes" :key="superhero.id">
        {{superhero.name}}
        {{superhero.age}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddSuperhero from './AddSuperhero';

export default {
  data() {
    return {
      superheroes: null,
      error: null
    };
  },
  components: {
    AddSuperhero
  },
  created() {
    api.getSuperheroes()
      .then(superheroes => {
        this.superheroes = superheroes;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(superhero) {
      return api.addSuperhero(superhero)
        .then(saved => {
          this.superheroes.push(saved);
        });
    }
  } 
};

</script>

<style>

</style>
