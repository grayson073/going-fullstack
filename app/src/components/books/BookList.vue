<template>
    <ul v-if="books">
        <li v-for="book in books"
            :key="book.id">
                <RouterLink :to="`/books/${book.id}`">
                {{book.title}}
                </RouterLink>
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    books: null
  }
};
</script>

<style scoped>

</style>
