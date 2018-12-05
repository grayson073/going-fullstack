<template>
  <ul v-if="guitarists">
    <li v-for="guitarist in guitarists" :key="guitarist.id">
      <RouterLink :to="`/guitarists/${guitarist.id}`">{{guitarist.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    guitarists: null
  }
};
</script>

<style scoped>

</style>