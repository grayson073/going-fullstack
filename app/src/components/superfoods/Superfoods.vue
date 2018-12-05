<template>
  <section class="superfoods">
    <h2>Superfoods</h2>

    <AddSuperfood :onAdd="handleAdd"/>
    <ul v-if="superfoods">
      <li v-for="superfood in superfoods" :key="superfood.id">
        {{superfood.name}}
        <p>Benefits: {{superfood.benefits}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddSuperfood from './AddSuperfood';
export default {
  data() {
    return {
      superfoods: null
    };
  },
  components: {
    AddSuperfood
  },
  created() {
    api.getSuperfoods()
      .then(superfoods => {
        this.superfoods = superfoods;
      });
  },
  methods: {
    handleAdd(superfood) {
      return api.addSuperfood(superfood)
        .then(saved => {
          this.superfoods.push(saved);
        });
    }
  }
  
  
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>




