<template>
  <section v-if="emoji">
    <h2>{{emoji.name}}</h2>
    <img :src="emoji.image">
    <p>Year of Birth: {{emoji.yob}}</p>
    <p>Scale: {{emoji.scale}}</p>
    <p v-if="emoji.goodness">Good Emoji</p>
    <p v-else>Bad Emoji</p>
    <button @click="onEdit">Edit</button>

    <form v-show="edit" @submit.prevent="onUpdate">
      <label>
        <h4>Name:</h4>
        <input v-model="update.name" required>
      </label>
      <label>
        <h4>Image URL:</h4>
        <input v-model="update.image" required>
      </label>
      <label>
        <h4>Year Of Birth:</h4>
        <input v-model="update.yob" required>
      </label>
      <!-- <label>
        <h4>Goodness?</h4>
        <input type="radio" value="1" v-model="update.goodness" required>True
        <input type="radio" value="0" v-model="update.goodness" required>False
      </label> -->
      <label>
        <h4>Scale:</h4>
        <select v-model="update.scale">
          <option disabled value="">Select One</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="neutral">Neutral</option>
        </select>
      </label>
      <button>Update</button>
    </form>
  </section>
</template>

<script>

import api from '../../services/api';

export default {
  data() {
    return {
      emoji: null,
      edit: false,
      update: {}
    };
  },
  created() {
    api.getEmoji(this.$route.params.id)
      .then(emoji => {
        this.emoji = emoji;
      });
  },
  methods: {
    onEdit() {
      this.edit = true;
    },
    onUpdate() {
      api.updateEmoji(this.update, this.$route.params.id);
    }
  }
};
</script>

<style>

</style>
