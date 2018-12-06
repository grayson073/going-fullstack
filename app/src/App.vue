<template>
  <div class="app">
    <header>
      <img src="./assets/logo.png">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="books">Book Collection</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
