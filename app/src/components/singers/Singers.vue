<template>
  <section class="singers">
    <h2>The Singers</h2>
    <AddSinger :onAdd="handleAdd"/>
    <SingerList :singers="singers"/>
  </section>
</template>

<script>
import api from '../../services/api';
import AddSinger from './AddSinger';
import SingerList from './SingerList'

export default {
  data() {
    return {
      singers: null,
      error: null
    };
  },
  components: {
    AddSinger,
    SingerList
  },
  created() {
    api.getSingers()
      .then(singers => {
        this.singers = singers;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(singer) {
      return api.addSinger(singer)
        .then(saved => {
          this.singers.push(saved);
        });
    }
  }
  
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

h2 {
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 2.4em;
}

</style>

