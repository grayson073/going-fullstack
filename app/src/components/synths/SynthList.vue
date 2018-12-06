<template>
  <ul v-if="synths">
    <li v-for="synth in synths" :key="synth.id">
      <RouterLink :to="`/synths/${synth.id}`"><h3>{{synth.name}}</h3></RouterLink>
      <p>Polyphonic? {{synth.polyphonic}}</p>
      <p>Date produced: {{synth.year}}</p>
      <img :src="synth.image">
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    synths: null
  }
};
</script>

<style>

</style>
