<template>
  <div id="app">
    <header>
      <img alt="Superfoods logo" src="./assets/superfoods-logo.png">
      <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink class="title" to="/superfoods">SuperFoods</RouterLink>
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

<style>
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
  background: yellowgreen;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 header img {
  height: 100%;
  background: yellowgreene;

}
 nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
  justify-content: center;
}
 main {
  padding: 8px;
}
nav .title {
  color: green;
}
</style>
