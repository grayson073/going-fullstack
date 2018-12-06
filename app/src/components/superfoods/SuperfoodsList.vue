<template>
    <ul v-if="superfoods">
      <li v-for="superfood in superfoods" :key="superfood.id">
        <RouterLink :to="`/superfoods/${superfood.id}`">{{superfood.name}}</RouterLink>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    superfoods: null
  }
};
</script>

<style lang="postcss" scoped>
</style>
