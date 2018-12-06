<template>
  <ul v-if="synths">
    <li v-for="synth in synths" :key="synth.id">
      <RouterLink :to="`/synths/${synth.id}`">
        <h3>{{synth.name}}</h3>
        <img :src="synth.image">
      </RouterLink>
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
