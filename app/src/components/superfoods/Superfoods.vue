<template>
  <section class="superfoods">
    <h2>Superfoods</h2>
    <ul v-if="superfoods">
      <li v-for="superfood in superfoods" :key="superfood.id">
        {{superfood.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      superfoods: null
    };
  },
 
  created() {
    api.getSuperfoods()
      .then(superfoods => {
        this.superfoods = superfoods;
      });
  }
  
  
};
</script>

<style scoped>
</style>




