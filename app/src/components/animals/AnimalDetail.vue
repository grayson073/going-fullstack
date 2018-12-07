<template>
  <section v-if="animal">
    <div id="detail">
      <h2>{{animal.name}}</h2>
      <img v-bind:src="animal.image"/>
      <p>
        <span>Weight:</span> {{animal.weight}} pounds
      </p>
      <p>
        <span>Size:</span> {{animal.size}}
      </p>
      <p>
        <span>Mammal:</span> {{animal.mammal}}
      </p>
      <button @click="handleDelete">Delete 🗑️</button>
      <button @click="handleUpdate">Edit ✎</button>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      animal: null
    };
  },
  created() {
    api.getAnimal(this.$route.params.id)
      .then(animal => {
        this.animal = animal;
      });
  },
  methods: {
    handleDelete() {
      api.deleteAnimal(this.animal.id)
        .then(() => {
          this.$router.push('/animals');
        });
    },

    handleUpdate() {
      api.updateAnimal(this.animal.id)
        .then(() => {
          this.$router.push();
        });
    }
  }
};
</script>

<style scoped>
  section {
    border: 2px solid black;
    text-align: center;
  }
  section img {
    max-width: 300px;
    box-shadow: 2px 2px 2px black;
  }
  .detail {
    border: 1px solid black;
    width: 600px;
  }

  button {
    padding-bottom: 10px;
    height: 25px;
    margin: 5px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
  }
  span {
    font-weight: bold;
  }

</style>