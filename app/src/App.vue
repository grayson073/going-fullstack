<template>
  <div class="app">
    <header>
      <h1>Oodles of Animals</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/animals">Animals</RouterLink>
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
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: black;
    color: white;
  }
 
  nav a {
    text-decoration: none;
    color: black;
    margin: 5px;
    border: 1px solid black;
    padding: 3px;
    background: white;
  }

</style>