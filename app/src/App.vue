<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/articles">Articles</RouterLink>
    </nav>

    <main>
      <RouterView></RouterView>
    </main>

  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 100%;
}
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
</style>
