<template>
  <section class="home-page">
    <h2>Welcome to The Singer List</h2>
    <p class="singers-link"><RouterLink to="/singers">Take a look at the singers</RouterLink></p>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  .singers-link {
    background: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid darkgoldenrod;
  }

  .singers-link a {
    text-decoration: none;
    font-weight: 600;
  }

  .singers-link a:hover {
    color: darkgoldenrod;
  }

</style>