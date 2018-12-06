<template>
    <ul v-if="movies">
        <li v-for="movie in movies" :key="movie.id">
            <!-- <RouterLink :to="`/movies/${id}">{{movie.name}}</RouterLink> -->
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    movies:null
  }
};
</script>

<style>

</style>
