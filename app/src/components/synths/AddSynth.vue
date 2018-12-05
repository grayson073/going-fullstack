<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label>
        Synth name: <input v-model="synth.name" required>
      </label>
      <br>
      <label>
        Image url: <input v-model="synth.image">
      </label>
      <br>
      <label>
        Polyphonic?
          Yes:<input type="radio" v-model="synth.polyphonic" v-bind:value="true">
          No:<input type="radio" v-model="synth.polyphonic" v-bind:value="false">
      </label>
      <br>
      <label>
        Date produced: <input v-model.number="synth.year" required>
      </label>
      <p>
        <button>Add</button>
      </p>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      synth: {
        name: '',
        image: '',
        polyphonic: '',
        year: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.synth)
        .then(() => {
          this.synth = { name: '' };
        });
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
h4 {
  margin: 0;
}
button {
  background-color: cyan;
  border-radius: 8px;
}
button:hover {
  background-color: violet;
}
</style>
