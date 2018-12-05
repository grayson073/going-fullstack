<template>
  <section class="singers">
    <h2>The Singers</h2>

    <ul v-if="singers">
      <li v-for="singer in singers" :key="singer.id">
        {{singer.name}} - 
        {{singer.genre}}
      </li>
    </ul>

    <AddSinger :onAdd="handleAdd"/>
    
  </section>
</template>

<script>
import api from '../../services/api';
import AddSinger from './AddSinger';

export default {
  data() {
    return {
      singers: null,
      error: null
    };
  },
  components: {
    AddSinger
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

</style>

