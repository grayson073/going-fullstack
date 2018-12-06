<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>  
  </div>
</template>

<script>
export default {
    name: 'app',
    components: {

    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  display: flex;
  justify-content: space-around;
}
header {
  background-color: rgba(13, 221, 228, 0.411);
  padding: 20px;
}

</style>
