<template>
  <section>
    <h2>Superheroes</h2>

    <ul v-if="superheroes">
      <li v-for="superhero in superheroes" :key="superhero.id">
        {{superhero.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      superheroes: null
    };
  },
  created() {
    api.getSuperheroes()
      .then(superheroes => {
        this.superheroes = superheroes;
      });
  } 
};

</script>

<style>

</style>
