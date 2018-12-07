<template>
  <div class="app">
    <header>
      <img class="logo" src="https://reverb-res.cloudinary.com/image/upload/v1463673236/Moogfest-Headere_seirtu.jpg">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/synths">Synths</RouterLink>
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
html {
  margin-top: -5vh;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  display: flex;
  justify-content: space-evenly;
}
img.logo {
  width: 400px;
}
</style>
