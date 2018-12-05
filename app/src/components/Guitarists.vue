<template>
    <section class="guitarists">
      <h2>Guitarists</h2>
      <AddGuitarist :onAdd="handleAdd"/>
      <GuitaristList :guitarists="guitarists"/>
  </section>
</template>

<script>
import api from '../services/api';
import AddGuitarist from './AddGuitarist';
import GuitaristList from './GuitaristList';

export default {
  data() {
    return {
      guitarists: null,
      error: null
    };
  },
  components: {
    AddGuitarist,
    GuitaristList
  },
  created() {
    api.getGuitarists()
      .then(guitarists => {
        this.guitarists = guitarists;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(guitarist) {
      return api.addGuitarist(guitarist)
        .then(saved => {
          this.guitarists.push(saved);
        });
    }
  }
  
};
</script>

<style>
li {
  list-style: none;
}
.guitarists {
  text-align: center;
}
.name {
  font-weight: bold;
}
.music-type {
  font-style: italic;
}
p {
  padding: 10px;
}
.add {
  padding: 20px;
}
h2 {
  font-size: 50px;
}
</style>
