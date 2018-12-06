<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/singers">A List of Singers</RouterLink>
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
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

header {
  height: 75px;
  background: lightseagreen;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'PT Sans Narrow', sans-serif;
}

header img {
  height: 100%;
}

nav a {
  text-decoration: none;
  color: white;
  margin: 3px;
  padding: 3px;
  border: 1px solid white;
}

main {
  padding: 8px;
}


</style>
