<template>
  <ul v-if="emojis">
    <li v-for="emoji in emojis" :key="emoji.id">
      <RouterLink :to="`/emojis/${emoji.id}`">
        <h3>{{emoji.name}}</h3>
        <img :src="emoji.image">
      </RouterLink>
      <button @click="onDelete(emoji)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    emojis: Array,
    onDelete: Function
  }
};
</script>

<style>

</style>
