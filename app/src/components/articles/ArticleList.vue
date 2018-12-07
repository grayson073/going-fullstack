<template>
  <ul v-if="articles">
    <li v-for="article in articles" :key="article.id">
      <RouterLink :to="`/articles/${articles.id}`">{{article.title}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    students: null
  }
};
</script>

<style lang="postcss" scoped>
</style>