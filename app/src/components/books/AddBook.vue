<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="book.name" require>
        <button>Add</button>
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
        .this(() => {
          this.book = { title: '' };
        });
    }
  }
};
</script>

<style>

</style>
