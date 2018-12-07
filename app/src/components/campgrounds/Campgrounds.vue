<template>
  <section class="campgrounds">
    <h2>Oregon Campgrounds</h2>
    <AddCampground :onAdd="handleAdd" />
    <campgroundList :campgrounds="campgrounds" />
  </section>
</template>

<script>
import api from '../../services/api';
// import AddCampground from './AddCampground';

export default {
  data() {
    return {
      campgrounds: null,
      error: null
    };
  },
  created() {
    api.getCampgrounds()
      .then(campgrounds => {
        this.campgrounds = campgrounds;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>
