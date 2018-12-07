<template>
  <section v-if="animal">
    <div id="detail">
      <h2>{{animal.name}}</h2>
      <img v-bind:src="animal.image"/>
      <p>
        Weight: {{animal.weight}} pounds
      </p>
      <p>
        Mammal: {{animal.mammal}}
      </p>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      animal: null
    };
  },
  created() {
    api.getAnimal(this.$route.params.id)
      .then(animal => {
        this.animal = animal;
      });
  }
};
</script>

<style scoped>
  section {
    border: 2px solid black;
    text-align: center;
  }
  section img {
    max-width: 300px;
  }
  .detail {
    border: 1px solid black;
    width: 600px;
  }

</style>