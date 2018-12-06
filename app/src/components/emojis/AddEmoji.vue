<template>
    <form @submit.prevent="handleSubmit">
        <label>
            Name:
            <input v-model="emoji.name" required>
        </label>
        <label>
            Image URL:
            <input v-model="emoji.image" required>
        </label>
        <label>
            Year of Birth:
            <input placeholder="yyyy" v-model="emoji.yob" required>
        </label>
        <label>
            Goodness:
            <input placeholder="true/false" v-model="emoji.goodness" required>
        </label>
        <button>Add</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      emoji: {}
    };
  },
  props: {
    onAdd: Function
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.emoji)
        .then(() => {
          this.emoji = {};
        });
    }
  }
};
</script>

<style>

</style>
