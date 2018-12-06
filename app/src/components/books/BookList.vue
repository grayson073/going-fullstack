<template>
    <ul v-if="books">
        <li v-for="book in books"
            :key="book.id">
            {{book.title}}
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

<style>

</style>
