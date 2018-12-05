<template>
  <form @submit.prevent="handleSubmit">
        <input v-model="guitarist.name" placeholder="Name" require>
        <input v-model="guitarist.type" placeholder="Music Type" require>
        <input type="number" v-model="guitarist.yob" placeholder="Year of Birth" require>
    <button>Add</button>
  </form>
</template>

<script>
function initGuitarist() {
  return {
    name: '',
    type: '',
    yob: '',
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      guitarist: initGuitarist()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.guitarist)
        .then(() => {
          this.guitarist = initGuitarist();
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