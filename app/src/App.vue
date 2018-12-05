<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/" class="nav">Home</RouterLink>
        <RouterLink to="/guitarists" class="nav">Guitarists</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script>

export default {
  name: 'app'
};
</script>

<style>
header {
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  padding-top: 20px;
}
.nav {
  padding: 20px;
  color: #3ac162;
}
a {
  text-decoration: none;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
