<template>
  <section v-if="guitarist">
    <h2>{{guitarist.name}}</h2>
    <p>
      {{guitarist.type}} musician
    </p>
    <p>
      Year of birth: {{guitarist.yob}}
    </p>
  </section>
</template>

<script>
import api from '../services/api';
export default {
  data() {
    return {
      guitarist: null
    };
  },
  created() {
    api.getGuitarist(this.$route.params.id)
      .then(guitarist => {
        this.guitarist = guitarist;
      });
  }
};
</script>

<style scoped>

</style>
