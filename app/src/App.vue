<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink class="Home" to="/">Home</RouterLink>
        <RouterLink class="Movies" to="/movies">Movies</RouterLink>
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
  font-family: 'Playfair Display SC', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  box-sizing: border-box;
  text-align: center;
}
nav {
  display:flex;
  margin: 10px;
  justify-content: space-around;
}
.Home {
  color: white;
  font-size: 1.2rem;
}
.Movies {
  color: white;
  font-size: 1.2rem;
}
</style>
