<template>
  <form @submit.prevent="handleSubmit">
        <input v-model="guitarist.name" placeholder="Name" require>
        <input v-model="guitarist.musicType" placeholder="Music Type" require>
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
input {
  padding: .5em .6em;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  margin: 5px;
}
button {
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    border-radius: 4px;
    font-weight: bold;
    background: #6AD58B;
    transition: background 0.3s ease;
}
button:hover {
  opacity: 1;
  background: #3ac162;
  text-decoration: none;
  color: white;
}
</style>