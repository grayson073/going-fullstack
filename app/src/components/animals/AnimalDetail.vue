<template>
  <section v-if="animal">
    <h2>{{animal.name}}</h2>
    <p>
      Weight: {{animal.weight}} pounds
    </p>
    <p>
      Mammal: {{animal.mammal}}
    </p>
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