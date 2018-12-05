<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label>
        <span>Name:</span>    
          <input v-model="superfood.name" require>
      </label>    
      <label>
        <span>Benefits:</span>    
          <input v-model="superfood.benefits" require>
      </label>    
      <label>
        <span>Anti-Inflammatory:</span>    
          <input v-model="superfood.anti_inflammatory" type="checkbox">
      </label>    
      <button>Add</button>
    </fieldset>  
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function,
    superfoodToUpdate: Object
  },
  data() {
    const update = this.superfoodToUpdate || {};
    return {
      superfood: {
        name: update.name || '',
        benefits: update.benefits || '',
        anti_inflammatory: update.ant_inflammatory || false
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.superfood)
        .then(() => {
          this.superfood = { name: '' };
        });
    }
  }
};
</script>

<style scoped>
button {
  border-radius: 8px;
  background-color: yellowgreen;
  margin-left: 8px;
}
fieldset {
  border-radius: 5px;
  border: 3px solid;
  border-color: yellowgreen;
  background-color: green;
  color: yellowgreen;
  font-weight: bold;
  padding-right: 5px;
}
</style>
