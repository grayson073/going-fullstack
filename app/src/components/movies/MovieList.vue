<template>
    <ul v-if="movies">
        <li v-for="movie in movies" :key="movie.id">
            <RouterLink class="list" :to="`/movies/${movie.id}`"> {{movie.name}} </RouterLink>
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    movies: null
  }
};
</script>

<style>
    .list {
        text-decoration: none;
        color: white;
    }

</style>
