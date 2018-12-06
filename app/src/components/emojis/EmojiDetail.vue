<template>
<h1>yo</h1>
  <!-- <section>
    <h2>{{emoji.name}}</h2>
    <img :src="emoji.image">
    <p>Year of Birth: {{emoji.yob}}</p>
    <p v-if="emoji.goodness">Good Emoji</p>
    <p v-else>Bad Emoji</p>
  </section> -->
</template>

<script>

import api from '../../services/api';

export default {
  data() {
    return {
      emoji: null
    };
  },
  created() {
    api.getEmoji(this.$route.params.id);
  }
};
</script>

<style>

</style>
