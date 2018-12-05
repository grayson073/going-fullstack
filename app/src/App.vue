<template>
  <div class="app">
    <header>
      <h1>Animals</h1>
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
  p, h1, h2, h3, label, a {
    font-family: avenir; 
  }
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: black;
    color: white;
    padding: 20px;
  }
 
  nav a {
    text-decoration: none;
    color: black;
    margin: 5px;
    border: 2px solid gray;
    padding: 3px;
    background: white;
  }

</style>