<template>
    <ul v-if="animals">
      <li v-for="animal in animals" :key="animal.id">
        <RouterLink :to="`/animals/${animal.id}`"><h3 class="info">{{animal.name}}</h3></RouterLink>
        <img v-bind:src="animal.image"/>
      </li>
    </ul>
</template>

<script>

export default {
  props: {
    animals: null
  }
};
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
  li {
    list-style: none;
    position: relative;
    width: 350px;
    height: 350px;
    border: 2px solid black;
    text-align: center;
    margin: 20px;
    
  }
  h3 {
    text-align: center;
    z-index: 1;
    margin: 0px;
  }
  .info {
    background: rgba(255, 255, 255, 0.8);
    margin-top: 0px;
    padding: 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  li img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

</style>