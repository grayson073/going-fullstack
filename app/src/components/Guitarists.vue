<template>
    <section class="guitarists">
    <h2>Guitarists</h2>
    
    <AddGuitarist :onAdd="handleAdd"/>

    <ul v-if="guitarists">
      <li v-for="guitarist in guitarists" :key="guitarist.id">
        {{guitarist.name}}
        <!-- {{guitarist.musicType}} -->
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../services/api';
import AddGuitarist from './AddGuitarist';

export default {
  data() {
    return {
      guitarists: null,
      error: null
    };
  },
  components: {
    AddGuitarist
  },
  created() {
    api.getGuitarists()
      .then(guitarists => {
        this.guitarists = guitarists;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(guitarist) {
      return api.addGuitarist(guitarist)
        .then(saved => {
          this.guitarists.push(saved);
        });
    }
  }
  
};
</script>

<style>

</style>
