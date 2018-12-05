<template>
    <section class="guitarists">
    <h2>Guitarists</h2>
    
    <AddGuitarist :onAdd="handleAdd" class="add"/>

    <ul v-if="guitarists">
      <li v-for="guitarist in guitarists" :key="guitarist.id">
       <p> 
         <span class="name">
           {{guitarist.name}}</span> -- 
           <span class="music-type">{{guitarist.musicType}}</span>
       </p>
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../services/api';
import AddGuitarist from './AddGuitarist';

export default {
  data() {
    return {
      guitarists: null,
      error: null
    };
  },
  components: {
    AddGuitarist
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
    },
    remove(id) {
      this.skills.splice(id, 1);
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
</style>
