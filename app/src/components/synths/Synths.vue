<template>
  <section>
    <h2>Synths</h2>
    <ul v-if="synths">
      <li v-for="synth in synths" :key="synth.id">
        {{synth.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      synths: null,
      error: null
    };
  },
  created() {
    api.getSynths()
      .then(synths => {
        this.synths = synths;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>
