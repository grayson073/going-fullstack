<template>
    <ul  v-if="superfoods">
      <li class="superfoods" v-for="superfood in superfoods" :key="superfood.id">
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

<style scoped>
a {
  color: green;
  font-size: 1.00em;
}
</style>
