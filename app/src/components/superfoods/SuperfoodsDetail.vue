<template>
  <section v-if="superfood">
    <h2>{{superfood.name}}</h2>
    <p>
     Benefits:  {{superfood.benefits}}
    </p>
    <p v-if="superfood.is_anti_inflammatory === true ">
     This superfood is anti-inflammatory!
    </p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      superfood: null
    };
  },
  created() {
    api.getSuperfood(this.$route.params.id)
      .then(superfood => {
        this.superfood = superfood;
      });
  }
};
</script>

<style scoped>
p {
  font-size: 1.15em;
  font-weight: bolder;
  color: green;
}
</style>