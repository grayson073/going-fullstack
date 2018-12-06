<template>
  <ul v-if="emojis">
    <li v-for="emoji in emojis" :key="emoji.id">
      <RouterLink :to="`/emojis/${emoji.id}`"><h3>{{emoji.name}}</h3></RouterLink>
      <img :src="emoji.image">
      <RouterLink :to="`/emojis/${emoji.id}`"><button @click="onEdit(emoji)">Edit</button></RouterLink>
      <button @click="onDelete(emoji)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    emojis: Array,
    onEdit: Function,
    onDelete: Function
  }
};
</script>

<style>

</style>
