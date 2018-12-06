<template>
  <section v-if="synth">
    <RouterLink :to="`/synths`"><h3>Back</h3></RouterLink>
    <h2>{{synth.name}}</h2>
    <p>
      <span v-if="synth.polyphonic === true">Polyphonic</span>
      <span v-else>Monophonic</span>
    </p>
    <p>
      Date produced: {{synth.year}}
    </p>
    <p>
      <img :src="synth.image">
    </p>
    <button @click="handleDelete">Delete</button>
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
    api.getSynth(this.$route.params.id)
      .then(synth => {
        this.synth = synth;
      });
  },
  methods: {
    handleDelete() {
      api.deleteSynth(this.synth.id)
        .then(() => {
          this.$router.push('/synths');
        });
    }
  }
};
</script>

<style scoped>
img {
  width: auto;
}
</style>