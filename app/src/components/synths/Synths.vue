<template>
  <section>
    <h2>Synths</h2>
    <AddSynth :onAdd="handleAdd"/>
    <ul v-if="synths">
      <li v-for="synth in synths" :key="synth.id">
        <h3>{{synth.name}}</h3>
        <p>Polyphonic? {{synth.polyphonic}}</p>
        <p>Date produced: {{synth.year}}</p>
        <img :src="synth.image">
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
      return api.addSynth(synth)
        .then(saved => {
          this.synths.push(saved);
        });
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
}
h3 {
  margin: 0;
}
img {
  width: 150px;
}
p {
  margin: 0;
}
</style>
