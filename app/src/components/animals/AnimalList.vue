<template>
    <ul v-if="animals">
      <li v-for="animal in animals" :key="animal.id">
        <RouterLink :to="`/animals/${animal.id}`">{{animal.name}}</RouterLink>
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

<style>
  li {
    list-style: none;
    position: relative;
    width: 450px;
    height: 450px;
    border: 1px solid black;
    text-align: center;
    margin: 5px 5px;
  }
  h3 {
    text-align: center;
    z-index: 1;
    margin: 0px;
  }
  .info {
    background: rgba(255, 255, 255, 0.8);
    margin-top: 0px;
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