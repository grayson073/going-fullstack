<template>
  <section>
    <h1>Favorite Guitarists App</h1>
    <RouterLink to="/guitarists" class="cta">view guitarists</RouterLink>
  </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
section {
  text-align: center;
}
h1 {
  margin: 60px;
  font-size: 50px;
}
.cta {
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: bold;
  background: #6AD58B;
  transition: background 0.3s ease;
}
.cta:hover {
  opacity: 1;
  background: #3ac162;
  text-decoration: none;
  color: white;
}
</style>
