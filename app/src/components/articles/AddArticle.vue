<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="article.title" require>
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
      article: {
        title: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.article)
        .then(() => {
          this.article = { title: '' };
        });
    }
  }
};
</script>

<style>

</style>
