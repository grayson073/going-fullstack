<template>
  <section class="superfoods">
    <h2>Superfoods</h2>
    <AddSuperfood :onAdd="handleAdd"/>
    <SuperfoodsList :superfoods="superfoods"/>
  </section>
</template>

<script>
import api from '../../services/api';
import AddSuperfood from './AddSuperfood';
import SuperfoodsList from './SuperfoodsList';
export default {
  data() {
    return {
      superfoods: null
    };
  },
  components: {
    AddSuperfood,
    SuperfoodsList
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
p {
  font-size: 1.15em;
  font-weigth: bolder;
  color: green;
}
.superfoods {
  color: green;
}
</style>




