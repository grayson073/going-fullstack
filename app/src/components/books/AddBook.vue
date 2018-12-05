<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="book.title" required>
        <button>Add Title</button>
    </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      book: {
        title: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.book)
        .then(() => {
          this.book = { title: '' };
        });
    }
  }
};
</script>

<style>

</style>
