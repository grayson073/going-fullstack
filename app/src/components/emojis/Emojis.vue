<template>
    <section>
        <h2>Them Emojis!</h2>

        <AddEmoji :onAdd="handleAdd"/>

        <ul v-if="emojis">
          <li v-for="emoji in emojis" :key="emoji.id">
            <h3>{{emoji.name}}</h3>
            <img :src="emoji.image">
          </li>

        </ul>
    </section>
</template>

<script>

import api from '../../services/api.js';
import AddEmoji from './AddEmoji';

export default {
  data() {
    return {
      emojis: null
    };
  },
  components: {
    AddEmoji
  },
  created() {
    api.getEmojis()
      .then(emojis => {
        this.emojis = emojis;
      });
  },
  methods: {
    handleAdd(emoji) {
      console.log(emoji);
    }
  }
};
</script>

<style>
img {
  width: 100px;
}

li {
  list-style: none;
}
</style>
