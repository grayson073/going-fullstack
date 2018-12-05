<template>
    <section>
        <h2>Sup Emojis!</h2>
        <button @click="handle">Fetch</button>
    </section>
</template>

<script>

import api from '../../services/api.js';

export default {
  methods: {
    handle() {
      api.getEmojis().then(emojis => {
        console.log(emojis);
      });
    }
  }
};
</script>

<style>

</style>
