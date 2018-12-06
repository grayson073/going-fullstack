<template>
  <section v-if="singer">
    <h2>{{singer.name}}</h2>
    <p class="age">
      Age: {{singer.age}}
    </p>
    <p class="genre">
        Genre: {{singer.genre}}
    </p>
    <p class="summary">
      {{singer.summary}}
    </p>
    <!-- WIP delete functionality -->
     <!-- <button @click=handleDelete>Delete</button> -->
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      singer: null
    };
  },
  created() {
    api.getSinger(this.$route.params.id)
      .then(singer => {
        this.singer = singer;
      });
  }
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

section {
    font-family: 'PT Sans Narrow', sans-serif;
    margin: 0;
    padding: 0;
}

h2 {
    width: 20%;
    text-align: center;
    background: lightgoldenrodyellow;
    border: 1px solid darkgoldenrod;
    margin-bottom: 10px;
    padding: 5px;
}

.age {
    margin-top: 0px;
    font-size: .9em;
}

.genre {
    font-size: 1.2em;
}

.summary {
    color: #AAAAAA;
    font-size: 1.2em;
}

</style>

