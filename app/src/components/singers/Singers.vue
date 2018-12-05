<template>
  <section class="singers">
    <h2>The Singers</h2>

    <ul v-if="singers">
      <li v-for="singer in singers" :key="singer.id">
        <p class="singer-name"> {{singer.name}}</p>
        <p class="singer-genre">{{singer.genre}}</p>
        <!-- <p class="singer-genre">Age: {{singer.age}}</p>
        <p class="singer-genre">Summary: {{singer.summary}}</p> -->
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
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

ul {
    display: flex;
}

li {
    list-style-type: none;
    margin: 30px;
    font-family: 'PT Sans Narrow', sans-serif;
}

.singer-name {
    font-size: 1.1em;
    font-weight: 600;
    margin: 0;
    padding: 0;
}

.singer-genre {
    font-size: .8em;
    margin: 0;
    padding: 0;
}

</style>

