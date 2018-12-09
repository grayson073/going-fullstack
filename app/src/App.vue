<template>
  <div id="app">
    <header>
      <h1>Game Library</h1>
      <img src="../public/img/nintendo_header.png">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/games">Games</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px 0px 0px 0px;
  margin-left: calc(100vw - 100%);
}
a:visited, a {
  color: black;
}

img {
  margin-bottom: 30px;
  width: 90vw;
  height: auto;
}

body {
  margin: 0px;
  padding: 0px;
}

nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

</style>
