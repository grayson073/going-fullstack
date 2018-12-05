<template>
  <form @submit.prevent="handleSubmit">
    <label>
        Name: 
        <input v-model="guitarist.name" require>
    </label>
    <!-- <label>
        Music Type: 
        <input v-model="guitarist.musicType" require>
    </label>
    <label>
        Year of Birth: 
        <input v-model="guitarist.yob" require>
    </label>
    <label>
        Alive?: 
        <input v-model="guitarist.alive" require>
    </label> -->
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
      guitarist: {
        name: '',
        // musicType: '',
        // yob: 0,
        // alive: false,

      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.guitarist)
        .then(() => {
          this.guitarist = { name: '' };
        });
    }
  }
};
</script>

<style>
</style>