<template>
  <ul v-if="guitarists">
    <li v-for="guitarist in guitarists" :key="guitarist.id">
      <RouterLink :to="`/guitarists/${guitarist.id}`" class="guitarists">{{guitarist.name}}</RouterLink>
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
.guitarists {
    color: #000000;
}
li {
    padding: 20px;
}
</style>