<template>
  <section>
    <h2>Superheroes</h2>
    <AddSuperhero :onAdd="handleAdd"/>
    <SuperheroList :superheroes="superheroes"/>    
  </section>
</template>

<script>
import api from '../../services/api';
import AddSuperhero from './AddSuperhero';
import SuperheroList from './SuperheroList';

export default {
  data() {
    return {
      superheroes: null,
      error: null
    };
  },
  components: {
    AddSuperhero,
    SuperheroList
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
