<template>
  <section v-if="synth">
    <h2>{{synth.name}}</h2>
    <p>
      Polyphonice? {{synth.polyphonic}}
    </p>
    <p>
      Date produced: {{synth.year}}
    </p>
    <p>
      <img :src="synth.image">
    </p>
  </section>
</template>

<script>
import api from '../../services/api.js';

export default {
  data() {
    return {
      synth: null
    };
  },
  created() {
    // console.log('need detail for', this.$route.params.id);
    api.getSynth(this.$route.params.id)
      .then(synth => {
        this.synth = synth;
      });
  }
};
</script>

<style>

</style>