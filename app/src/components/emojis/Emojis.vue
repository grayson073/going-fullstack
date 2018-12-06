<template>
    <section>
        <h2>Them Emojis!</h2>

        <AddEmoji :onAdd="handleAdd"/>

        <EmojiList :emojis="emojis"
          :onDelete="handleDelete"/>        
    </section>
</template>

<script>

import api from '../../services/api.js';
import AddEmoji from './AddEmoji';
import EmojiList from './EmojiList';

export default {
  data() {
    return {
      emojis: null
    };
  },
  components: {
    AddEmoji,
    EmojiList
  },
  created() {
    api.getEmojis()
      .then(emojis => {
        this.emojis = emojis;
      });
  },
  methods: {
    handleAdd(emoji) {
      return api.addEmoji(emoji)
        .then(saved => {
          this.emojis.push(saved);
        });
    },
    handleDelete(emoji) {
      api.deleteEmoji(emoji)
        .then(() => {
          api.getEmojis()
            .then(emojis => {
              this.emojis = emojis;
            });
        });
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
