<template>
  <section class="superfoods">
    <h2>Superfoods</h2>

    <AddSuperfood :onAdd="handleAdd"/>
    <ul v-if="superfoods">
      <li v-for="superfood in superfoods" :key="superfood.id">
        {{superfood.name}}
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
          console.log('saved', saved);
          // this.students.push(saved);
        });
    }
  }
  
  
};
</script>

<style scoped>
</style>




