<template>
  <section>
    <h2>Synths</h2>
    <AddSynth :onAdd="handleAdd"/>
    <ul v-if="synths">
      <li v-for="synth in synths" :key="synth.id">
        {{synth.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddSynth from './AddSynth';

export default {
  data() {
    return {
      synths: null,
      error: null
    };
  },
  components: {
    AddSynth
  },
  created() {
    api.getSynths()
      .then(synths => {
        this.synths = synths;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(synth) {
      console.log('would add', synth.name);
      // return api.addSynth(synth)
      //   .then(saved => {
      //     this.synths.push(saved);
      //   });
    }
  }
};
</script>

<style>

</style>
